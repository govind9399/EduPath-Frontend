import React from "react";

export default function AdInteractionTrackingPage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#111]">  {
      <div className="w-full min-h-screen bg-[#fff] text-[#111] font-sans pb-20">
        {/* HEADER */}

        {/* PAGE TITLE */}
        <div className="max-w-[1400px] mx-auto px-6 mt-10">
          <h1 className="text-3xl font-bold">Ad Interaction Tracking</h1>
          <p className="text-gray-500 mt-1">Monitor and analyze all user interactions with your ads</p>
        </div>

        {/* FILTERS */}
        <div className="max-w-[1400px] mx-auto px-6 mt-8 grid grid-cols-4 gap-4">
          <select className="border rounded-lg h-[48px] px-3 text-sm text-gray-600">
            <option>Date Range</option>
          </select>
          <select className="border rounded-lg h-[48px] px-3 text-sm text-gray-600">
            <option>Ad Type</option>
          </select>
          <select className="border rounded-lg h-[48px] px-3 text-sm text-gray-600">
            <option>Placement</option>
          </select>
          <div className="flex items-center gap-3">
            <button className="h-[48px] px-4 border rounded-lg text-sm">Reset</button>
            <button className="h-[48px] px-4 bg-[#4B6BFB] text-white rounded-lg text-sm">Apply Filters</button>
          </div>
        </div>

        {/* TOP STATS */}
        <div className="max-w-[1400px] mx-auto px-6 mt-10 grid grid-cols-4 gap-6">
          <div className="border rounded-xl p-6 shadow-sm">
            <p className="text-gray-500 text-sm">Total Impressions</p>
            <h2 className="text-3xl font-bold mt-2">125,430</h2>
            <p className="text-xs text-green-500 mt-1">↑ 12% from last month</p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <p className="text-gray-500 text-sm">Total Clicks</p>
            <h2 className="text-3xl font-bold mt-2">5,271</h2>
            <p className="text-xs text-green-500 mt-1">↑ 8% from last month</p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <p className="text-gray-500 text-sm">Engagements</p>
            <h2 className="text-3xl font-bold mt-2">3,842</h2>
            <p className="text-xs text-green-500 mt-1">↑ 5% from last month</p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <p className="text-gray-500 text-sm">Estimated Revenue</p>
            <h2 className="text-3xl font-bold mt-2">$1247.85</h2>
            <p className="text-xs text-green-500 mt-1">↑ 15% from last month</p>
          </div>
        </div>

        {/* TABS */}
        <div className="max-w-[1400px] mx-auto px-6 mt-10 flex border-b">
          <button className="px-6 py-3 border-b-2 border-[#4B6BFB] font-semibold text-[#4B6BFB]">Performance</button>
          <button className="px-6 py-3 text-gray-500">Interactions</button>
          <button className="px-6 py-3 text-gray-500">Details</button>
        </div>

        {/* PERFORMANCE CHART BLOCK */}
        <div className="max-w-[1400px] mx-auto px-6 mt-8 border rounded-xl p-8 shadow-sm">
          <h2 className="text-lg font-semibold mb-1">Ad Performance Over Time</h2>
          <p className="text-gray-500 text-sm">Track impressions, clicks, and engagement metrics across your ads</p>

          {/* chart buttons */}
          <div className="flex gap-3 mt-5">
            <button className="px-4 py-2 bg-[#4B6BFB] text-white rounded-lg text-sm">Line Chart</button>
            <button className="px-4 py-2 border rounded-lg text-sm">Bar Chart</button>
          </div>

          <div className="w-full h-[320px] bg-gray-100 rounded-xl mt-6"></div>
        </div>

        {/* KEY INSIGHTS */}
        <div className="max-w-[1400px] mx-auto px-6 mt-10 border rounded-xl p-8 shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Key Insights</h2>
          <p className="text-sm text-gray-500 mb-6">Actionable recommendations based on your ad performance</p>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-[#e8f1ff] border border-[#c9ddff]">
              <p className="font-semibold text-[#1a4cff]">High engagement on pre-roll ads</p>
              <p className="text-sm mt-1">Your pre-roll ads have a 4.2% CTR, which is 35% above platform average.</p>
            </div>

            <div className="p-4 rounded-lg bg-[#fff7e6] border border-[#ffe1ac]">
              <p className="font-semibold text-[#d09a00]">Mid-roll ad performance declining</p>
              <p className="text-sm mt-1">Mid-roll CTR has decreased by 12% over the last 7 days.</p>
            </div>

            <div className="p-4 rounded-lg bg-[#e8fff0] border border-[#c0ffd7]">
              <p className="font-semibold text-[#1a9c4c]">Revenue growth opportunity</p>
              <p className="text-sm mt-1">You could increase revenue by 18% by optimizing ad frequency and targeting.</p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-14 py-10 text-center text-sm text-gray-500 border-t">
          © 2025 EduStream. All rights reserved.
        </footer>
      </div>
}
</div>
  );
}
