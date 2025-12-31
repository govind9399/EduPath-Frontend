import React, { useRef, useState } from "react";
import { Sidebar } from "../../componets/creator/sidebar";
import { Navbar } from "../../componets/creator/navbar";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export const ThumbnailEditor = ({ initial = {}, onSave = () => {} }) => {

  const suggestedDefaults = [
    "/thumb-react.jpg",
    "/thumb-hashmap.jpg",
    "/thumb-hashmaps-deep.jpg",
  ];
  const {videoId} = useParams();
  const navigate = useNavigate();
  const [currentUrl, setCurrentUrl] = useState(initial.currentThumbUrl || suggestedDefaults[0]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [customFile, setCustomFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const MAX_BYTES = 2 * 1024 * 1024*1024;
  const ALLOWED_TYPES = ["image/jpeg", "image/png"];

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const formData = new FormData();

    // CASE 1: Custom uploaded file
    if (customFile) {
      formData.append("thumbnail", customFile);
    }

    // CASE 2: Suggested thumbnail (URL → File)
    else if (currentUrl) {
      const file = await urlToFile(currentUrl, "thumbnail.jpg");
      formData.append("thumbnail", file);
    }

    const res = await axios.put(
      `http://localhost:3000/api/video/${videoId}/thumbnail`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Thumbnail saved:", res.data);
    navigate("/videos");

  } catch (err) {
    console.error(err);
    setError("Failed to upload thumbnail");
  }
};



  function handleSuggestedClick(url, idx) {
    setError("");
    setSelectedIndex(idx);
    setCustomFile(null);
    setCurrentUrl(url);
  }

  function handleChooseFile(e) {
    const f = e.target.files?.[0];
    if (f) validateAndPreview(f);
  }

  function validateAndPreview(file) {
    setError("");
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("Invalid file type. Only JPG and PNG allowed.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setError("Max size is 2MB.");
      return;
    }
    const url = URL.createObjectURL(file);
    setSelectedIndex(null);
    setCustomFile(file);
    setCurrentUrl(url);
  }

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800 dark:bg-gpt-bg dark:text-gpt-text transition " >
       <Navbar />
       <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 px-4 md:px-10 py-10 md:ml-64 mt-20">
        {/* HEADER */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold dark:text-gpt-text">
              Edit Video Thumbnail
            </h1>
            <p className="text-gray-500 dark:text-gpt-muted text-sm">
              Choose a thumbnail that represents your video
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 dark:text-gpt-muted dark:hover:text-gpt-text text-2xl">
            ×
          </button>
        </div>

        {/* TABS */}
        <div className="mt-6 flex gap-2">
          <NavLink to="/video-details-editor">
            <button className=" px-4 py-2 text-sm rounded-md border shadow-sm bg-white hover:bg-gray-50 dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border ">
              Basic Info
            </button>
          </NavLink>
        </div>

        {/* CARD */}
          <form action="" onSubmit={handleSubmit}>
        <div
          className=" mt-6 p-6 rounded-xl border bg-white shadow-sm dark:bg-gpt-surface dark:border-gpt-border " >
          {/* CURRENT THUMBNAIL */}
          <h3 className="font-medium dark:text-gpt-text">Current Thumbnail</h3>
          <div className="mt-3 w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gpt-border">
            <img
              src={currentUrl}
              className="w-full h-48 md:h-[340px] object-cover"
            />
          </div>

          {/* SUGGESTED */}
          <h4 className="mt-6 font-medium dark:text-gpt-text">Suggested</h4>
          <div className="mt-3 flex flex-wrap gap-3">
            {suggestedDefaults.map((url, idx) => (
              <button
                key={url}
                onClick={() => handleSuggestedClick(url, idx)}
                className={`
                  rounded-lg overflow-hidden border transition
                  ${idx === selectedIndex ? "border-blue-600 ring-2 ring-blue-200 dark:ring-blue-800" : "border-gray-200 dark:border-gpt-border"} `} >
                <img src={url} className="w-32 h-20 md:w-40 md:h-24 object-cover" />
              </button>
            ))}
          </div>

          {/* CUSTOM UPLOAD */}
          <div
            className="
            mt-6 p-6 border-2 border-dashed rounded-xl text-center cursor-pointer border-gray-300 hover:bg-gray-50     dark:border-gpt-border dark:hover:bg-gpt-border
          "
            onClick={() => fileInputRef.current.click()}
          >
            <p className="font-medium dark:text-gpt-text">
              Upload Custom Thumbnail
            </p>
            <p className="text-sm text-gray-500 dark:text-gpt-muted">
              JPG / PNG • Max 2MB • 1280×720px recommended
            </p>

            <button
              className="
              mt-4 px-4 py-2 border rounded-md bg-white hover:bg-gray-50
              dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border
            "
            >
              ＋ Upload File
            </button>

            <input
              type="file"
              ref={fileInputRef}
              accept="image/jpeg,image/png"
              className="hidden"
              onChange={handleChooseFile}
            />

            {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
          </div>

          {/* SAVE / CANCEL */}
          <div className="mt-6 flex justify-end gap-3">
            <NavLink to="/video-details-editor">
            <button
              className="
              px-4 py-2 border rounded-md bg-white hover:bg-gray-50
              dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border
            "
            >
              Cancel
            </button>
            </NavLink>

            {/* <NavLink to="/videos"> */}
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save & Publish
              </button>
           </div>
        </div>
        </form>
      </div>
    </div>
  );
};
