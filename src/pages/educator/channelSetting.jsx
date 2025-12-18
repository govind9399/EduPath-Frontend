 import React, { useState } from "react";
import { CheckCircle, Trash2, PlusCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../../componets/creator/navbar";
import { Sidebar } from "../../componets/creator/sidebar";

export const ChannelSettings = () => {
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);

  const handleLogoUpload = (e) => setLogo(URL.createObjectURL(e.target.files[0]));
  const handleBannerUpload = (e) => setBanner(URL.createObjectURL(e.target.files[0]));

  return (
    <div className="flex min-h-screen bg-white dark:bg-gpt-bg dark:text-gpt-text transition-colors duration-300">
      {/* TOP NAVBAR */}
      <Navbar />

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 md:ml-64 px-4 md:px-10 py-24 mt-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold dark:text-gpt-text">Channel Settings</h1>
          <p className="text-sm text-gray-600 dark:text-gpt-muted mt-1">
            Manage your channel identity, branding, and profile details
          </p>

          {/* BRANDING */}
          <section className="mt-8 p-6 rounded-xl border shadow-sm bg-white border-gray-200 dark:bg-gpt-surface dark:border-gpt-border">
            <h2 className="font-semibold text-lg dark:text-gpt-text">Channel Branding</h2>
            <p className="text-sm text-gray-600 dark:text-gpt-muted">Upload your logo and channel banner</p>

            {/* LOGO */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-5">
              <img
                src={logo || "https://via.placeholder.com/100"}
                alt="logo"
                className="w-24 h-24 rounded-full object-cover border dark:border-gpt-border"
              />

              <input
                type="file"
                id="logoInput"
                className="hidden"
                accept="image/*"
                onChange={handleLogoUpload}
              />
              <label
                htmlFor="logoInput"
                className="px-4 py-2 text-sm rounded-md border bg-gray-50 hover:bg-gray-100 dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border cursor-pointer"
              >
                Upload Profile Photo
              </label>
            </div>

            {/* BANNER */}
            <div className="mt-6">
              <img
                src={banner || "https://via.placeholder.com/900x160"}
                alt="banner"
                className="rounded-lg border w-full object-cover dark:border-gpt-border"
              />

              <input
                type="file"
                id="bannerInput"
                className="hidden"
                accept="image/*"
                onChange={handleBannerUpload}
              />
              <label
                htmlFor="bannerInput"
                className="mt-3 block text-center w-full py-3 border rounded-md bg-gray-50 hover:bg-gray-100 dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border text-sm cursor-pointer"
              >
                Upload Banner Background
              </label>
            </div>
          </section>

          {/* BASIC INFORMATION */}
          <section className="mt-8 p-6 rounded-xl border shadow-sm bg-white border-gray-200 dark:bg-gpt-surface dark:border-gpt-border">
            <h2 className="font-semibold text-lg dark:text-gpt-text">Basic Information</h2>

            <label className="block text-sm mt-4 font-medium dark:text-gpt-text">Channel Name</label>
            <input
              className="w-full mt-1 px-3 py-2 rounded-md border text-sm bg-white border-gray-300 dark:bg-gpt-bg dark:border-gpt-border dark:text-gpt-text"
              type="text"
              placeholder="Tech Academy"
            />

            <label className="block text-sm mt-4 font-medium dark:text-gpt-text">Channel Description</label>
            <textarea
              className="w-full mt-1 px-3 py-2 h-24 rounded-md border text-sm bg-white border-gray-300 dark:bg-gpt-bg dark:border-gpt-border dark:text-gpt-text"
            />

            <label className="block text-sm mt-4 font-medium dark:text-gpt-text">Primary Topic</label>
            <input
              className="w-full mt-1 px-3 py-2 rounded-md border text-sm bg-white border-gray-300 dark:bg-gpt-bg dark:border-gpt-border dark:text-gpt-text"
              type="text"
              placeholder="Programming & Software Engineering"
            />
          </section>

          {/* SOCIAL LINKS */}
          <section className="mt-8 p-6 rounded-xl border shadow-sm bg-white border-gray-200 dark:bg-gpt-surface dark:border-gpt-border">
            <h2 className="font-semibold text-lg dark:text-gpt-text">Social Links</h2>

            {["Twitter", "Instagram", "LinkedIn", "Website"].map((item, i) => (
              <div
                key={i}
                className="mt-3 flex justify-between items-center px-4 py-3 rounded-md bg-gray-50 dark:bg-gpt-bg border border-gray-200 dark:border-gpt-border text-sm"
              >
                <span>{item}</span>
                <Trash2 className="w-4 text-gray-500 dark:text-gpt-muted cursor-pointer" />
              </div>
            ))}

            <button className="mt-4 flex items-center gap-2 text-blue-600 dark:text-gpt-accent text-sm hover:opacity-80 transition">
              <PlusCircle className="w-4" /> Add Social Link
            </button>
          </section>

          {/* VERIFICATION */}
          <section className="mt-8 p-6 rounded-xl border shadow-sm bg-white border-gray-200 dark:bg-gpt-surface dark:border-gpt-border flex justify-between items-center">
            <div>
              <p className="font-semibold dark:text-gpt-text">Channel Verification</p>
              <p className="text-sm text-gray-600 dark:text-gpt-muted">
                Your channel is eligible for monetization
              </p>
            </div>

            <span className="px-4 py-2 rounded-md flex items-center gap-2 bg-green-100 text-green-700 dark:bg-gpt-bg dark:text-gpt-accent dark:border-gpt-border border">
              <CheckCircle className="w-4" /> Verified
            </span>
          </section>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
            <NavLink
              to="/creator-dashboard"
              className="px-4 py-2 border rounded-md bg-white hover:bg-gray-50 dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border text-sm text-center dark:text-gpt-text"
            >
              Back to Dashboard
            </NavLink>

            <NavLink to="/creator-dashboard">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm">
                Save Settings
              </button>
            </NavLink>
          </div>

          {/* FOOTER */}
          <footer className="text-center text-sm text-gray-500 dark:text-gpt-muted mt-10">
            © 2025 EduStream • Privacy • Terms • Help
          </footer>
        </div>
      </main>
    </div>
  );
};
