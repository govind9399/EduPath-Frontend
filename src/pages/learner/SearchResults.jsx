import React from "react";

export default function SearchResults() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">

      {/* ================= HEADER ================= */}
      <header className="w-full flex items-center justify-between px-10 py-4 border-b bg-white fixed top-0 left-0 z-50">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="EduStream" className="w-10 h-10" />
          <h1 className="font-semibold text-xl">EduStream</h1>
        </div>

        <div className="flex-1 mx-10">
          <input
            type="text"
            placeholder="Search courses, videos, creators..."
            className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-lg border">Creator Studio</button>
          <img
            src="/profile.png"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </header>

      {/* To push content below header */}
      <div className="h-24"></div>

      {/* ================= SEARCH BAR SECTION ================= */}
      <section className="px-10 py-4">
        <input
          type="text"
          value="Web Development"
          readOnly
          className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-3 text-gray-600">
          Showing <b>13</b> results for "<b>Web Development</b>"
        </p>
      </section>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="w-full flex px-10 mt-4">

        {/* ================= LEFT FILTERS ================= */}
        <aside className="w-64 mr-10 border-r pr-8">
          <h2 className="font-semibold text-lg mb-4 flex items-center space-x-2">
            <span>Filters</span>
          </h2>

          {/* Category */}
          <div className="mb-6">
            <p className="font-medium mb-2">Category</p>

            {["All", "Programming", "Design", "Business", "Science", "Language", "Music", "Art"].map(
              (item) => (
                <label key={item} className="flex items-center space-x-2 mb-2 cursor-pointer">
                  <input type="radio" name="category" className="accent-blue-600" defaultChecked={item === "All"} />
                  <span>{item}</span>
                </label>
              )
            )}
          </div>

          {/* Level */}
          <div className="mb-6">
            <p className="font-medium mb-2">Level</p>
            <div className="border p-2 rounded-lg cursor-pointer">All Levels</div>
          </div>

          {/* Duration */}
          <div className="mb-6">
            <p className="font-medium mb-2">Duration</p>
            <div className="border p-2 rounded-lg cursor-pointer">Any Duration</div>
          </div>

          {/* Sort */}
          <div className="mb-6">
            <p className="font-medium mb-2">Sort By</p>
            <select className="w-full border p-2 rounded-lg">
              <option>Most Relevant</option>
            </select>
          </div>

          {/* Clear Filters */}
          <button className="w-full border px-4 py-2 rounded-lg flex items-center justify-center space-x-2 mt-6">
            <span>Clear Filters</span>
          </button>
        </aside>

        {/* ================= RIGHT CONTENT ================= */}
        <main className="flex-1 pb-20">

          {/* ================= COURSES SECTION ================= */}
          <h2 className="font-semibold text-xl mb-4 flex items-center space-x-2">
            <span>Courses (5)</span>
          </h2>

          <div className="grid grid-cols-2 gap-6 mb-10">
            {/* ---- COURSE CARD TEMPLATE ---- */}
            {[
              {
                title: "Complete Web Development Bootcamp 2024",
                instructor: "Alex Johnson",
                videos: "250 videos",
                time: "120h",
                img: "/course1.png",
              },
              {
                title: "Advanced React Patterns & Performance",
                instructor: "Sarah Chen",
                videos: "120 videos",
                time: "45h",
                img: "/course2.png",
              },
              {
                title: "Web Design Fundamentals: UI/UX Principles",
                instructor: "Emma Wilson",
                videos: "38 videos",
                time: "25h",
                img: "/course3.png",
              },
              {
                title: "Full Stack Web Development with MERN",
                instructor: "David Kumar",
                videos: "200 videos",
                time: "90h",
                img: "/course4.png",
              },
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition">
                <img src={course.img} alt="" className="w-full rounded-t-xl" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-gray-600 mt-1">{course.instructor}</p>

                  <div className="flex space-x-4 mt-2 text-sm text-gray-500">
                    <span>{course.videos}</span>
                    <span>{course.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= VIDEOS SECTION ================= */}
          <h2 className="font-semibold text-xl mb-4 flex items-center space-x-2">
            <span>Videos (8)</span>
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition">
                <img src={`/video${index + 1}.png`} alt="" className="w-full rounded-t-xl" />

                <div className="p-4">
                  <h3 className="font-semibold">Video Title {index + 1}</h3>

                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                    <span>150K views</span>
                    <span>45 min</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="w-full border-t mt-16 px-10 py-10">
        <div className="flex justify-between">

          <div>
            <h2 className="font-semibold text-xl">EduStream</h2>
            <p className="mt-2 text-gray-600 w-72">
              Democratizing education through free, high-quality video content. Learn anything, teach everything.
            </p>
            <div className="flex space-x-4 mt-4">
              <div className="w-9 h-9 border rounded-lg flex items-center justify-center">F</div>
              <div className="w-9 h-9 border rounded-lg flex items-center justify-center">T</div>
              <div className="w-9 h-9 border rounded-lg flex items-center justify-center">I</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Platform</h3>
            <p>Browse Courses</p>
            <p>Become a Creator</p>
            <p>How It Works</p>
            <p>Pricing</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <p>Help Center</p>
            <p>Community</p>
            <p>Contact Us</p>
            <p>Report Content</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Policy</p>
            <p>Copyright</p>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-500">© 2025 EduStream. All rights reserved.</p>
      </footer>
    </div>
  );
}
