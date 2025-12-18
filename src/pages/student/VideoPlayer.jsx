import { useState } from "react";
import {
  Play,
  Eye,
  ThumbsUp,
  Share2,
  Bookmark,
  ChevronDown,
} from "lucide-react";
import { Navbar } from "../../componets/student/navbar";
import { VideoComments } from "./CommentSection";

export const VideoPlayer = () => {
  const [showMore, setShowMore] = useState(false);
  const [showAdBlockModal, setShowAdBlockModal] = useState(true);

  return (
    <div
      className="
      min-h-screen font-gpt
      bg-gray-50 text-gray-900
      dark:bg-gpt-bg dark:text-gpt-text
      transition-colors duration-300
    "
    >
      <Navbar />

      {/* MAIN WRAPPER */}
      <div className="flex flex-col lg:flex-row gap-6 p-4 pt-24 max-w-7xl mx-auto">

        {/* LEFT SIDE PLAYER + INFO SECTION */}
        <div className="flex-1">

          {/* VIDEO PLAYER */}
          <div className="bg-black dark:bg-gpt-border rounded-xl w-full h-[220px] sm:h-[380px] lg:h-[500px] flex items-center justify-center">
            <Play className="text-white w-14 sm:w-20 h-14 sm:h-20 opacity-40" />
          </div>

          {/* TITLE */}
          <h1 className="mt-4 text-lg sm:text-2xl font-semibold leading-tight dark:text-gpt-text">
            Complete Web Development Bootcamp 2024 - From Zero to Hero
          </h1>

          {/* VIEWS + PUBLISH TIME + LEVEL + CATEGORY */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gpt-muted mt-2">
            <span>2.5M views</span>
            <span>• 2 weeks ago</span>
            <span className="text-cyan-600 dark:text-gpt-accent font-medium">Beginner</span>
            <span className="text-gray-800 dark:text-gpt-text">Web Development</span>
          </div>

          {/* CHANNEL INFO ROW */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gpt-border" />
              <div>
                <h2 className="font-semibold text-gray-900 dark:text-gpt-text">
                  Tech Academy Pro ✔️
                </h2>
                <p className="text-xs text-gray-500 dark:text-gpt-muted">
                  125.0K subscribers
                </p>
              </div>
            </div>

            <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded-md shadow-sm transition">
              Subscribe
            </button>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-3 mt-4 border-b pb-4 border-gray-200 dark:border-gpt-border">
            <Action icon={<Eye size={18} />} label="245" />
            <Action icon={<ThumbsUp size={18} />} label="12.5K" />
            <Action icon={<Bookmark size={18} />} label="Save" />
            <Action icon={<Share2 size={18} />} label="Share" />
          </div>

          {/* DESCRIPTION */}
          <div
            className="
              mt-6 p-4 rounded-xl
              bg-gray-50 border border-gray-200
              dark:bg-gpt-surface dark:border-gpt-border
            "
          >
            <p className="text-sm leading-relaxed text-gray-800 dark:text-gpt-muted">
              Welcome to the Complete Web Development Bootcamp 2024! In this
              comprehensive course, you'll learn everything you need to become a
              professional web developer.
              {showMore && (
                <span>
                  {" "}
                  You’ll learn HTML, CSS, JavaScript, React, Node.js, UI design
                  patterns, REST APIs, database management, and deployment
                  strategies.
                </span>
              )}
            </p>

            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-2 text-sm text-cyan-600 dark:text-gpt-accent flex items-center gap-1 hover:underline"
            >
              {showMore ? "Show less" : "Show more"}
              <ChevronDown size={14} />
            </button>
          </div>

          {/* COMMENTS */}
          <VideoComments />
        </div>

        {/* RIGHT SIDEBAR LIKE YOUTUBE */}
        <aside className="lg:w-[360px] space-y-4">
          <h3 className="font-semibold text-sm dark:text-gpt-text">
            Related Videos
          </h3>

          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="
                bg-black dark:bg-gpt-border rounded-xl
                h-[180px] sm:h-[220px] lg:h-[180px] w-full
                flex items-center justify-center
              "
            >
              <Play className="text-white w-14 sm:w-16 h-14 sm:h-16 opacity-40" />
            </div>
          ))}
        </aside>
      </div>

      {/* FOOTER */}
      <footer />

      {showAdBlockModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div
            className="
            bg-white dark:bg-gpt-surface rounded-xl shadow-xl
            w-full sm:w-[440px] md:w-[520px]
          "
          >
            <div className="flex gap-3 p-5 border-b border-gray-200 dark:border-gpt-border">
              <div className="w-6 h-6 rounded-full border flex items-center justify-center text-sm dark:border-gpt-border">
                i
              </div>
              <div>
                <h2 className="text-sm font-semibold dark:text-gpt-text">
                  AdBlocker Detected
                </h2>
                <p className="text-xs text-gray-500 dark:text-gpt-muted mt-1 leading-relaxed">
                  EduStream is free because of ads. Please disable your ad
                  blocker to support creators.
                </p>
              </div>
            </div>

            <div className="px-5 py-4">
              <button
                onClick={() => setShowAdBlockModal(false)}
                className="
                  w-full py-2 bg-cyan-600 hover:bg-cyan-700
                  text-white rounded-md text-sm
                "
              >
                I've disabled my ad blocker
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function Action({ icon, label }) {
  return (
    <button
      className="
        flex items-center gap-2 text-sm px-4 py-2 rounded-md border
        hover:bg-gray-100 transition
        border-gray-300 bg-white text-gray-700
        dark:border-gpt-border dark:bg-gpt-surface dark:text-gpt-text dark:hover:bg-gpt-border
      "
    >
      {icon} {label}
    </button>
  );
}
