import { Upload } from "lucide-react";

export default function UploadVideo() {
  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl">

        {/* Header */}
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6">
          ← Back
        </button>

        <h1 className="text-3xl font-semibold">Upload Video</h1>
        <p className="text-gray-500 mt-1">
          Share your educational content with millions of learners
        </p>

        {/* Upload Card */}
        <div className="mt-8 bg-white border rounded-xl shadow-sm p-8 space-y-6">

          <div>
            <h2 className="text-lg font-semibold">Select Your Video</h2>
            <p className="text-gray-500 text-sm">
              Upload your educational video content. Supported formats: MP4, WebM, MOV, AVI (Max 5GB)
            </p>
          </div>

          {/* Drop Zone */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl py-14 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>

            <p className="font-medium text-gray-700">Drag and drop your video here</p>
            <p className="text-gray-500 text-sm">or click to browse from your computer</p>

            {/* Upload Button */}
            <button className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700">
              Choose File
            </button>

            <p className="text-gray-400 text-xs mt-3">
              Supported: MP4, WebM, MOV, AVI • Max size: 5GB
            </p>
          </div>

          {/* Tips Box */}
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              💡 Tips for Better Videos
            </h3>

            <ul className="mt-3 text-gray-600 text-sm space-y-1 list-disc pl-5">
              <li>Use clear audio and good lighting for better viewer experience</li>
              <li>Keep videos between 5–60 minutes for optimal engagement</li>
              <li>Add subtitles or captions to reach more learners</li>
              <li>Include a clear title and description in the next step</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
