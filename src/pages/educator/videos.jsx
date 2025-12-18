import { NavLink } from "react-router-dom";
import { Play, Search, Filter } from "lucide-react";
import { Sidebar } from "../../componets/creator/sidebar";
import { Navbar } from "../../componets/creator/navbar";

export const Videos = () => {
  const trendingCourses = [
    // ...your existing data
    {
      id: 1,
      category: "Web Development",
      level: "Beginner",
      title: "Complete Web Development Bootcamp 2024",
      instructor: "Alex Johnson",
      videos: "120 videos",
      hours: "45 hours",
      views: "125.0K views",
    },
    {
      id: 2,
      category: "Data Science",
      level: "Intermediate",
      title: "Python for Data Science & Machine Learning",
      instructor: "Sarah Chen",
      videos: "95 videos",
      hours: "38 hours",
      views: "98.0K views",
    },
    {
      id: 3,
      category: "Marketing",
      level: "Beginner",
      title: "Digital Marketing Masterclass",
      instructor: "Mike Rodriguez",
      videos: "85 videos",
      hours: "32 hours",
      views: "87.0K views",
    },
    {
      id: 4,
      category: "Web Development",
      level: "Advanced",
      title: "Advanced React & Next.js Development",
      instructor: "Emma Wilson",
      videos: "110 videos",
      hours: "42 hours",
      views: "76.0K views",
    },
    {
      id: 5,
      category: "Design",
      level: "Beginner",
      title: "UI/UX Design Fundamentals",
      instructor: "Lisa Park",
      videos: "75 videos",
      hours: "28 hours",
      views: "65.0K views",
    },
    {
      id: 6,
      category: "Cloud Computing",
      level: "Intermediate",
      title: "Cloud Computing with AWS",
      instructor: "James Kumar",
      videos: "88 videos",
      hours: "35 hours",
      views: "54.0K views",
    },
  ];

  const category = [
    {
      name: "Web Development",
      count: "1250 videos",
      iconBg: "from-cyan-500 to-blue-600",
    },
    {
      name: "Data Science",
      count: "890 videos",
      iconBg: "from-blue-400 to-cyan-400",
    },
    {
      name: "Design",
      count: "756 videos",
      iconBg: "from-cyan-500 to-blue-500",
    },
    {
      name: "Business",
      count: "1100 videos",
      iconBg: "from-blue-500 to-indigo-600",
    },
    {
      name: "Marketing",
      count: "645 videos",
      iconBg: "from-cyan-500 to-indigo-600",
    },
    {
      name: "Mobile Development",
      count: "520 videos",
      iconBg: "from-blue-500 to-indigo-600",
    },
    {
      name: "Cloud Computing",
      count: "430 videos",
      iconBg: "from-cyan-500 to-blue-600",
    },
    {
      name: "AI & Machine Learning",
      count: "680 videos",
      iconBg: "from-blue-400 to-indigo-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gpt-bg dark:text-gpt-text transition">
      <Navbar />
      <Sidebar/>
      <div className="flex md:ml-64">
        {/* PAGE HEADER */}
        <div className="flex flex-col w-full px-6 md:px-10 py-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide mt-16">
             Videos <span className="text-xl font-light">(15)</span>
          </h1>

          {/* SEARCH & FILTER BAR */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-10">

          </div>

          {/* VIDEO CARDS SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {trendingCourses.map((course) => (
              <NavLink key={course.id} to="">
                <article
                  className="
                    group bg-white dark:bg-gpt-surface rounded-2xl border border-gray-200 dark:border-gpt-border
                    shadow-md hover:shadow-2xl transition overflow-hidden hover:-translate-y-1
                  "
                >
                  {/* THUMBNAIL */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black h-48 flex items-center justify-center">
                      <Play className="text-white w-16 h-16 opacity-40 group-hover:opacity-80 transition" />
                    </div>

                    <span
                      className="
                      absolute top-3 left-3 px-3 py-1 text-xs rounded-full text-white
                      bg-gradient-to-r from-cyan-500 to-blue-600 shadow
                    "
                    >
                      {course.category}
                    </span>

                    <span
                      className="
                      absolute top-3 right-3 px-3 py-1 text-xs rounded-full text-white bg-black/70
                    "
                    >
                      {course.level}
                    </span>
                  </div>

                  {/* DETAILS */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-md font-semibold leading-tight">
                      {course.title}
                    </h3>

                    <div className="text-sm text-gray-500 dark:text-gpt-muted">
                      👤 {course.instructor}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gpt-muted">
                      <span>🎬 {course.videos}</span>
                      <span>⏱ {course.hours}</span>
                    </div>

                    <div className="text-xs text-gray-500 dark:text-gpt-muted">
                      👁 {course.views}
                    </div>
                  </div>
                </article>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
