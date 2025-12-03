 import React, { useState } from "react";
import { Navbar } from "../../componets/creator/navbar";
import { NavLink } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";

export default function CreatorDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          Creator Dashboard
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 mt-1">
          Manage your content, monitor performance, and grow your channel
        </p>

        {/* TABS */}
        <div className="mt-6 overflow-x-auto">
          <div className="flex items-center gap-3 sm:gap-4 whitespace-nowrap pb-2">
            {[
              { id: "overview", label: "Dashboard Overview" },
              { id: "recent", label: "Recent Videos" },
              { id: "monet", label: "Monetization" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-xs sm:text-sm transition ${
                  activeTab === tab.id
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CHANNEL CARD */}
        <section className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="h-32 sm:h-40 bg-[url('/banner-placeholder.jpg')] bg-cover bg-center"></div>

          <div className="p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

              {/* PROFILE */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-100 flex items-center justify-center text-lg font-semibold text-gray-700">
                  T
                </div>

                <div className="max-w-lg">
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900 leading-tight">
                    Teaching web development, programming, and digital skills
                    to aspiring developers worldwide.
                  </h3>

                  <div className="mt-2 text-xs sm:text-sm text-gray-500 flex flex-wrap gap-4">
                    <div>Subscribers</div>
                    <div>Total Videos</div>
                    <div>
                      Category{" "}
                      <span className="font-medium text-gray-700">
                        Programming & Software Engineering
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* EDIT BUTTON */}
              <NavLink
                to="/channel-setting"
                className="px-4 py-2 border border-gray-200 rounded-md text-xs sm:text-sm bg-white shadow-sm"
              >
                Edit Channel
              </NavLink>
            </div>

            <div className="mt-4 p-4 rounded-md bg-blue-50 border border-blue-100 text-xs sm:text-sm text-blue-800">
              Your channel is verified. You have access to all monetization features.
            </div>
          </div>
        </section>

        {/* ACTION CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">

          {/* Upload Video */}
          <NavLink
            to="/upload-video"
            className="bg-white p-4 sm:p-6 shadow-sm border border-gray-200 rounded-xl flex flex-col items-center justify-center hover:shadow-md"
          >
            <MdOutlineFileUpload className="text-3xl text-blue-600" />
            <span className="font-semibold text-sm sm:text-base mt-2">Upload Video</span>
            <p className="text-[10px] sm:text-xs text-gray-500 text-center">
              Add new educational content
            </p>
          </NavLink>

          {/* Manage Videos */}
          <div className="bg-white p-4 sm:p-6 shadow-sm border border-gray-200 rounded-xl flex flex-col items-center justify-center hover:shadow-md">
            <div className="font-medium text-sm sm:text-lg text-gray-900">
              Manage Videos
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500">Organize videos into courses</p>
          </div>

          {/* Channel Settings */}
          <NavLink
            to="/channel-setting"
            className="bg-white p-4 sm:p-6 shadow-sm border border-gray-200 rounded-xl flex flex-col items-center justify-center hover:shadow-md"
          >
            <div className="text-sm sm:text-base font-medium text-gray-900">
              Channel Settings
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500">Customize your channel</p>
          </NavLink>

          {/* Moderate Comments */}
          <div className="bg-white p-4 sm:p-6 shadow-sm border border-gray-200 rounded-xl flex flex-col items-center justify-center hover:shadow-md">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="text-sm font-medium text-gray-900 mt-1">
              Moderate Comments
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500">Review and manage comments</p>
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <StatCard title="Total Views (28 days)" value="550,452" delta="12% from last month" />
          <StatCard title="Estimated Revenue" value="₹15,450" delta="8% from last month" />
          <StatCard title="Watch Hours" value="12,500 hrs" delta="5% from last month" />
          <StatCard title="New Subscribers" value="+3,100" delta="15% from last month" />
        </div>

        {/* VIEWS TREND */}
        <section className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <h3 className="text-xs sm:text-sm font-medium text-gray-700">Views Trend (Last 7 Days)</h3>
          <div className="w-full h-48 sm:h-64 mt-4 rounded-lg border border-gray-200"></div>
        </section>

        {/* MONETIZATION SECTION */}
        <section className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h3 className="text-xs sm:text-sm font-medium text-gray-700">
              Monetization Overview
            </h3>
            <NavLink
              to="/monetization-dashboard"
              className="text-xs sm:text-sm px-4 py-1 border rounded-md bg-white hover:bg-gray-50"
            >
              View Details →
            </NavLink>
          </div>

          {/* Earnings */}
          <div className="mt-5 p-4 sm:p-6 rounded-xl border bg-gradient-to-r from-blue-50 to-orange-50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Current Balance</p>
                <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-1">₹45,200.50</p>
                <p className="text-xs text-gray-500 mt-1">Last payout: 2025-11-01</p>
              </div>

              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-lg sm:text-xl font-semibold">
                $
              </div>
            </div>
          </div>

          {/* Monetization Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div>
              <p className="text-xs sm:text-sm text-gray-600">⚡ Total RPM</p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1">₹55.45</p>
              <p className="text-xs text-gray-500">Revenue per 1000 impressions</p>
            </div>

            <div>
              <p className="text-xs sm:text-sm text-gray-600">🔸 Ad Impressions</p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1">850,000</p>
              <p className="text-xs text-gray-500">Total ad impressions served</p>
            </div>
          </div>

          {/* CALL TO ACTION BUTTONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <NavLink
              to="/revenue-analytics-report"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-md text-sm font-medium"
            >
              View Revenue Analytics
            </NavLink>

            <NavLink
              to="/monetization-setting"
              className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-md text-sm font-medium"
            >
              Monetization Settings
            </NavLink>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 text-center text-xs sm:text-sm text-gray-500">
          Free education for everyone, powered by ads •{" "}
          <span className="underline">Privacy</span> •{" "}
          <span className="underline">Terms</span> •{" "}
          <span className="underline">Help</span>
        </footer>
      </main>
    </div>
  );
}

function StatCard({ title, value, delta }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-200">
      <div className="text-xs sm:text-sm text-gray-500">{title}</div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-lg sm:text-2xl font-semibold text-gray-900">{value}</div>
        <div className="text-[10px] sm:text-sm text-green-600">{delta}</div>
      </div>
    </div>
  );
}
