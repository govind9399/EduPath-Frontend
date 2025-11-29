// src/components/Homepage.jsx
import React from "react";
import { Footer } from "../componets/student/footer";
import { Navbar } from "../componets/creator/navbar";

export default function Homepage() {
  const stats = [
    { label: "Courses", value: "10K+" },
    { label: "Learners", value: "500K+" },
    { label: "Creators", value: "1K+" },
  ];

  const trendingCourses = [
    {
      id: 1,
      category: "Web Development",
      level: "Beginner",
      title: "Complete Web Development Bootcamp 2024",
      instructor: "Alex Johnson",
      videos: "120 videos",
      hours: "45 hours",
      enrolled: "125.0K enrolled",
      image: "/images/trending-web-bootcamp.jpg",
    },
    {
      id: 2,
      category: "Data Science",
      level: "Intermediate",
      title: "Python for Data Science & Machine Learning",
      instructor: "Sarah Chen",
      videos: "95 videos",
      hours: "38 hours",
      enrolled: "98.0K enrolled",
      image: "/images/trending-python-ds.jpg",
    },
    {
      id: 3,
      category: "Marketing",
      level: "Beginner",
      title: "Digital Marketing Masterclass",
      instructor: "Mike Rodriguez",
      videos: "85 videos",
      hours: "32 hours",
      enrolled: "87.0K enrolled",
      image: "/images/trending-marketing.jpg",
    },
    {
      id: 4,
      category: "Web Development",
      level: "Advanced",
      title: "Advanced React & Next.js Development",
      instructor: "Emma Wilson",
      videos: "110 videos",
      hours: "42 hours",
      enrolled: "76.0K enrolled",
      image: "/images/trending-advanced-react.jpg",
    },
    {
      id: 5,
      category: "Design",
      level: "Beginner",
      title: "UI/UX Design Fundamentals",
      instructor: "Lisa Park",
      videos: "75 videos",
      hours: "28 hours",
      enrolled: "65.0K enrolled",
      image: "/images/trending-uiux.jpg",
    },
    {
      id: 6,
      category: "Cloud Computing",
      level: "Intermediate",
      title: "Cloud Computing with AWS",
      instructor: "James Kumar",
      videos: "88 videos",
      hours: "35 hours",
      enrolled: "54.0K enrolled",
      image: "/images/trending-aws.jpg",
    },
  ];

  const categories = [
    { name: "Web Development", count: "1250 courses", iconBg: "from-blue-500 to-cyan-500" },
    { name: "Data Science", count: "890 courses", iconBg: "from-pink-500 to-purple-500" },
    { name: "Design", count: "756 courses", iconBg: "from-orange-500 to-red-500" },
    { name: "Business", count: "1100 courses", iconBg: "from-green-500 to-emerald-500" },
    { name: "Marketing", count: "645 courses", iconBg: "from-rose-500 to-pink-500" },
    { name: "Mobile Development", count: "520 courses", iconBg: "from-indigo-500 to-blue-500" },
    { name: "Cloud Computing", count: "430 courses", iconBg: "from-sky-500 to-cyan-500" },
    { name: "AI & Machine Learning", count: "680 courses", iconBg: "from-violet-500 to-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */} 
        <Navbar/>
      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-orange-50">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 bg-clip-text text-transparent">
              Learn Anything,
            </span>{" "}
            <br />
            <span className="text-gray-900">Teach Everything</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Access thousands of high-quality educational courses completely free.
            Learn from expert creators and grow your skills at your own pace.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative flex items-center rounded-full border border-gray-200 bg-white shadow-sm">
              <input
                className="flex-1 px-5 py-3 rounded-full text-sm focus:outline-none"
                placeholder="Search courses, skills, creators..."
              />
              <button className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mr-1 hover:bg-blue-700">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21l-4.35-4.35"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="11"
                    cy="11"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
              ▶ Start Learning
            </button>
            <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 gap-2">
              <span className="inline-block w-4 h-4 border border-gray-500 rounded-sm" />
              Become a Creator
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <div className="text-xl font-semibold text-blue-700">
                  {s.value}
                </div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING NOW */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Trending Now
            </h2>
            <p className="text-sm text-gray-500">
              Most popular courses this week
            </p>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            View All
            <span>→</span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {trendingCourses.map((course) => (
            <article
              key={course.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-blue-600 text-white text-xs">
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-black/70 text-white text-xs">
                    {course.level}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-sm font-semibold text-gray-900">
                  {course.title}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-6 h-6 rounded-full bg-gray-200" />
                  {course.instructor}
                </div>

                <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                  <span>🎬 {course.videos}</span>
                  <span>⏱ {course.hours}</span>
                </div>

                <div className="mt-3 text-xs text-gray-500">
                  {course.enrolled}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="sm:hidden mt-4 flex justify-center">
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            View All
            <span>→</span>
          </button>
        </div>
      </section>

      {/* BROWSE BY CATEGORY */}
      <section className="mt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            Browse by Category
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Explore courses in your area of interest
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-4 sm:grid-cols-2">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col gap-3"
              >
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.iconBg} flex items-center justify-center text-white text-lg`}
                >
                  {/* simple icon placeholder */}
                  <span>⌘</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{cat.name}</div>
                  <div className="text-xs text-gray-500">{cat.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED / JOURNEY SECTION + FOOTER */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-orange-50 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src="/images/featured-learners.jpg"
                alt="Learners"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-orange-500">
                  Featured
                </span>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                  Start Your Learning Journey Today
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  Join thousands of learners who are transforming their careers
                  and skills through our platform. Access world-class education
                  completely free, supported by our creator community.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>✅ 100% free access to all courses</li>
                  <li>✅ Learn at your own pace</li>
                  <li>✅ Certificates upon completion</li>
                  <li>✅ Community support and Q&A</li>
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
                  ▶ Explore Courses
                </button>
                <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50">
                  ⬛ Create Content
                </button>
              </div>
            </div>
          </div>

          {/* Stats row again */}
          <div className="mt-10 flex flex-col sm:flex-row gap-8 justify-center text-center">
            <div>
              <div className="text-xl font-semibold text-blue-700">10K+</div>
              <div className="text-xs text-gray-500">Courses Available</div>
            </div>
            <div>
              <div className="text-xl font-semibold text-blue-700">500K+</div>
              <div className="text-xs text-gray-500">Active Learners</div>
            </div>
            <div>
              <div className="text-xl font-semibold text-blue-700">1K+</div>
              <div className="text-xs text-gray-500">Expert Creators</div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
