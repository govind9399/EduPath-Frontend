import React from "react";

export const AdRendering=() =>{
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center font-sans">
      {/* Header */}
 
      {/* Page Title */}
      <div className="w-full max-w-6xl mt-10 px-4">
        <h1 className="text-3xl font-bold">Ad Format Demo</h1>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-6xl px-4 mt-4 flex gap-3">
        <button className="px-5 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">Pre-Roll Ad</button>
        <button className="px-5 py-2 bg-white border rounded-md text-sm">Mid-Roll Ad</button>
        <button className="px-5 py-2 bg-white border rounded-md text-sm">Display Ad</button>
        <button className="px-5 py-2 bg-white border rounded-md text-sm">Banner Ad</button>
      </div>

      {/* Main Section */}
      <div className="w-full max-w-6xl mt-6 px-4 flex gap-6">
        {/* Video Ad Box */}
        <div className="flex-1 border rounded-lg p-4 shadow-sm">
          <div className="relative w-full h-80 bg-gradient-to-b from-gray-700 to-black rounded-lg flex flex-col items-center justify-center text-white">
            <span className="absolute top-3 left-4 text-sm opacity-80">Advertisement</span>
            <span className="absolute top-3 right-4 text-sm opacity-80">15s</span>
            <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 font-semibold">Video Advertisement</p>
            <p className="text-sm opacity-70">Pre-Roll Ad</p>
          </div>

          {/* Ad Info */}
          <div className="bg-black text-white mt-2 rounded-lg p-4">
            <p className="font-semibold">Premium Learning Platform</p>
            <p className="text-sm opacity-80">Upgrade your skills with our comprehensive courses. Start learning today!</p>

            <div className="mt-4 flex gap-3">
              <button className="flex-1 bg-white text-black rounded-md py-2 text-sm">Learn More</button>
              <button className="flex-1 bg-gray-800 text-white rounded-md py-2 text-sm">Skip in 5s</button>
            </div>
          </div>

          <div className="mt-3 text-sm text-gray-600 p-3 border rounded-md bg-gray-50">
            This ad will automatically complete in <strong>15s</strong> or you can skip it after the countdown.
          </div>
        </div>

        {/* Tracking Box */}
        <div className="w-80 border rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Ad Interaction Tracking</h2>

          <div className="text-sm mb-4">
            <p>Views</p>
            <div className="w-full h-2 bg-gray-200 rounded-md mt-1"></div>
            <p className="text-right text-xs mt-1">1</p>
          </div>

          <div className="text-sm mb-4">
            <p>Clicks</p>
            <div className="w-full h-2 bg-gray-200 rounded-md mt-1"></div>
            <p className="text-right text-xs mt-1">0</p>
          </div>

          <div className="text-sm mb-4">
            <p>Engagement</p>
            <div className="w-full h-2 bg-gray-200 rounded-md mt-1"></div>
            <p className="text-right text-xs mt-1">0s</p>
          </div>

          <div className="text-sm mb-6">
            <p>CTR</p>
            <div className="w-full h-2 bg-gray-200 rounded-md mt-1"></div>
            <p className="text-right text-xs mt-1">0.0%</p>
          </div>

          <div className="text-sm mb-4">
            <p><strong>Ad Format:</strong> Pre-Roll</p>
            <p><strong>Duration:</strong> 15s</p>
            <p><strong>Status:</strong> <span className="text-green-600 font-semibold">Active</span></p>
          </div>

          <button className="w-full bg-white border rounded-md py-2 text-sm mb-3">View Analytics</button>
          <button className="w-full bg-blue-600 text-white rounded-md py-2 text-sm">Return to Video</button>
        </div>
      </div>
    </div>
  );
}
