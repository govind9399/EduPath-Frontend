 import { useState } from "react";
import { Play, Eye, ThumbsUp, Share2, Bookmark, ChevronDown } from "lucide-react";
import Navbar from "../../componets/student/navbar";

export const VideoPlayer= ()=> {
  const [showMore, setShowMore] = useState(false);
  const [showAdBlockModal, setShowAdBlockModal] = useState(true);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
       <Navbar/>
      {/* MAIN WRAPPER */}
      <div className="flex gap-6 p-6">

        {/* LEFT PLAYER SECTION */}
        <div className="flex-1">
          <div className="bg-black rounded-xl h-[460px] flex items-center justify-center">
            <Play className="text-white w-20 h-20 opacity-40" />
          </div>

          <h1 className="mt-4 text-xl font-semibold">
            Complete Web Development Bootcamp 2024 - From Zero to Hero
          </h1>

          {/* COURSE INFO */}
          <div className="flex gap-6 text-sm text-gray-500 mt-2">
            <span>2.5M views</span>
            <span>• 2 weeks ago</span>
            <span className="text-blue-600">Beginner</span>
            <span className="text-gray-800">Web Development</span>
          </div>

          {/* CREATOR + ACTIONS */}
          <div className="flex justify-between items-center mt-4">
            <div>
              <div className="font-semibold">Tech Academy Pro ✔️</div>
              <span className="text-sm text-gray-500">125.0K subscribers</span>
            </div>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
              Subscribe
            </button>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-2 mt-4">
            <Action icon={<ThumbsUp size={16} />} label="12500" />
            <Action icon={<Eye size={16} />} label="245" />
            <Action icon={<Bookmark size={16} />} label="Save" />
            <Action icon={<Share2 size={16} />} label="Share" />
          </div>

          {/* DESCRIPTION */}
          <div className="mt-6">
            <h2 className="font-semibold text-lg">About This Course</h2>

            <p className="text-sm text-gray-700 mt-2 leading-relaxed">
              Welcome to the Complete Web Development Bootcamp 2024! In this comprehensive course,
              you'll learn everything you need to become a professional web developer.
              {showMore && (
                <span> You’ll learn HTML, CSS, JavaScript, React, Node.js, UI design patterns,
                REST APIs, database management, and deployment strategies.</span>
              )}
            </p>

            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-1 text-sm text-blue-600 mt-1"
            >
              Show more <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="w-[350px] space-y-6">

          <div className="border rounded-xl p-4">
            <h3 className="font-semibold text-sm">Course Progress</h3>
            <div className="text-xs text-gray-500 mt-1">35% Complete</div>
            <div className="w-full bg-gray-200 h-2 mt-2 rounded-md">
              <div className="w-[35%] h-full bg-blue-600 rounded-md" />
            </div>
            <ul className="mt-3 text-xs text-gray-600 space-y-1">
              <li>⏱ 60 hours total</li>
              <li>🎬 120 videos</li>
              <li>👥 125K enrolled</li>
            </ul>
          </div>

          <div className="border rounded-xl p-4">
            <h3 className="font-semibold text-sm">Instructor</h3>
            <p className="text-xs mt-1">Tech Academy Pro</p>
            <div className="mt-2 text-xs text-gray-500">
              Beginner to Intermediate • English • Verified
            </div>
          </div>

          <div className="border rounded-xl p-4">
            <h3 className="font-semibold text-sm">Related Videos</h3>
            <div className="mt-3 text-xs text-blue-600 underline cursor-pointer">
              React Hooks Deep Dive
            </div>
            <div className="mt-1 text-xs text-blue-600 underline cursor-pointer">
              State Management with Redux
            </div>
            <div className="mt-1 text-xs text-blue-600 underline cursor-pointer">
              Building REST APIs with Node.js
            </div>
          </div>

        </aside>
      </div>

      {/* FOOTER */}
      <footer className="border-t py-10 px-6 text-gray-600 text-sm">
        <div className="flex justify-between">
          <div>
            🎓 EduStream
            <p className="text-xs max-w-xs mt-1">
              Democratizing education through free, high-quality content.
            </p>
          </div>
          <div className="text-xs">©2025 EduStream. All rights reserved.</div>
        </div>
      </footer>

      {/* AD-BLOCKER MODAL */}
      {showAdBlockModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="bg-white w-[540px] rounded-xl shadow-2xl border border-gray-200">

            <div className="flex items-start gap-3 p-5 border-b border-gray-200">
              <div className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center">
                <span className="text-gray-700 text-sm font-semibold">i</span>
              </div>

              <div className="flex-1">
                <h2 className="text-gray-900 font-semibold text-sm">
                  AdBlocker Detected
                </h2>
                <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                  EduStream is free because of ads. Please disable your ad blocker
                  to support creators and keep education accessible for everyone.
                </p>
              </div>
            </div>

            <div className="px-5 py-4">
              <button
                onClick={() => setShowAdBlockModal(false)}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-md transition-all"
              >
                I've disabled my ad blocker
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

function Action({ icon, label }) {
  return (
    <button className="flex items-center gap-1 text-sm border px-3 py-1 rounded-md">
      {icon} {label}
    </button>
  );
}
