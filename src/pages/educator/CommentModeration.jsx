 import React from "react";
import { Navbar } from "../../componets/creator/navbar";
import { Sidebar } from "../../componets/creator/sidebar";
import { NavLink } from "react-router-dom";

export const CommentModeration = () => {
  const comments = [
    { name: "Sarah Johnson", time: "2 hours ago", text: "This tutorial was incredibly helpful!", status: "Pending", course: "Introduction to React Hooks", replies: 3, likes: 12, icon: "S" },
    { name: "Mike Chen", time: "1 hour ago", text: "Can you explain the useEffect dependency array?", status: "Pending", course: "Introduction to React Hooks", replies: 0, likes: 5, icon: "M" },
    { name: "Emma Wilson", time: "5 hours ago", text: "Great content!", status: "Approved", course: "Advanced CSS Grid Techniques", replies: 1, likes: 24, icon: "E" },
    { name: "Unknown User", time: "1 day ago", text: "This is spam and irrelevant", status: "Rejected", course: "Web Design Fundamentals", replies: 0, likes: 0, icon: "U" },
    { name: "Alex Kumar", time: "3 hours ago", text: "Could you provide the source code?", status: "Pending", course: "Building a Todo App", replies: 2, likes: 8, icon: "A" },
    { name: "Lisa Anderson", time: "12 hours ago", text: "Excellent explanation!", status: "Approved", course: "State Management in React", replies: 0, likes: 18, icon: "L" },
    { name: "Spam Account", time: "2 days ago", text: "Offensive language and inappropriate content.", status: "Rejected", course: "JavaScript Basics", replies: 0, likes: 0, icon: "S" },
    { name: "David Lee", time: "6 hours ago", text: "When will the next course release?", status: "Approved", course: "Advanced JS Patterns", replies: 1, likes: 7, icon: "D" }
  ];

  return (
    <div className="
      w-full min-h-screen flex flex-col font-gpt
      bg-white text-gray-900
      dark:bg-gpt-bg dark:text-gpt-text transition-colors duration-300
    ">
      {/* NAVBAR */}
      <Navbar />

      <div className="flex w-full pt-16">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="flex-1 md:ml-64 p-6 pb-36">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold dark:text-gpt-text">Comment Moderation</h1>
              <p className="text-sm text-gray-600 dark:text-gpt-muted">
                Review and manage comments on your videos and courses.
              </p>
            </div>

            <NavLink
              to="/creator-dashboard"
              className="
                border px-4 py-2 rounded-md text-sm
                bg-white border-gray-200 hover:bg-gray-100
                dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border dark:text-gpt-text
              "
            >
              ← Back to Dashboard
            </NavLink>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            {[
              { label: "Total Comments", value: 8 },
              { label: "Pending Review", value: 3, highlight: true },
              { label: "Approved", value: 3 },
              { label: "Rejected", value: 2 }
            ].map((box, i) => (
              <div
                key={i}
                className={`
                  rounded-lg p-4 shadow-sm border
                  ${box.highlight
                    ? "border-cyan-400 dark:border-gpt-accent"
                    : "border-gray-200 dark:border-gpt-border"}
                  bg-white dark:bg-gpt-surface
                `}
              >
                <p className="text-sm text-gray-600 dark:text-gpt-muted">{box.label}</p>
                <h2 className="text-2xl font-bold dark:text-gpt-text">{box.value}</h2>
              </div>
            ))}
          </div>

          {/* SEARCH FILTER */}
          <div className="
            border rounded-lg p-4 mt-6 flex items-center space-x-3
            bg-white border-gray-200 shadow-sm
            dark:bg-gpt-surface dark:border-gpt-border
          ">
            <span>🔍</span>
            <input
              placeholder="Search by content, author, or video..."
              className="w-full bg-transparent outline-none text-sm dark:text-gpt-text"
            />
          </div>

          {/* COMMENTS LIST */}
          <div className="space-y-4 mt-6">
            {comments.map((c, i) => (
              <div
                key={i}
                className="
                  border rounded-lg shadow-sm p-4
                  bg-white border-gray-200
                  dark:bg-gpt-surface dark:border-gpt-border
                "
              >
                <div className="flex justify-between">
                  <div className="flex space-x-3">
                    <input type="checkbox" />

                    <div className="
                      h-9 w-9 rounded-full flex items-center justify-center font-semibold
                      bg-gray-200 dark:bg-gpt-border
                    ">
                      {c.icon}
                    </div>

                    <div>
                      <p className="font-semibold dark:text-gpt-text">{c.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gpt-muted">{c.time}</p>

                      <p className="mt-2 text-sm dark:text-gpt-muted">{c.text}</p>

                      <p className="text-xs text-gray-500 dark:text-gpt-muted mt-1">📺 {c.course}</p>
                      <p className="text-xs text-gray-500 dark:text-gpt-muted mt-1">
                        💬 {c.replies} replies ❤️ {c.likes} likes
                      </p>
                    </div>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex items-center space-x-3">
                    {c.status === "Pending" && (
                      <span className="px-2 py-1 rounded text-xs bg-amber-100 text-amber-600 dark:bg-gpt-surface dark:text-gpt-accent">
                        Pending
                      </span>
                    )}
                    {c.status === "Approved" && (
                      <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
                        Approved
                      </span>
                    )}
                    {c.status === "Rejected" && (
                      <span className="px-2 py-1 rounded text-xs bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300">
                        Rejected
                      </span>
                    )}

                    <button className="border p-1 rounded bg-green-50 dark:bg-gpt-border">✔</button>
                    <button className="border p-1 rounded bg-red-50 dark:bg-gpt-border">✖</button>
                    <button className="text-gray-500 dark:text-gpt-muted">⋮</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <footer className="text-center text-sm text-gray-500 dark:text-gpt-muted mt-10">
            © 2025 EduStream — Privacy • Terms • Help
          </footer>
        </main>
      </div>
    </div>
  );
};
