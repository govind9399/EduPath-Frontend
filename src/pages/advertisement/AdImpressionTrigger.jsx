import React from "react";
import { NavLink } from "react-router-dom";

export default function AdImpressionTrigger() {
  return (
    <div className="w-full min-h-screen bg-white text-[#1a1a1a] font-sans">

      <main className="w-full max-w-6xl mx-auto mt-10">
        <h1 className="text-3xl font-bold">Ad Impression Trigger</h1>
        <p className="text-gray-600 mt-1">
          The moment an advertisement is cued for display. This is the starting point of the ad
          serving process.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Left Loading Box */}
          <div className="lg:col-span-2 border rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold mb-3 flex items-center gap-2">
              <span>📡</span> Ad Loading
            </h2>

            <div className="border rounded-xl h-72 flex flex-col items-center justify-center">
              <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 font-medium">Loading Advertisement</p>
              <p className="text-sm text-gray-500">Fetching ad content from server...</p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold mb-1">Loading Progress</p>
              <div className="w-full h-2 bg-gray-200 rounded-lg"></div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6 text-sm">
              <div>
                <p className="font-semibold">Placement Type</p>
                <p>Pre-Roll</p>
                <p className="text-gray-500 text-xs mt-1">Plays before video content starts</p>
              </div>

              <div>
                <p className="font-semibold">Estimated Duration</p>
                <p>15 seconds</p>
                <p className="text-gray-500 text-xs mt-1">Non-skippable</p>
              </div>
            </div>

            <ul className="mt-6 text-sm space-y-1">
              <li className="text-green-600">✔️ Ad slot identified and reserved</li>
              <li className="text-green-600">✔️ User context collected and validated</li>
              <li className="text-green-600">✔️ Ad content loading from server</li>
              <li className="text-blue-600">⏳ Ready for rendering</li>
            </ul>
          </div>

          {/* Right Impression Details */}
          <div className="border rounded-xl p-6 shadow-sm text-sm">
            <h2 className="font-semibold mb-3">Impression Details</h2>
            <p className="text-xs text-gray-600 mb-1">Impression ID</p>
            <div className="border rounded-lg px-3 py-2 mb-3">imp_g7b6tfb2p</div>

            <p className="text-xs text-gray-600 mb-1">Status</p>
            <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md text-xs">Loading</span>

            <p className="text-xs text-gray-600 mt-4 mb-1">Timestamp</p>
            <p>7:37:27 AM</p>
          </div>
        </div>

        {/* Content & User Context */}
        <div className="border rounded-xl p-6 shadow-sm mt-10">
          <h2 className="font-semibold mb-4">Content & User Context</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold">🎬 Video Content</p>
              <p className="mt-2 text-gray-600">Title</p>
              <p>Introduction to Web Development</p>
              <p className="mt-2 text-gray-600">Category</p>
              <span className="px-2 py-1 bg-gray-200 rounded text-xs">Educational</span>
            </div>

            <div>
              <p className="font-semibold">👤 User Context</p>
              <p className="mt-2 text-gray-600">Region</p>
              <p>India</p>
              <p className="mt-2 text-gray-600">Status</p>
              <span className="px-2 py-1 bg-gray-200 rounded text-xs">Authenticated</span>
            </div>

            <div>
              <p className="font-semibold">💻 Device Context</p>
              <p className="mt-2 text-gray-600">Type</p>
              <p>Desktop</p>
              <p className="mt-2 text-gray-600">Resolution</p>
              <span className="px-2 py-1 bg-gray-200 rounded text-xs">1920x1080</span>
            </div>
          </div>

          <h3 className="font-semibold mt-6">Ad Targeting Criteria</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mt-3">
            <div>
              <p className="text-gray-600">Content Type</p>
              <p>Educational</p>
            </div>
            <div>
              <p className="text-gray-600">Audience Age</p>
              <p>18-45</p>
            </div>
            <div>
              <p className="text-gray-600">Interest</p>
              <p>Learning</p>
            </div>
            <div>
              <p className="text-gray-600">Language</p>
              <p>English</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <NavLink to="/adrendring">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
            ▶ Proceed to Ad Rendering
          </button>
          </NavLink>
          <NavLink to="/adrendering">
          <button className="border px-6 py-3 rounded-lg">↩ Return to Video</button>
          </NavLink>
        </div>

        <details className="mt-8 text-sm cursor-pointer">
          <summary className="font-semibold">Show Technical Details</summary>
        </details>

        <div className="mt-6 border rounded-xl p-6 text-sm bg-gray-50">
          <h3 className="font-semibold mb-2">About Ad Impressions</h3>
          <p className="text-gray-600">
            An ad impression is recorded when an advertisement is served to a user. This page
            demonstrates the technical moment when an ad is triggered and begins loading. The actual ad
            rendering happens on the next page in the workflow.
          </p>
        </div>

        <footer className="w-full text-center text-sm text-gray-500 mt-20 pb-10">
          © 2025 EduStream. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
