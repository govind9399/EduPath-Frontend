 import React from "react";
import { Navbar } from "../../componets/creator/navbar";
import { NavLink } from "react-router-dom";

export const MonetizationDashboard=()=> {
  return (
    <div className="w-full min-h-screen bg-white text-[#111] font-sans flex flex-col">
      {/* Top Nav */}
      {/* <header className="w-full flex items-center justify- */}
       <Navbar/>
      <div className="flex w-full">
        {/* Sidebar */}
        <aside className="w-60 min-h-screen border-r p-4 bg-white">
          <h2 className="font-semibold mb-6">
            Tech Academy <br />
            <span className="text-sm text-gray-500">Creator Studio</span>
          </h2>

          <ul className="space-y-4 text-[15px]">
            <li className="font-semibold text-blue-600">Dashboard</li>
            <li>Upload Video</li>
            <li>Course Management</li>
            <li>Channel Settings</li>
            <li>Comment Moderation</li>
            <li>Monetization</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          <h1 className="text-2xl font-bold">Monetization Dashboard</h1>
          <p className="text-gray-600 -mt-3">
            Monitor your earnings and revenue performance
          </p>

          {/* Monetization Active Box */}
          <div className="border bg-[#E8F6EA] shadow-none rounded-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-green-600 font-semibold">Monetization Active</p>
                <p className="text-sm text-gray-600 mt-1">
                  Your channel is eligible for monetization
                </p>
              </div>
              <span className="text-green-600 font-semibold">active</span>
            </div>

            <div className="flex space-x-20 mt-4 text-gray-700">
              <p>
                Subscribers <br />
                <span className="font-bold text-black">15,000</span>
              </p>
              <p>
                Watch Hours (12 months) <br />
                <span className="font-bold text-black">45,000</span>
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex space-x-3">
            <button className="border rounded-md px-4 py-2">Today</button>
            <button className="border rounded-md px-4 py-2">Week</button>
            <button className="bg-[#0038FF] text-white rounded-md px-4 py-2">Month</button>
            <button className="border rounded-md px-4 py-2">All</button>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-4 gap-4">
            <div className="border rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-600">Total Earnings</p>
              <h2 className="text-2xl font-bold mt-1">$12,450.75</h2>
              <p className="text-green-600 text-xs mt-1">↑ 12.5% from last month</p>
            </div>

            <div className="border rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-600">This Month</p>
              <h2 className="text-2xl font-bold mt-1">$3,250.50</h2>
              <p className="text-green-600 text-xs mt-1">↑ 8.3% from last month</p>
            </div>

            <div className="border rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-600">RPM</p>
              <h2 className="text-2xl font-bold mt-1">$4.25</h2>
              <p className="text-xs text-gray-500">Revenue per 1K views</p>
            </div>

            <div className="border rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-600">CPM</p>
              <h2 className="text-2xl font-bold mt-1">$8.50</h2>
              <p className="text-xs text-gray-500">Cost per 1K impressions</p>
            </div>
          </div>

          {/* Earnings Trend + Revenue Breakdown */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-64 border rounded-lg p-4 shadow-sm text-gray-500">
              Earnings Trend <br />
              <span className="text-sm">Your earnings and impressions over time</span>
            </div>

            <div className="border rounded-lg p-4 shadow-sm">
              <p className="font-semibold">Revenue Breakdown</p>
              <p className="text-sm text-gray-500 mb-4">Income sources this month</p>

              <div className="space-y-2 text-[15px]">
                <p className="flex justify-between">
                  <span>🔵 Ad Breaks</span> <span>$8,750.25</span>
                </p>
                <p className="flex justify-between">
                  <span>🟡 Sponsorships</span> <span>$3,700.50</span>
                </p>
              </div>

              <p className="flex justify-between font-semibold mt-4 text-black">
                <span>Total This Month</span> <span>$3,250.50</span>
              </p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="border rounded-lg shadow-sm p-6 grid grid-cols-3 text-center">
            <div>
              <p className="text-sm text-gray-600">Total Impressions</p>
              <h2 className="text-xl font-bold">1.3M</h2>
            </div>
            <div>
              <p className="text-sm text-gray-600">This Month Impressions</p>
              <h2 className="text-xl font-bold">385.0K</h2>
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg. RPM</p>
              <h2 className="text-xl font-bold">$4.25</h2>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="border px-4 py-2 rounded-md bg-white">
              View Detailed Report
            </button>
            <NavLink to="/channel-setting" className="border px-4 py-2 rounded-md bg-white">
              Manage Settings
            </NavLink>
            <NavLink to="/creator-dashboard" className="border px-4 py-2 rounded-md bg-white">
              Back to Dashboard
            </NavLink>
            <button className="bg-[#0038FF] text-white px-4 py-2 rounded-md">
              Upload New Video
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
