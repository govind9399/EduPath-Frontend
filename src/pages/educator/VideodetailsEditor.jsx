import { useState } from "react";
import { X } from "lucide-react";
import { Navbar } from "../../componets/creator/navbar";
import { Sidebar } from "../../componets/creator/sidebar";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import { useParams } from "react-router-dom";
export const VideoDetailsEditor = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const navigate= useNavigate();
   const {videoId} = useParams();
  console.log("Video id from url", videoId);
const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    title,
    description,
    tags,
  };

  try {
    const response = await axios.put(
      `http://localhost:3000/api/video/${videoId}/details`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.success) {
      navigate(`/video/${videoId}/thumbnail`);
    }
  } catch (error) {
    console.error("Update failed:", error.response?.data || error.message);
  }
};
    
       
 
  const suggestedTags = [
    "Programming",
    "Web Development",
    "Data Structures",
    "Algorithms",
    "JavaScript",
    "Python",
  ];

  const addTag = () => {
    if (
      tagInput.trim() !== "" &&
      !tags.includes(tagInput) &&
      tags.length < 15
    ) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const removeTag = (tag) => setTags(tags.filter((t) => t !== tag));
  const addSuggestedTag = (tag) => {
    if (!tags.includes(tag) && tags.length < 15) setTags([...tags, tag]);
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gpt-bg dark:text-gpt-text transition">
      {/* NAVBAR */}
      <Navbar />

      {/* SIDEBAR */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* PAGE WRAPPER */}
      <div className="w-full max-w-4xl px-4 pt-24 md:ml-64 pb-12">
        {/* Top Title */}
        <h1 className="text-2xl sm:text-3xl font-semibold dark:text-gpt-text">
          Edit Video Details
        </h1>
        <p className="text-gray-500 dark:text-gpt-muted text-sm sm:text-base mt-1">
          Customize your video's title, description, and settings
        </p>

        {/* FORM CARD */}
        <form  onSubmit={handleSubmit}>
        <div className="mt-6 bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border rounded-xl shadow-sm p-5 sm:p-8 space-y-8">
          {/* Title */}
          <div>
            <label className="font-medium dark:text-gpt-text">
              Video Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value.slice(0, 100))}
              className="mt-2 w-full border dark:border-gpt-border rounded-lg px-4 py-2 text-sm sm:text-base bg-white dark:bg-gpt-surface dark:text-gpt-text focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter video title"
            />
            <div className="text-gray-400 dark:text-gpt-muted text-xs sm:text-sm mt-1">
              Make it clear and descriptive
            </div>
            <div className="text-right text-gray-400 dark:text-gpt-muted text-xs sm:text-sm">
              {title.length}/100
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="font-medium dark:text-gpt-text">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value.slice(0, 5000))}
              rows={5}
              className="mt-2 w-full border dark:border-gpt-border rounded-lg px-4 py-2 text-sm sm:text-base bg-white dark:bg-gpt-surface dark:text-gpt-text focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter detailed description"
            />
            <div className="text-gray-400 dark:text-gpt-muted text-xs sm:text-sm mt-1">
              Help viewers understand the content
            </div>
            <div className="text-right text-gray-400 dark:text-gpt-muted text-xs sm:text-sm">
              {description.length}/5000
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="font-medium dark:text-gpt-text">
              Tags <span className="text-gray-400">(Optional)</span>
            </label>

            <div className="flex gap-2 mt-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTag()}
                className="w-full border dark:border-gpt-border bg-white dark:bg-gpt-surface dark:text-gpt-text rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Type a tag and press Enter"
              />
              <button
                onClick={addTag}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                +
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 dark:bg-gpt-border border dark:border-gpt-border px-3 py-1 rounded-full flex items-center gap-2 text-xs sm:text-sm dark:text-gpt-text"
                >
                  {tag}
                  <X
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => removeTag(tag)}
                  />
                </span>
              ))}
            </div>

            <div className="text-gray-400 dark:text-gpt-muted text-xs sm:text-sm mt-1">
              {tags.length}/15 tags added
            </div>

            {/* Suggested Tags */}
            <div className="mt-4">
              <div className="font-medium text-gray-700 dark:text-gpt-text mb-2">
                Suggested Tags
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestedTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => addSuggestedTag(tag)}
                    className="border dark:border-gpt-border bg-white dark:bg-gpt-surface text-xs sm:text-sm px-3 py-1 rounded-full hover:bg-blue-50 dark:hover:bg-gpt-border transition"
                  >
                    + {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Footer Buttons */}
        <div className="flex flex-wrap justify-end gap-3 mt-6">
          <NavLink to="/upload-video">
            <button className="px-4 py-2 border dark:border-gpt-border rounded-lg text-sm bg-white dark:bg-gpt-surface hover:bg-gray-100 dark:hover:bg-gpt-border">
              Cancel
            </button>
          </NavLink>
          <button type="submit"
             className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
          >
            Next
          </button>
        </div>
     </form>

      </div>
    </div>
  );
};
