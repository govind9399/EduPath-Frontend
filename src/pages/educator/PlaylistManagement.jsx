import React from "react";
import { Navbar } from "../../componets/creator/navbar";
import { Sidebar } from "../../componets/creator/sidebar";
import { NavLink } from "react-router-dom";

export const CourseManagement = () => {
  return (
    <div className="
      font-gpt min-h-screen flex flex-col
      bg-white text-gray-800
      dark:bg-gpt-bg dark:text-gpt-text transition-colors duration-300
    ">
      {/* NAVBAR */}
      <Navbar />

      <div className="flex w-full">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="
          flex-1 md:ml-64 px-4 sm:px-6 py-24 space-y-6
        ">
          {/* HEADER */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold dark:text-gpt-text">
                Playlsit Management
              </h1>
              <p className="text-gray-600 dark:text-gpt-muted">
                Manage your Playlists and create new ones
              </p>
            </div>
          <NavLink to="/videos">
            <button className="
              px-4 py-2 rounded-lg text-sm
              bg-cyan-600 text-white hover:bg-cyan-700 transition
            ">
              + Create New Playlist
            </button>
          </NavLink>
          </div>

          {/* SEARCH + VIEW BUTTONS */}
          <div className="flex space-x-4 items-center">
            <input
              placeholder="Search playlists..."
              className="
                w-[40%] px-4 py-2 rounded-lg text-sm
                border border-gray-300 bg-white
                dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text
              "
            />
            <button className="
              border px-3 py-2 rounded-md
              bg-white dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text
            ">
              ≡
            </button>
            <button className="
              border px-3 py-2 rounded-md
              bg-white dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text
            ">
              ▦
            </button>
          </div>

          {/* COURSES TABLE */}
          <div className="
            overflow-hidden rounded-lg shadow-sm border
            bg-white border-gray-200
            dark:bg-gpt-surface dark:border-gpt-border
          ">
            <table className="w-full text-sm">
              <thead className="
                text-left border-b bg-gray-50 text-gray-600
                dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-muted
              ">
                <tr>
                  <th className="p-4">Playlist Title</th>
                  <th className="p-4">Videos</th>
                  <th className="p-4">Enrollments</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Created</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    title: "Advanced DSA in C++ (Part 2)",
                    img: "/dsa.png",
                    videos: 45,
                    enroll: "15,400",
                    status: "PUBLISHED",
                    date: "5/10/2024",
                  },
                  {
                    title: "React Hooks Fundamentals",
                    img: "/hooks.png",
                    videos: 12,
                    enroll: "8,200",
                    status: "PUBLISHED",
                    date: "1/20/2025",
                  },
                  {
                    title: "Next.js Authentication (Draft)",
                    img: "/nextauth.png",
                    videos: 3,
                    enroll: "0",
                    status: "DRAFT",
                    date: "11/24/2025",
                  },
                ].map((c, i) => (
                  <tr
                    key={i}
                    className="
                      border-b hover:bg-gray-50
                      dark:border-gpt-border dark:hover:bg-gpt-surface
                    "
                  >
                    <td className="p-4 flex items-center gap-3">
                      <img
                        src={c.img}
                        alt={c.title}
                        className="h-12 w-20 rounded object-cover"
                      />
                      <span className="font-medium dark:text-gpt-text">
                        {c.title}
                      </span>
                    </td>

                    <td className="p-4">{c.videos}</td>
                    <td className="p-4">{c.enroll}</td>

                    <td className="p-4">
                      {c.status === "PUBLISHED" && (
                        <span className="
                          bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold
                          dark:bg-green-900/30 dark:text-green-300
                        ">
                          PUBLISHED
                        </span>
                      )}
                      {c.status === "DRAFT" && (
                        <span className="
                          bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-semibold
                          dark:bg-orange-900/30 dark:text-orange-300
                        ">
                          DRAFT
                        </span>
                      )}
                    </td>

                    <td className="p-4">{c.date}</td>
                    <td className="p-4 cursor-pointer dark:text-gpt-muted">⋮</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SUMMARY STATS */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Total Playlists", value: "3" },
              { label: "Total Videos", value: "60" },
              { label: "Total Enrollments", value: "23,600" },
            ].map((stat, i) => (
              <div
                key={i}
                className="
                  text-center rounded-lg p-6 shadow-sm border
                  bg-white border-gray-200
                  dark:bg-gpt-surface dark:border-gpt-border
                "
              >
                <p className="text-sm text-gray-500 dark:text-gpt-muted">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold dark:text-gpt-text">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
