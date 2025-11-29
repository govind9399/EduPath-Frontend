 import React, { useState } from "react";
import { Navbar } from "../../componets/creator/navbar";
import { NavLink } from "react-router-dom";

// Single-file React component (Tailwind-ready) for Creator Dashboard
// Usage: paste into a Vite + React project (src/components/CreatorDashboard.jsx)
// Make sure Tailwind is configured in the project. Replace image URLs as needed.

export default function CreatorDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-200">
      {/* NAVBAR */}
      <Navbar/>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900">Creator Dashboard</h2>
        <p className="text-sm text-gray-600 mt-1">
          Manage your content, monitor performance, and grow your channel
        </p>

        {/* Tabs */}
        <div className="mt-6">
          <div className="flex items-center gap-4 bg-transparent">
            {[
              { id: "overview", label: "Dashboard Overview" },
              { id: "recent", label: "Recent Videos" },
              { id: "monet", label: "Monetization" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm ${
                  activeTab === tab.id ? "bg-gray-100 text-gray-900" : "text-gray-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Channel Card */}
        <section className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="h-40 bg-[url('/banner-placeholder.jpg')] bg-cover bg-center"></div>
          <div className="p-6">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-lg font-semibold text-gray-700">
                  T
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Teaching web development, programming, and digital skills to aspiring developers worldwide.
                  </h3>
                  <div className="mt-2 text-sm text-gray-500 flex gap-6">
                    <div>Subscribers</div>
                    <div>Total Videos</div>
                    <div>
                      Category{" "}
                      <span className="font-medium text-gray-700">Programming &amp; Software Engineering</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="px-4 py-2 border border-gray-200 rounded-md text-sm bg-white shadow-sm">
                  Edit Channel
                </button>
                <button className="px-4 py-2 border border-transparent rounded-md text-sm bg-transparent text-gray-700">
                  View Channel
                </button>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-md bg-blue-50 border border-blue-100 text-sm text-blue-800">
              Your channel is verified. You have access to all monetization features.
            </div>
          </div>
        </section>

        {/* ACTION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="col-span-1 md:col-span-1 bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex items-center justify-center">
            <div className="w-full text-center">
              <div className="w-full h-28 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-medium">
                Upload Video
              </div>
              <p className="text-sm text-gray-500 mt-3">Add new educational content</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col items-center justify-center">
            <svg className="w-10 h-10 mb-2 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-sm font-medium text-gray-900">Manage Courses</div>
            <p className="text-xs text-gray-500">Organize videos into courses</p>
          </div>

          <NavLink to="/channel-setting" className="col-span-1 md:col-span-1 bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col items-center justify-center">
            <svg className="w-10 h-10 mb-2 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2v20M5 7h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-sm font-medium text-gray-900">Channel Settings</div>
            <p className="text-xs text-gray-500">Customize your channel</p>
          </NavLink>

          <div className="col-span-1 md:col-span-1 bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col items-center justify-center">
            <svg className="w-10 h-10 mb-2 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-sm font-medium text-gray-900">Moderate Comments</div>
            <p className="text-xs text-gray-500">Review and manage comments</p>
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <StatCard title="Total Views (28 days)" value="550,452" delta="12% from last month" />
          <StatCard title="Estimated Revenue" value="₹15,450" delta="8% from last month" />
          <StatCard title="Watch Hours" value="12,500 hrs" delta="5% from last month" />
          <StatCard title="New Subscribers" value="+3,100" delta="15% from last month" />
        </div>

        {/* MONETIZATION + VIEWS SECTION */}

        {/* Views Trend */}
        <section className="mt-10 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-700">Views Trend (Last 7 Days)</h3>
          <div className="w-full h-64 mt-4 rounded-lg border border-gray-200"></div>
        </section>

        {/* Monetization Overview */}
        <section className="mt-10 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-700">Monetization Overview</h3>
            <button className="text-sm px-4 py-1 border rounded-md bg-white hover:bg-gray-50">View Details →</button>
          </div>

          <div className="mt-5 p-6 rounded-xl border bg-gradient-to-r from-blue-50 to-orange-50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Current Balance</p>
                <p className="text-3xl font-semibold text-gray-900 mt-1">₹45,200.50</p>
                <p className="text-xs text-gray-500 mt-1">Last payout: 2025-11-01</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-semibold">$</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <p className="text-sm text-gray-600">⚡ Total RPM</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">₹55.45</p>
              <p className="text-xs text-gray-500">Revenue per 1000 impressions</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">🔸 Ad Impressions</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">850,000</p>
              <p className="text-xs text-gray-500">Total ad impressions served</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-md text-sm font-medium">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              View Revenue Analytics
            </button>

            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-md text-sm font-medium">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M5 7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Monetization Settings
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 text-center text-sm text-gray-500">
          Free education for everyone, powered by ads • <span className="underline">Privacy</span> •{" "}
          <span className="underline">Terms</span> • <span className="underline">Help</span>
        </footer>
      </main>
    </div>
  );
}

function StatCard({ title, value, delta }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
        <div className="text-sm text-green-600">{delta}</div>
      </div>
    </div>
  );
}
