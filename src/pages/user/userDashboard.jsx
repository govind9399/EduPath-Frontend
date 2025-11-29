 // src/components/LearnerDashboard.jsx
import React from "react";
import {
  BookOpen,
  Clock3,
  CheckCircle2,
  Flame,
  Play,
  Video,
  History as HistoryIcon,
} from "lucide-react";
import { Navbar } from "../../componets/student/navbar";

export default function LearnerDashboard() {
  const stats = [
    { label: "Courses Enrolled", value: 12, icon: BookOpen },
    { label: "Hours Watched", value: "48.5", icon: Clock3 },
    { label: "Courses Completed", value: 3, icon: CheckCircle2 },
    { label: "Current Streak", value: "7 days", icon: Flame },
  ];

  const inProgressCourses = [
    {
      title: "React Mastery 2024",
      author: "Tech Academy Pro",
      progress: 65,
      watched: "13/20 videos",
      timeLeft: "~4h 30m remaining",
      image: "/images/react-course.png",
    },
    {
      title: "Python for Data Science",
      author: "Data Science Institute",
      progress: 42,
      watched: "8/19 videos",
      timeLeft: "~6h 15m remaining",
      image: "/images/python-course.png",
    },
    {
      title: "Web Design Fundamentals",
      author: "Design Masters",
      progress: 28,
      watched: "5/18 videos",
      timeLeft: "~8h 45m remaining",
      image: "/images/webdesign-course.png",
    },
  ];

  const watchHistory = [
    {
      title: "Advanced React Hooks - useContext & useReducer Deep Dive",
      author: "Tech Academy Pro",
      views: "125.0K views",
      timeAgo: "2 hours ago",
      duration: "45:32",
      thumb: "/images/history-react-hooks.jpg",
    },
    {
      title: "State Management in React - Redux vs Context API",
      author: "Tech Academy Pro",
      views: "98.0K views",
      timeAgo: "1 day ago",
      duration: "38:15",
      thumb: "/images/history-redux-context.jpg",
    },
    {
      title: "Python Pandas Tutorial - Data Manipulation Made Easy",
      author: "Data Science Institute",
      views: "87.0K views",
      timeAgo: "3 days ago",
      duration: "52:10",
      thumb: "/images/history-pandas.jpg",
    },
    {
      title: "CSS Grid Layout - Build Responsive Designs",
      author: "Design Masters",
      views: "156.0K views",
      timeAgo: "1 week ago",
      duration: "41:25",
      thumb: "/images/history-css-grid.jpg",
    },
    {
      title: "SEO Fundamentals - Rank Higher on Google",
      author: "Marketing Academy",
      views: "203.0K views",
      timeAgo: "2 weeks ago",
      duration: "35:48",
      thumb: "/images/history-seo.jpg",
    },
    {
      title: "JavaScript Async/Await - Master Asynchronous Programming",
      author: "Tech Academy Pro",
      views: "142.0K views",
      timeAgo: "3 weeks ago",
      duration: "48:20",
      thumb: "/images/history-async-await.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
     <Navbar/>
      {/* PAGE CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* WELCOME + CTA */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              Welcome back, Learner!
            </h1>
            <p className="text-gray-600 mt-1">
              Continue your learning journey and track your progress
            </p>
          </div>
          <button className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            + Explore More Courses
          </button>
        </section>

        {/* OVERVIEW STATS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">{stat.label}</span>
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <stat.icon className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </div>
            </div>
          ))}
        </section>

        {/* CONTINUE WATCHING */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h2 className="font-medium text-gray-800 flex items-center gap-2">
            <Play className="w-4 h-4" />
            Continue Watching
          </h2>

          <div className="mt-5 flex flex-col md:flex-row gap-6">
            <div className="relative md:w-72 flex-shrink-0">
              <img
                src="/images/continue-react-laptop.jpg"
                alt="Continue course"
                className="w-full h-44 object-cover rounded-lg"
              />
              <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                2h 10m
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="text-sm text-gray-500">
                  React Mastery 2024
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-1">
                  Advanced React Hooks - useContext &amp; useReducer Deep Dive
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                  <img
                    src="/images/instructor-tech-academy.jpg"
                    alt="Instructor"
                    className="w-6 h-6 rounded-full"
                  />
                  Tech Academy Pro
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>1h 24m / 2h 10m</span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{ width: "60%" }}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Last watched 2 hours ago
                </div>
              </div>

              <div className="mt-4">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                  <Play className="w-4 h-4" />
                  Continue Watching
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* IN-PROGRESS COURSES */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium text-gray-800 flex items-center gap-2">
              <Video className="w-4 h-4" />
              In Progress Courses
            </h2>
            <span className="text-xs text-gray-500">
              {inProgressCourses.length} total
            </span>
          </div>

          <div className="space-y-4">
            {inProgressCourses.map((course) => (
              <div
                key={course.title}
                className="flex flex-col sm:flex-row gap-4 border border-gray-200 rounded-xl p-4"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-32 h-20 object-cover rounded-lg flex-shrink-0"
                />

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {course.author}
                      </p>
                    </div>
                    <button className="px-4 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                      Continue
                    </button>
                  </div>

                  <div className="mt-2 text-sm text-blue-600">
                    {course.watched}
                  </div>
                  <div className="mt-2 w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    {course.timeLeft}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-5 w-full text-sm border border-gray-300 rounded-lg py-2 hover:bg-gray-50">
            View All In Progress Courses
          </button>
        </section>

        {/* WATCH HISTORY */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-medium text-gray-800 flex items-center gap-2">
              <HistoryIcon className="w-4 h-4" />
              Watch History
            </h2>
            <span className="text-sm text-gray-500">
              {watchHistory.length} total
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {watchHistory.map((video) => (
              <div key={video.title}>
                <div className="relative">
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="w-full h-44 object-cover rounded-lg"
                  />
                  <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </span>
                </div>

                <h3 className="mt-3 text-sm font-semibold text-gray-900">
                  {video.title}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                  <img
                    src="/images/history-author.jpg"
                    alt={video.author}
                    className="w-6 h-6 rounded-full"
                  />
                  {video.author}
                </div>

                <div className="mt-1 text-xs text-gray-500 flex items-center gap-2">
                  <span>{video.views}</span>
                  <span>•</span>
                  <span>{video.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full text-sm border border-gray-300 rounded-lg py-2 hover:bg-gray-50">
            View Full Watch History
          </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 mt-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-500 gap-2">
          <span>© 2025 EduStream. All rights reserved.</span>
          <div className="flex gap-4">
            <button className="hover:underline">Privacy</button>
            <button className="hover:underline">Terms</button>
            <button className="hover:underline">Help</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
