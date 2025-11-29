import React from "react";

// FULL TAILWIND VERSION — STATIC UI EXACTLY LIKE SCREENSHOTS
// No CSS file, no logic, 100% pixel‑style static layout
// All styling done using Tailwind classes only

export default function CoursePage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#0f172a]">
      {/* TOP NAVBAR */}
      <header className="w-full h-16 border-b flex items-center justify-between px-6 sticky top-0 bg-white z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">ES</div>
          <span className="font-semibold text-lg">EduStream</span>
        </div>

        <input
          className="w-[45%] border rounded-lg px-4 py-2 text-sm"
          placeholder="Search courses, videos, creators..."
        />

        <div className="flex items-center gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Creator Studio</button>
          <div className="h-9 w-9 rounded-full bg-gray-300" />
        </div>
      </header>

      <div className="flex w-full">
        {/* LEFT MAIN CONTENT */}
        <div className="w-[68%] px-10 py-8">
          <p className="text-sm text-gray-500 mb-2">
            Home › Web Development › Complete Web Development Bootcamp 2024
          </p>

          <h1 className="text-3xl font-bold leading-tight mb-1">
            Complete Web Development Bootcamp 2024
          </h1>
          <p className="text-gray-600 text-[15px]">
            Master HTML, CSS, JavaScript, React, Node.js, and MongoDB
          </p>

          {/* TAGS */}
          <div className="flex items-center gap-3 mt-4 text-sm">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">Web Development</span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded">Beginner</span>
            <span className="text-yellow-500 font-semibold">⭐ 4.8 (12,543 ratings)</span>
          </div>

          {/* META */}
          <div className="flex gap-10 mt-4 text-sm text-gray-600">
            <span><strong className="text-black">245.0K</strong> Enrolled</span>
            <span><strong className="text-black">Last Updated:</strong> 2 weeks ago</span>
          </div>

          {/* TABS */}
          <div className="flex border rounded-lg bg-gray-50 p-1 mt-6 text-sm w-[480px]">
            <div className="flex-1 py-2 bg-white text-center rounded border font-medium">Overview</div>
            <div className="flex-1 py-2 text-center">Learning Objectives</div>
            <div className="flex-1 py-2 text-center">Requirements</div>
          </div>

          {/* ABOUT THIS COURSE */}
          <div className="border rounded-xl p-6 mt-6 shadow-sm">
            <h2 className="font-semibold text-lg mb-3">About This Course</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              This comprehensive bootcamp covers everything you need to become a professional web developer.
              Starting from the fundamentals of HTML and CSS, you'll progress through JavaScript, React,
              Node.js, and MongoDB. Each section includes hands-on projects that build your portfolio.
            </p>

            {/* ABOUT GRID */}
            <div className="grid grid-cols-4 gap-4 mt-6 text-sm text-gray-700">
              <div><span className="block text-gray-500">Total Videos</span><strong className="text-black text-lg">450</strong></div>
              <div><span className="block text-gray-500">Duration</span><strong className="text-black text-lg">120 hours</strong></div>
              <div><span className="block text-gray-500">Language</span><strong className="text-black text-lg">English</strong></div>
              <div><span className="block text-gray-500">Certificate</span><strong className="text-black text-lg">Available</strong></div>
            </div>
          </div>

          {/* CURRICULUM */}
          <h2 className="text-xl font-semibold mt-10 mb-4">Course Curriculum</h2>

          {/* MODULE 1 */}
          <div className="border rounded-xl p-5 shadow-sm mb-4">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">1</div>
              <div>
                <p className="font-semibold">Module 1: HTML Fundamentals</p>
                <p className="text-xs text-gray-500">25 videos • 8 hours</p>
              </div>
            </div>

            <div className="pl-12 mt-4 text-sm text-gray-700 space-y-2">
              <div className="flex justify-between"><span>○ Introduction to HTML</span><span className="text-gray-500">12:34</span></div>
              <div className="flex justify-between"><span>○ HTML Structure and Semantics</span><span className="text-gray-500">18:45</span></div>
              <div className="flex justify-between"><span>○ Forms and Input Elements</span><span className="text-gray-500">22:10</span></div>
            </div>
          </div>

          {/* OTHER MODULES STATIC */}
          {[2,3,4,5].map((m)=>(
            <div key={m} className="border rounded-xl p-5 shadow-sm mb-4">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">{m}</div>
                <div>
                  <p className="font-semibold">Module {m}</p>
                  <p className="text-xs text-gray-500">Videos • Hours</p>
                </div>
              </div>
            </div>
          ))}

          {/* SIMILAR COURSES */}
          <h2 className="text-xl font-semibold mt-10 mb-4">Similar Courses</h2>

          <div className="grid grid-cols-3 gap-6">
            {new Array(6).fill(0).map((_,i)=>(
              <div key={i} className="border rounded-xl shadow-sm h-44 p-4 bg-gray-50 flex items-center justify-center text-center text-sm font-medium">
                (Course Card {i+1})
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-[28%] px-6 py-8 space-y-6 border-l">
          {/* Instructor */}
          <div className="border rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold">A</div>
              <div>
                <p className="font-semibold">Alex Johnson</p>
                <p className="text-xs text-gray-500">Educator</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">Full-stack developer with 10+ years experience.</p>

            <div className="flex justify-between text-sm mt-4 text-gray-600">
              <div><strong className="text-black">125.0K</strong><br/>Subscribers</div>
              <div><strong className="text-black">8</strong><br/>Courses</div>
            </div>

            <button className="w-full bg-blue-600 text-white rounded-lg py-2 mt-4">+ Subscribe</button>
            <button className="w-full border rounded-lg py-2 mt-2">View Channel</button>
          </div>

          {/* ENROLL BOX */}
          <div className="border rounded-xl p-6 shadow-sm">
            <button className="w-full bg-blue-600 text-white rounded-lg py-2">+ Enroll Now</button>
            <button className="w-full border rounded-lg py-2 mt-2">Save Course</button>
            <button className="w-full border rounded-lg py-2 mt-2">Share</button>
            <button className="w-full border rounded-lg py-2 mt-2">Report</button>

            <div className="text-xs text-gray-600 mt-4 space-y-1">
              <p>🔒 Free course with ads</p>
              <p>🎓 Certificate of completion</p>
              <p>⬇ Downloadable resources</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-20 border-t w-full py-10 px-20 text-sm bg-white text-gray-700">
        <div className="grid grid-cols-4 gap-20">
          <div>
            <h2 className="text-xl font-bold">EduStream</h2>
            <p className="text-gray-600 mt-2">Democratizing education through free, high-quality content.</p>
          </div>

          <div>
            <h3 className="font-semibold">Platform</h3>
            <p className="text-sm text-gray-600 mt-2">Browse Courses</p>
            <p className="text-sm text-gray-600">Become a Creator</p>
            <p className="text-sm text-gray-600">How It Works</p>
            <p className="text-sm text-gray-600">Pricing</p>
          </div>

          <div>
            <h3 className="font-semibold">Support</h3>
            <p className="text-sm text-gray-600 mt-2">Help Center</p>
            <p className="text-sm text-gray-600">Community</p>
            <p className="text-sm text-gray-600">Contact Us</p>
            <p className="text-sm text-gray-600">Report Content</p>
          </div>

          <div>
            <h3 className="font-semibold">Legal</h3>
            <p className="text-sm text-gray-600 mt-2">Privacy Policy</p>
            <p className="text-sm text-gray-600">Terms of Service</p>
            <p className="text-sm text-gray-600">Cookie Policy</p>
            <p className="text-sm text-gray-600">Copyright</p>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">© 2025 EduStream. All rights reserved.</div>
      </footer>
    </div>
  );
}

