import React, { useRef, useState } from "react";

/**
 * ThumbnailEditor.jsx
 * Single-file React + Tailwind component
 * - Light-mode only
 * - Replace placeholder URLs with your real thumbnails
 *
 * Usage:
 *   import ThumbnailEditor from './components/ThumbnailEditor';
 *   <ThumbnailEditor onSave={(data) => console.log(data)} />
 */

export default function ThumbnailEditor({ initial = {}, onSave = () => {} }) {
  // initial.currentThumbUrl can be provided by parent
  const suggestedDefaults = [
    "/thumb-react.jpg",
    "/thumb-hashmap.jpg",
    "/thumb-hashmaps-deep.jpg",
  ];
  const [currentUrl, setCurrentUrl] = useState(initial.currentThumbUrl || suggestedDefaults[0]);
  const [selectedIndex, setSelectedIndex] = useState(null); // index of suggested selected (null if using uploaded)
  const [customFile, setCustomFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const MAX_BYTES = 2 * 1024 * 1024; // 2MB
  const ALLOWED_TYPES = ["image/jpeg", "image/png"];

  function handleSuggestedClick(url, idx) {
    setError("");
    setSelectedIndex(idx);
    setCustomFile(null);
    setCurrentUrl(url);
  }

  function handleChooseFile(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    validateAndPreview(f);
  }

  function validateAndPreview(file) {
    setError("");
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("Invalid file type. Upload JPG or PNG.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setError("File too large. Maximum file size is 2MB.");
      return;
    }
    const url = URL.createObjectURL(file);
    setCustomFile(file);
    setCurrentUrl(url);
    setSelectedIndex(null);
  }

  function handleUploadAreaClick() {
    fileInputRef.current?.click();
  }

  function handleDrop(e) {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) validateAndPreview(f);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleSave() {
    // Produce a payload: { selectedSuggestedIndex, customFile }
    onSave({
      selectedSuggestedIndex: selectedIndex,
      customFile,
    });
    // If you want to upload, send 'customFile' to server via FormData
  }

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Edit Video Details</h1>
            <p className="text-gray-500 mt-1">Choose a thumbnail that represents your video</p>
          </div>
          <div className="text-gray-400">×</div>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex gap-3 items-center">
          <button className="px-4 py-2 text-sm rounded-md bg-white border border-gray-200 shadow-sm">Basic Info</button>
          <button className="px-4 py-2 text-sm rounded-md bg-white border border-gray-200 shadow-sm">Thumbnail</button>
          <button className="px-4 py-2 text-sm rounded-md bg-white border border-gray-200 shadow-sm">Settings</button>
        </div>

        {/* Card */}
        <div className="mt-6 bg-white border rounded-xl shadow-sm p-6">
          {/* Current Thumbnail */}
          <div>
            <h3 className="font-medium text-gray-800">Current Thumbnail</h3>
            <div className="mt-3">
              <div className="w-full rounded-lg overflow-hidden border border-gray-200">
                {/* Big preview */}
                <img
                  src={currentUrl}
                  alt="Current thumbnail"
                  className="w-full h-[360px] object-cover rounded-md"
                  onError={(e) => { e.currentTarget.src = "/placeholder-thumb.png"; }}
                />
              </div>
            </div>
          </div>

          {/* Suggested Thumbnails */}
          <div className="mt-6">
            <h4 className="font-medium text-gray-800">Choose from Suggested Thumbnails</h4>
            <div className="mt-3 flex gap-3">
              {suggestedDefaults.map((url, idx) => (
                <button
                  key={url}
                  onClick={() => handleSuggestedClick(url, idx)}
                  className={`relative block rounded-lg overflow-hidden border ${selectedIndex === idx ? "border-blue-600 ring-2 ring-blue-100" : "border-gray-200"} transition`}
                  aria-pressed={selectedIndex === idx}
                >
                  <img src={url} alt={`Suggested ${idx+1}`} className="w-40 h-24 object-cover block" />
                </button>
              ))}
            </div>
          </div>

          {/* Upload Custom */}
          <div className="mt-6">
            <div
              className="mt-4 border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:bg-gray-50"
              onClick={handleUploadAreaClick}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div className="flex items-center justify-center mb-3">
                <div className="bg-blue-50 p-3 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="13" width="18" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>

              <div className="text-gray-700 font-medium">Upload Custom Thumbnail</div>
              <div className="text-gray-400 text-sm mt-1">JPG or PNG, max 2MB, 1280×720px recommended</div>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleUploadAreaClick}
                  className="inline-flex items-center gap-2 px-4 py-2 border rounded-md bg-white hover:bg-gray-50"
                >
                  <span className="text-gray-700">＋ Upload File</span>
                </button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={handleChooseFile}
              />

              {error && (
                <div className="mt-3 text-sm text-red-600">{error}</div>
              )}
            </div>
          </div>

          {/* Tips Box */}
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="text-blue-600">💡</div>
              <div>
                <div className="font-medium text-gray-800">Thumbnail Tips</div>
                <ul className="mt-2 list-disc text-sm text-gray-700 ml-5 space-y-1">
                  <li>Use high contrast colors to stand out</li>
                  <li>Include text that describes the video</li>
                  <li>Keep it simple and readable at small sizes</li>
                  <li>Avoid cluttered or confusing designs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-6 border-t" />

          {/* Save / Cancel */}
          <div className="mt-6 flex justify-end items-center gap-3">
            <button
              type="button"
              className="px-4 py-2 border rounded-md text-gray-700 bg-white hover:bg-gray-50"
              onClick={() => {
                // revert to initial if provided
                setCustomFile(null);
                setSelectedIndex(null);
                setCurrentUrl(initial.currentThumbUrl || suggestedDefaults[0]);
                setError("");
              }}
            >
              Cancel
            </button>

            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => {
                handleSave();
              }}
            >
              Save &amp; Publish
            </button>
          </div>
        </div>

        {/* Footer small text */}
        <div className="mt-6 text-xs text-gray-400">Recommended: 1280×720px, JPG/PNG, under 2MB</div>
      </div>
    </div>
  );
}
