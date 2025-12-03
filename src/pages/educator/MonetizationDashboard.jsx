 import React from "react";
import { Navbar } from "../../componets/creator/navbar";
import { NavLink } from "react-router-dom";
import { Sidebar } from "../../componets/creator/sidebar";

export const MonetizationDashboard = () => {
  return (
    <div className="w-full min-h-screen bg-white text-[#111] font-sans flex flex-col">
      {/* NAVBAR */}
      <Navbar />

      <div className="flex w-full">
        {/* SIDEBAR */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-4 sm:p-6 space-y-6 md:ml-64 mt-20 md:mt-0">
          <h1 className="text-xl sm:text-2xl font-bold">Monetization Dashboard</h1>
          <p className="text-gray-600 text-sm -mt-2">
            Monitor your earnings and revenue performance
          </p>

          {/* Monetization Status Box */}
          <div className="border bg-[#E8F6EA] rounded-lg p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <p className="text-green-600 font-semibold">Monetization Active</p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Your channel is eligible for monetization
                </p>
              </div>
              <span className="text-green-600 font-semibold">active</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-20 mt-4 text-gray-700 gap-4 sm:gap-0">
              <p className="text-sm">
                Subscribers <br />
                <span className="font-bold text-black text-lg">15,000</span>
              </p>
              <p className="text-sm">
                Watch Hours (12 months) <br />
                <span className="font-bold text-black text-lg">45,000</span>
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 sm:space-x-3">
            <button className="border rounded-md px-4 py-2 text-sm">Today</button>
            <button className="border rounded-md px-4 py-2 text-sm">Week</button>
            <button className="bg-[#0038FF] text-white rounded-md px-4 py-2 text-sm">
              Month
            </button>
            <button className="border rounded-md px-4 py-2 text-sm">All</button>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-600">Total Earnings</p>
              <h2 className="text-xl sm:text-2xl font-bold mt-1">$12,450.75</h2>
              <p className="text-green-600 text-xs mt-1">↑ 12.5% from last month</p>
            </div>

            <div className="border rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-600">This Month</p>
              <h2 className="text-xl sm:text-2xl font-bold mt-1">$3,250.50</h2>
              <p className="text-green-600 text-xs mt-1">↑ 8.3% from last month</p>
            </div>

            <div className="border rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-600">RPM</p>
              <h2 className="text-xl sm:text-2xl font-bold mt-1">$4.25</h2>
              <p className="text-xs text-gray-500">Revenue per 1K views</p>
            </div>

            <div className="border rounded-lg p-4 shadow-sm">
              <p className="text-sm text-gray-600">CPM</p>
              <h2 className="text-xl sm:text-2xl font-bold mt-1">$8.50</h2>
              <p className="text-xs text-gray-500">Cost per 1K impressions</p>
            </div>
          </div>

          {/* Charts and Revenue Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="h-48 sm:h-64 lg:col-span-2 border rounded-lg p-4 shadow-sm text-gray-500 text-sm">
              Earnings Trend<br />
              <span className="text-xs sm:text-sm">
                Your earnings and impressions over time
              </span>
            </div>

            <div className="border rounded-lg p-4 shadow-sm">
              <p className="font-semibold text-sm sm:text-base">Revenue Breakdown</p>
              <p className="text-xs sm:text-sm text-gray-500 mb-4">Income sources this month</p>

              <div className="space-y-2 text-sm">
                <p className="flex justify-between">
                  <span>🔵 Ad Breaks</span> <span>$8,750.25</span>
                </p>
                <p className="flex justify-between">
                  <span>🟡 Sponsorships</span> <span>$3,700.50</span>
                </p>
              </div>

              <p className="flex justify-between font-semibold mt-4 text-black text-sm sm:text-base">
                <span>Total This Month</span> <span>$3,250.50</span>
              </p>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 text-center border rounded-lg shadow-sm p-4 sm:p-6 gap-4">
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Total Impressions</p>
              <h2 className="text-lg sm:text-xl font-bold">1.3M</h2>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">This Month Impressions</p>
              <h2 className="text-lg sm:text-xl font-bold">385.0K</h2>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Avg. RPM</p>
              <h2 className="text-lg sm:text-xl font-bold">$4.25</h2>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button className="border px-4 py-2 rounded-md bg-white text-sm">
              View Detailed Report
            </button>
            <NavLink to="/channel-setting" className="border px-4 py-2 rounded-md bg-white text-sm">
              Manage Settings
            </NavLink>
            <NavLink to="/creator-dashboard" className="border px-4 py-2 rounded-md bg-white text-sm">
              Back to Dashboard
            </NavLink>
            <button className="bg-[#0038FF] text-white px-4 py-2 rounded-md text-sm">
              Upload New Video
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
