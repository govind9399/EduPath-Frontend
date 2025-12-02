 import React from "react";
import { Navbar } from "../../componets/creator/navbar";
import { Sidebar } from "../../componets/creator/sidebar";

export const RevenueAnalyticsReport=()=> {
  return (
    <div className="w-full min-h-screen bg-white text-[#111] font-sans flex flex-col">
      {/* Top Navigation */}
        <Navbar/>
        <Sidebar/>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6 pb-40 ml-64 mt-12">
          {/* Header Row */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Revenue Analytics</h1>
              <p className="text-gray-600 -mt-1">
                Detailed breakdown of your earnings and monetization performance
              </p>
            </div>

            <button className="border px-4 py-2 rounded-md bg-white">
              ⬇ Export Report
            </button>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-2 gap-4 w-[70%]">
            <input
              className="border rounded-lg px-4 py-2 text-sm"
              placeholder="Time Period"
            />
            <input
              className="border rounded-lg px-4 py-2 text-sm"
              placeholder="Date Range"
            />
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-4 gap-4 pt-2">
            <div className="border shadow-sm rounded-lg p-4">
              <p className="text-sm text-gray-600">Total Revenue</p>
              <h2 className="text-3xl font-bold mt-1">₹62,340</h2>
              <p className="text-green-600 text-xs mt-1">
                ↑ 5% from last month
              </p>
            </div>

            <div className="border shadow-sm rounded-lg p-4">
              <p className="text-sm text-gray-600">RPM (Revenue Per Mille)</p>
              <h2 className="text-2xl font-bold mt-1">₹115.20</h2>
              <p className="text-xs text-gray-500">Revenue per 1000 views</p>
            </div>

            <div className="border shadow-sm rounded-lg p-4">
              <p className="text-sm text-gray-600">CPM (Cost Per Mille)</p>
              <h2 className="text-2xl font-bold mt-1">₹41.50</h2>
              <p className="text-xs text-gray-500">
                Advertiser cost per 1000 impressions
              </p>
            </div>

            <div className="border shadow-sm rounded-lg p-4">
              <p className="text-sm text-gray-600">Ad Impressions</p>
              <h2 className="text-3xl font-bold mt-1">5,40,800</h2>
              <p className="text-xs text-gray-500">Total ad views</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center mt-2 border rounded-lg w-full bg-gray-50 p-1 text-sm">
            <button className="flex-1 py-2 bg-white rounded text-center border">
              Overview
            </button>
            <button className="flex-1 py-2 text-center">Breakdown</button>
            <button className="flex-1 py-2 text-center">Details</button>
          </div>

          {/* Revenue Trend Graph Placeholder */}
          <div className="shadow-sm border rounded-lg h-64 p-4 text-gray-500 text-sm">
            Revenue Trend <br />
            <span>Your earnings over the selected time period</span>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-6 mt-4">
            {/* Revenue Sources */}
            <div className="border shadow-sm rounded-lg p-6">
              <h3 className="font-semibold text-lg">Revenue Sources</h3>
              <p className="text-sm text-gray-500 -mt-1">
                Distribution of revenue by ad type
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <p className="flex justify-between">
                  <span className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-blue-600"></span>
                    <span>Pre-roll Ads</span>
                  </span>
                  <span>₹28,053</span>
                </p>

                <p className="flex justify-between">
                  <span className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-orange-500"></span>
                    <span>Mid-roll Ads</span>
                  </span>
                  <span>₹21,819</span>
                </p>

                <p className="flex justify-between">
                  <span className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-green-600"></span>
                    <span>Display Ads</span>
                  </span>
                  <span>₹12,468</span>
                </p>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="border shadow-sm rounded-lg p-6">
              <h3 className="font-semibold text-lg">Performance Metrics</h3>
              <p className="text-sm text-gray-500 -mt-1">
                Key indicators of monetization health
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <p className="flex justify-between">
                  <span>CTR (Click-Through Rate)</span>
                  <span className="font-semibold">3.2%</span>
                </p>

                <p className="flex justify-between">
                  <span>Viewability Rate</span>
                  <span className="font-semibold">85.4%</span>
                </p>

                <p className="flex justify-between">
                  <span>Ad Completion Rate</span>
                  <span className="font-semibold">92.1%</span>
                </p>

                <p className="flex justify-between">
                  <span>Average Session Duration</span>
                  <span className="font-semibold">12m 34s</span>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    // </div>
  );
}
