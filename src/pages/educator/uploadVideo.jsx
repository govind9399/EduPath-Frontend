import { Upload } from "lucide-react";
import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { Navbar } from "../../componets/creator/navbar";
import { Sidebar } from "../../componets/creator/sidebar";
import axios from "axios";

export default function UploadVideo() {
  const [video, setVideo] = useState(null);
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!video) {
    alert("Please select a video file");
    return;
  }

  const formData = new FormData();
  formData.append("video", video);

  try {
    const response = await axios.post(
      "http://localhost:3000/api/video/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response.data);
navigate(`/video/${response.data.videoId}/details`);
  } catch (error) {
    console.error("Upload error:", error);
  }
};


  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gpt-bg dark:text-gpt-text transition">
      {/* NAVBAR */}
      <Navbar />
      {/* SIDEBAR */}
      <Sidebar />
      {/* MAIN CONTENT */}
      <div className="flex-1 md:ml-64 px-4 py-24">
        <NavLink
          to="/creator-dashboard"
          className="flex items-center gap-2 text-gray-600 dark:text-gpt-muted hover:text-gray-800 dark:hover:text-gpt-text mb-4 sm:mb-6 text-sm sm:text-base"
        >
          ← Back
        </NavLink>

        <h1 className="text-2xl sm:text-3xl font-semibold dark:text-gpt-text">
          Upload Video
        </h1>

        <p className="text-gray-500 dark:text-gpt-muted mt-1 text-sm sm:text-base">
          Share your educational content with millions of learners
        </p>

        {/* UPLOAD CARD */}
       <form  onSubmit={handleSubmit}>
        <div className="mt-6 sm:mt-8 bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border rounded-xl shadow-sm p-5 sm:p-8 space-y-6">
          {/* TITLE */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold dark:text-gpt-text">
              Select Your Video
            </h2>
            <p className="text-gray-500 dark:text-gpt-muted text-xs sm:text-sm">
              Supported formats: MP4, WebM, MOV, AVI • Max size: 5GB
            </p>
          </div>

          {/* DROP ZONE */}
          <div className="border-2 border-dashed border-gray-300 dark:border-gpt-border rounded-xl py-10 sm:py-14 flex flex-col items-center text-center px-3 dark:text-gpt-text">
            <div className="bg-blue-100 dark:bg-gpt-border p-3 sm:p-4 rounded-full mb-4">
              <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-gpt-text" />
            </div>

            <p className="font-medium text-gray-700 dark:text-gpt-text text-sm sm:text-base">
              Drag and drop your video here
            </p>

            <p className="text-gray-500 dark:text-gpt-muted text-xs sm:text-sm">
              or click to browse from your computer
            </p>

            {/* FILE INPUT */}
            <label className="mt-4 inline-block cursor-pointer bg-blue-600 text-white px-5 py-2 rounded-lg text-xs sm:text-sm hover:bg-blue-700">
              Choose File
              <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e)=>setVideo(e.target.files[0])}
              />
            </label>

            {video && (
              <p className="mt-2 text-sm dark:text-gpt-text">
                Selected File:{" "}
                <span className="font-semibold text-blue-700 dark:text-gpt-text">
                  {video.name}
                </span>
              </p>
            )}

            <p className="text-gray-400 dark:text-gpt-muted text-[10px] sm:text-xs mt-3">
              Supported: MP4, WebM, MOV, AVI • Max size: 5GB
            </p>
          </div>

          {/* NEXT BUTTON */}
          {video && (
            <button type="submit" className="flex justify-center">
              {/* <Link to="/video-details-editor"> */}
                <span className="px-6 py-2 rounded-xl flex items-center gap-2 bg-blue-700 text-white text-sm sm:text-base hover:bg-blue-800">
                  Next <GrFormNextLink className="text-xl" />
                </span>
              {/* </Link> */}
            </button>
          )}

          {/* TIPS BOX */}
          <div className="bg-blue-50 dark:bg-gpt-surface dark:border dark:border-gpt-border p-4 sm:p-5 rounded-lg">
            <h3 className="font-semibold text-gray-800 dark:text-gpt-text flex items-center gap-2 text-sm sm:text-base">
              💡 Tips for Better Videos
            </h3>

            <ul className="mt-3 text-gray-600 dark:text-gpt-muted text-xs sm:text-sm space-y-1 list-disc pl-5">
              <li>Use clear audio and proper lighting</li>
              <li>Best duration: 5–60 minutes</li>
              <li>Add subtitles/captions for accessibility</li>
              <li>Provide a clear title and description in the next step</li>
            </ul>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}
