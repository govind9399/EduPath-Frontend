 import { useState } from "react";
import {
  Play,
  Eye,
  ThumbsUp,
  Share2,
  Bookmark,
  ChevronDown,
} from "lucide-react";
import Navbar from "../../componets/student/navbar";
import { VideoComments } from "./CommentSection";

export const VideoPlayer = () => {
  const [showMore, setShowMore] = useState(false);
  const [showAdBlockModal, setShowAdBlockModal] = useState(true);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* MAIN WRAPPER */}
      <div className="flex flex-col lg:flex-row gap-6 p-4 pt-20 max-w-7xl mx-auto">

        {/* LEFT SIDE PLAYER + INFO SECTION */}
        <div className="flex-1">
          {/* VIDEO PLAYER */}
          <div className="bg-black rounded-xl w-full h-[220px] sm:h-[380px] lg:h-[500px] flex items-center justify-center">
            <Play className="text-white w-14 sm:w-20 h-14 sm:h-20 opacity-40" />
          </div>

          {/* TITLE */}
          <h1 className="mt-4 text-lg sm:text-2xl font-semibold leading-tight">
            Complete Web Development Bootcamp 2024 - From Zero to Hero
          </h1>

          {/* VIEWS + PUBLISH TIME + LEVEL + CATEGORY */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
            <span>2.5M views</span>
            <span>• 2 weeks ago</span>
            <span className="text-blue-600 font-medium">Beginner</span>
            <span className="text-gray-800">Web Development</span>
          </div>

          {/* CHANNEL INFO ROW */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div>
                <h2 className="font-semibold text-gray-900">
                  Tech Academy Pro ✔️
                </h2>
                <p className="text-xs text-gray-500">125.0K subscribers</p>
              </div>
            </div>

            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md">
              Subscribe
            </button>
          </div>

          {/* ACTION BUTTONS ROW (LIKE — DISLIKE — SHARE — SAVE) */}
          <div className="flex flex-wrap gap-3 mt-4 border-b pb-4">
            <Action icon={<Eye size={18} />} label="245" />
            <Action icon={<ThumbsUp size={18} />} label="12.5K" />
            <Action icon={<Bookmark size={18} />} label="Save" />
            <Action icon={<Share2 size={18} />} label="Share" />
          </div>

          {/* DESCRIPTION LIKE YOUTUBE */}
          <div className="mt-6 bg-gray-50 p-4 rounded-xl">
            <p className="text-sm leading-relaxed text-gray-800">
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

            {/* SHOW MORE BUTTON LIKE YOUTUBE */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-2 text-blue-600 flex items-center gap-1 text-sm"
            >
              {showMore ? "Show less" : "Show more"} <ChevronDown size={16} />
            </button>
          </div>

          {/* COMMENTS SECTION BELOW LIKE YOUTUBE */}
          <VideoComments />
        </div>

        {/* RIGHT SIDEBAR LIKE YOUTUBE */}
        <aside className="lg:w-[360px] space-y-4">
          <h3 className="font-semibold text-sm">Related Videos</h3>

          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="bg-black rounded-xl h-[180px] sm:h-[220px] lg:h-[180px] w-full flex items-center justify-center"
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
          <div className="bg-white w-full sm:w-[440px] md:w-[520px] rounded-xl shadow-xl">
            <div className="flex gap-3 p-5 border-b">
              <div className="w-6 h-6 rounded-full border flex items-center justify-center text-sm">
                i
              </div>
              <div>
                <h2 className="text-sm font-semibold">AdBlocker Detected</h2>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  EduStream is free because of ads. Please disable your ad
                  blocker to support creators.
                </p>
              </div>
            </div>

            <div className="px-5 py-4">
              <button
                onClick={() => setShowAdBlockModal(false)}
                className="w-full py-2 bg-blue-600 text-white rounded-md text-sm"
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
    <button className="flex items-center gap-2 text-sm border px-4 py-2 rounded-md hover:bg-gray-50 transition">
      {icon} {label}
    </button>
  );
}
