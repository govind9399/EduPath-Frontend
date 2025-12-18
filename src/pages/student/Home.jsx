import { Footer } from "../../componets/student/footer";
import { NavLink } from "react-router-dom";
import { Play } from "lucide-react";
import { Navbar } from "../../componets/student/navbar";

export const Homepage = () => {
  const trendingCourses = [
    { id: 1, category: "Web Development", level: "Beginner", title: "Complete Web Development Bootcamp 2024", instructor: "Alex Johnson", videos: "120 videos", hours: "45 hours", views: "125.0K views" },
    { id: 2, category: "Data Science", level: "Intermediate", title: "Python for Data Science & Machine Learning", instructor: "Sarah Chen", videos: "95 videos", hours: "38 hours", views: "98.0K views" },
    { id: 3, category: "Marketing", level: "Beginner", title: "Digital Marketing Masterclass", instructor: "Mike Rodriguez", videos: "85 videos", hours: "32 hours", views: "87.0K views" },
    { id: 4, category: "Web Development", level: "Advanced", title: "Advanced React & Next.js Development", instructor: "Emma Wilson", videos: "110 videos", hours: "42 hours", views: "76.0K views" },
    { id: 5, category: "Design", level: "Beginner", title: "UI/UX Design Fundamentals", instructor: "Lisa Park", videos: "75 videos", hours: "28 hours", views: "65.0K views" },
    { id: 6, category: "Cloud Computing", level: "Intermediate", title: "Cloud Computing with AWS", instructor: "James Kumar", videos: "88 videos", hours: "35 hours", views: "54.0K views" },
  ];

  const categories = [
    { name: "Web Development", count: "1250 videos", iconBg: "from-cyan-500 to-blue-600" },
    { name: "Data Science", count: "890 videos", iconBg: "from-blue-400 to-cyan-400" },
    { name: "Design", count: "756 videos", iconBg: "from-cyan-500 to-blue-500" },
    { name: "Business", count: "1100 videos", iconBg: "from-blue-500 to-indigo-600" },
    { name: "Marketing", count: "645 videos", iconBg: "from-cyan-500 to-indigo-600" },
    { name: "Mobile Development", count: "520 videos", iconBg: "from-blue-500 to-indigo-600" },
    { name: "Cloud Computing", count: "430 videos", iconBg: "from-cyan-500 to-blue-600" },
    { name: "AI & Machine Learning", count: "680 videos", iconBg: "from-blue-400 to-indigo-500" },
  ];

  return (
    <div className="
      min-h-screen font-gpt
      bg-white dark:bg-gpt-bg
      text-gray-800 dark:text-gpt-text
      transition-colors duration-300
    ">
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-b from-cyan-50 via-white to-blue-50 dark:from-gpt-bg dark:via-gpt-bg dark:to-gpt-bg mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Learn Anything,
            </span>
            <br />
            <span className="text-gray-900 dark:text-gpt-text">Teach Everything</span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gpt-muted max-w-2xl mx-auto">
            Access thousands of high-quality educational videos for free. Learn from expert creators and grow your skills.
          </p>
        </div>
      </section>

      {/* TRENDING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-semibold dark:text-gpt-text">Recommended Videos</h2>
            <p className="text-sm text-gray-500 dark:text-gpt-muted">
              Most popular videos this week
            </p>
          </div>

          <NavLink
            to="/search-result"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gpt-border rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gpt-surface transition"
          >
            View All →
          </NavLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trendingCourses.map((course) => (
            <NavLink key={course.id} to="/youtube-player">
              <article className="
                bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border
                rounded-xl shadow hover:shadow-xl transition overflow-hidden
              ">
                <div className="relative">
                  <div className="bg-gray-900 dark:bg-gpt-border h-[220px] sm:h-[260px] md:h-[300px] flex items-center justify-center">
                    <Play className="text-white w-16 h-16 opacity-40" />
                  </div>

                  <span className="
                    absolute top-3 left-3 px-2 py-1 text-xs rounded-full text-white
                    bg-gradient-to-br from-cyan-500 to-blue-600 shadow-sm
                  ">
                    {course.category}
                  </span>

                  <span className="
                    absolute top-3 right-3 px-2 py-1 text-xs rounded-full text-white
                    bg-black/70 dark:bg-gpt-border
                  ">
                    {course.level}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold dark:text-gpt-text">
                    {course.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-600 dark:text-gpt-muted">
                    <span className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gpt-border" />
                    {course.instructor}
                  </div>

                  <div className="mt-3 flex items-center gap-4 text-xs text-gray-500 dark:text-gpt-muted">
                    <span>🎬 {course.videos}</span>
                    <span>⏱ {course.hours}</span>
                  </div>

                  <div className="mt-3 text-xs text-gray-500 dark:text-gpt-muted">
                    {course.views}
                  </div>
                </div>
              </article>
            </NavLink>
          ))}
        </div>
        
      </section>

      {/* CATEGORIES */}
      <section className="mt-16 bg-gray-50 dark:bg-gpt-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl font-semibold dark:text-gpt-text">Browse by Category</h2>
          <p className="text-sm text-gray-500 dark:text-gpt-muted">
            Explore courses in your interest
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <NavLink key={cat.name} to="/search-result">
                <div className="
                  bg-white dark:bg-gpt-surface border border-gray-200 dark:border-gpt-border
                  rounded-xl shadow-sm p-5 hover:shadow-md transition flex flex-col gap-3
                ">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.iconBg} flex items-center justify-center text-white`}>
                    ⌘
                  </div>

                  <div>
                    <div className="font-medium dark:text-gpt-text">{cat.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gpt-muted">{cat.count}</div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
