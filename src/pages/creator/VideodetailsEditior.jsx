import { useState } from "react";
import { X, Image, Settings } from "lucide-react";

export const VideoDetailsEditor= ()=> {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const suggestedTags = [
    "Programming",
    "Web Development",
    "Data Structures",
    "Algorithms",
    "JavaScript",
    "Python",
  ];

  const addTag = () => {
    if (tagInput.trim() !== "" && !tags.includes(tagInput) && tags.length < 15) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const removeTag = (tag) => setTags(tags.filter((t) => t !== tag));

  const addSuggestedTag = (tag) => {
    if (!tags.includes(tag) && tags.length < 15) {
      setTags([...tags, tag]);
    }
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl">

        {/* Top Title */}
        <h1 className="text-3xl font-semibold">Edit Video Details</h1>
        <p className="text-gray-500 mt-1">
          Customize your video's title, description, and settings
        </p>

        {/* Tabs */}
        <div className="flex gap-4 mt-6 border-b pb-2">
          <button className="px-4 py-2 font-medium border-b-2 border-blue-600 text-blue-600">
            Basic Info
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center gap-2">
            <Image className="w-4 h-4" /> Thumbnail
          </button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center gap-2">
            <Settings className="w-4 h-4" /> Settings
          </button>
        </div>

        {/* Form Container */}
        <div className="mt-6 bg-white border rounded-xl shadow-sm p-8 space-y-8">

          {/* Title */}
          <div>
            <label className="font-medium">Video Title <span className="text-red-500">*</span></label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value.slice(0, 100))}
              className="mt-2 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter video title"
            />
            <div className="text-gray-400 text-sm mt-1">Make it clear and descriptive</div>
            <div className="text-right text-gray-400 text-sm">{title.length}/100</div>
          </div>

          {/* Description */}
          <div>
            <label className="font-medium">Description <span className="text-red-500">*</span></label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value.slice(0, 5000))}
              rows={5}
              className="mt-2 w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter detailed description"
            />
            <div className="text-gray-400 text-sm mt-1">
              Help viewers understand the content
            </div>
            <div className="text-right text-gray-400 text-sm">{description.length}/5000</div>
          </div>

          {/* Tags */}
          <div>
            <label className="font-medium">Tags <span className="text-gray-400">(Optional)</span></label>

            <div className="flex gap-2 mt-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTag()}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Type a tag and press Enter"
              />
              <button
                onClick={addTag}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                +
              </button>
            </div>

            {/* Tag List */}
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 border px-3 py-1 rounded-full flex items-center gap-2 text-sm"
                >
                  {tag}
                  <X className="w-4 h-4 cursor-pointer" onClick={() => removeTag(tag)} />
                </span>
              ))}
            </div>

            <div className="text-gray-400 text-sm mt-1">
              {tags.length}/15 tags added
            </div>

            {/* Suggested Tags */}
            <div className="mt-4">
              <div className="text-gray-700 font-medium mb-2">Suggested Tags</div>
              <div className="flex flex-wrap gap-2">
                {suggestedTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => addSuggestedTag(tag)}
                    className="border px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-blue-50"
                  >
                    + {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="px-5 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
            Cancel
          </button>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Save & Publish
          </button>
        </div>
      </div>
    </div>
  );
}
