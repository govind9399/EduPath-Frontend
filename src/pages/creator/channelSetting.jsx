import React from "react";
import { Upload, Search, CheckCircle, Trash2, PlusCircle } from "lucide-react";

export const ChannelSettings =()=> {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ───────── Sidebar ───────── */}
      <aside className="w-60 h-screen border-r bg-white p-4 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <img
            src="https://via.placeholder.com/40"
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <div>
            <p className="font-semibold text-gray-800">Tech Academy</p>
            <p className="text-xs text-gray-500">Creator Studio</p>
          </div>
        </div>

        <nav className="space-y-3 text-sm">
          {["Dashboard", "Upload Video", "Course Management", "Channel Settings", "Comment Moderation", "Monetization"].map(
            (item, i) => (
              <button
                key={i}
                className={`w-full text-left px-3 py-2 rounded hover:bg-gray-100 ${
                  item === "Channel Settings"
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-700"
                }`}
              >
                {item}
              </button>
            )
          )}
        </nav>

        <div className="mt-auto text-xs text-gray-500 p-2 flex items-center gap-2">
          <img
            src="https://via.placeholder.com/25"
            className="rounded-full"
            alt=""
          />
          Account
        </div>
      </aside>

      {/* ───────── Content Area ───────── */}
      <main className="flex-1">

        {/* Top Navbar */}
        <header className="h-16 flex items-center justify-between border-b bg-white px-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-800">EduStream</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                className="w-72 pl-9 pr-3 py-2 border rounded-lg text-sm bg-gray-50 focus:outline-none"
                placeholder="Search courses, videos, creators..."
              />
              <Search className="w-4 absolute left-3 top-2.5 text-gray-400" />
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded">
              <Upload className="w-4" /> Upload
            </button>

            <img
              src="https://via.placeholder.com/35"
              className="w-8 h-8 rounded-full"
              alt=""
            />
          </div>
        </header>

        {/* Page Title */}
        <div className="px-10 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Channel Settings</h1>
          <p className="text-sm text-gray-600 mt-1">
            Customize your channel profile, branding, and identity to reflect your style.
          </p>

          {/* Channel Branding */}
          <section className="mt-8 bg-white border rounded-xl p-6">
            <h2 className="font-semibold text-lg">Channel Branding</h2>
            <p className="text-sm text-gray-600">
              Upload your channel logo and banner to establish your brand identity
            </p>

            {/* Logo */}
            <div className="mt-5 flex items-center gap-5">
              <img
                src="https://via.placeholder.com/80"
                className="w-20 h-20 rounded-full"
                alt=""
              />
              <button className="px-4 py-2 border rounded-md text-sm bg-gray-50 hover:bg-gray-100">
                Upload Logo
              </button>
            </div>

            {/* Banner */}
            <div className="mt-6">
              <img
                src="https://via.placeholder.com/900x160"
                className="w-full rounded-lg border"
                alt=""
              />
              <button className="mt-3 w-full py-3 border rounded-md bg-gray-50 hover:bg-gray-100 text-sm">
                Click to upload banner
              </button>
            </div>
          </section>

          {/* Basic Info */}
          <section className="mt-8 bg-white border rounded-xl p-6">
            <h2 className="font-semibold text-lg">Basic Information</h2>

            <label className="block mt-4 text-sm font-medium">Channel Name</label>
            <input className="w-full mt-1 px-3 py-2 border rounded" value="Tech Academy" />

            <label className="block mt-4 text-sm font-medium">Channel Description</label>
            <textarea
              className="w-full mt-1 px-3 py-2 border rounded h-24"
              defaultValue="Teaching web development, programming, and digital skills to aspiring developers worldwide."
            />

            <label className="block mt-4 text-sm font-medium">Primary Topic</label>
            <input
              className="w-full mt-1 px-3 py-2 border rounded"
              value="Programming & Software Engineering"
            />
          </section>

          {/* Social Links */}
          <section className="mt-8 bg-white border rounded-xl p-6">
            <h2 className="font-semibold text-lg">Social Links</h2>

            {["Twitter", "Instagram", "LinkedIn", "Website"].map((link, index) => (
              <div
                key={index}
                className="w-full mt-3 px-4 py-3 bg-gray-50 rounded-md flex justify-between items-center"
              >
                <span className="text-sm">{link}</span>
                <Trash2 className="w-4 text-gray-500 cursor-pointer" />
              </div>
            ))}

            <button className="mt-4 flex items-center gap-2 text-sm text-blue-600">
              <PlusCircle className="w-4" /> Add Social Link
            </button>
          </section>

          {/* Verification */}
          <section className="mt-8 bg-white border rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-800">Channel Verification</p>
              <p className="text-sm text-gray-600">
                Your channel is verified and eligible for monetization.
              </p>
            </div>
            <span className="px-4 py-2 bg-green-100 text-green-600 rounded flex items-center gap-2">
              <CheckCircle className="w-4" /> Verified
            </span>
          </section>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button className="px-4 py-2 border rounded-md bg-white">Back to Dashboard</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Save Settings
            </button>
          </div>

          {/* Footer */}
          <footer className="mt-10 text-center text-sm text-gray-500">
            © 2025 EduStream. All rights reserved. • Privacy • Terms • Help
          </footer>
        </div>
      </main>
    </div>
  );
}
