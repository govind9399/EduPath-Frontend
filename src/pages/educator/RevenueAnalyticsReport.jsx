 import React, { useState } from "react";
import { Navbar } from "../../componets/creator/navbar";
import { Sidebar } from "../../componets/creator/sidebar";
import { IoMenu } from "react-icons/io5";

export const RevenueAnalyticsReport = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white text-[#111] font-sans flex flex-col">
      {/* NAVBAR */}
      <Navbar />

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden fixed top-20 left-4 z-50 bg-gray-900 text-white p-2 rounded"
      >
        <IoMenu size={22} />
      </button>

      {/* SIDEBAR */}
      <div
        className={`fixed top-16 left-0 z-40 h-full bg-white border-r shadow-md p-3 w-56
        transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 sm:p-6 space-y-6 pt-24 md:pt-6 md:ml-64 pb-24">

        {/* HEADER ROW */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Revenue Analytics</h1>
            <p className="text-gray-600 text-sm">
              Detailed breakdown of your earnings and monetization performance
            </p>
          </div>

          <button className="border px-4 py-2 rounded-md bg-white text-sm">
            ⬇ Export Report
          </button>
        </div>

        {/* FILTERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-[70%]">
          <input className="border rounded-lg px-4 py-2 text-sm" placeholder="Time Period" />
          <input className="border rounded-lg px-4 py-2 text-sm" placeholder="Date Range" />
        </div>

        {/* OVERVIEW CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <Card title="Total Revenue" value="₹62,340" delta="↑ 5% from last month" big />
          <Card title="RPM (Revenue Per Mille)" value="₹115.20" />
          <Card title="CPM (Cost Per Mille)" value="₹41.50" />
          <Card title="Ad Impressions" value="5,40,800" big />
        </div>

        {/* TABS */}
        <div className="flex flex-wrap items-center border rounded-lg w-full bg-gray-50 p-1 text-sm">
          <button className="flex-1 py-2 bg-white rounded border text-center">Overview</button>
          <button className="flex-1 py-2 text-center">Breakdown</button>
          <button className="flex-1 py-2 text-center">Details</button>
        </div>

        {/* TREND GRAPH */}
        <div className="shadow-sm border rounded-lg h-48 sm:h-64 p-4 text-gray-500 text-sm">
          Revenue Trend <br />
          <span>Your earnings over the selected time period</span>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          <RevenueSources />
          <PerformanceMetrics />
        </div>
      </main>
    </div>
  );
};

/* MINI COMPONENTS — NO LOGIC CHANGED */
const Card = ({ title, value, delta, big }) => (
  <div className="border shadow-sm rounded-lg p-4">
    <p className="text-sm text-gray-600">{title}</p>
    <h2 className={`font-bold mt-1 ${big ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
      {value}
    </h2>
    {delta && <p className="text-green-600 text-xs mt-1">{delta}</p>}
  </div>
);

const RevenueSources = () => (
  <div className="border shadow-sm rounded-lg p-6">
    <h3 className="font-semibold text-lg">Revenue Sources</h3>
    <p className="text-sm text-gray-500 -mt-1">Distribution by ad type</p>
  </div>
);

const PerformanceMetrics = () => (
  <div className="border shadow-sm rounded-lg p-6">
    <h3 className="font-semibold text-lg">Performance Metrics</h3>
    <p className="text-sm text-gray-500 -mt-1">Key monetization indicators</p>
  </div>
);
