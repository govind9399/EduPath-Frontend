 import { Footer } from "../../componets/student/footer";
import { NavLink } from "react-router-dom";
import { Play } from "lucide-react";
import Navbar from "../../componets/student/navbar";

export const Homepage = () => {
  const trendingCourses = [
    {
      id: 1,
      category: "Web Development",
      level: "Beginner",
      title: "Complete Web Development Bootcamp 2024",
      instructor: "Alex Johnson",
      videos: "120 videos",
      hours: "45 hours",
      views: "125.0K views",
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
      views: "98.0K views",
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
      views: "87.0K views",
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
      views: "76.0K views",
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
      views: "65.0K views",
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
      views: "54.0K views",
      image: "/images/trending-aws.jpg",
    },
  ];

  const categories = [
    { name: "Web Development", count: "1250 videos", iconBg: "from-blue-500 to-cyan-500" },
    { name: "Data Science", count: "890 videos", iconBg: "from-pink-500 to-purple-500" },
    { name: "Design", count: "756 videos", iconBg: "from-orange-500 to-red-500" },
    { name: "Business", count: "1100 videos", iconBg: "from-green-500 to-emerald-500" },
    { name: "Marketing", count: "645 videos", iconBg: "from-rose-500 to-pink-500" },
    { name: "Mobile Development", count: "520 videos", iconBg: "from-indigo-500 to-blue-500" },
    { name: "Cloud Computing", count: "430 videos", iconBg: "from-sky-500 to-cyan-500" },
    { name: "AI & Machine Learning", count: "680 videos", iconBg: "from-violet-500 to-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-orange-50 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 bg-clip-text text-transparent">
              Learn Anything,
            </span>
            <br />
            <span className="text-gray-900">Teach Everything</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Access thousands of high-quality educational videos completely free. Learn from expert creators and grow your skills at your own pace.
          </p>
        </div>
      </section>

      {/* TRENDING NOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Recommended Videos
            </h2>
            <p className="text-sm text-gray-500">Most popular videos this week</p>
          </div>

          <NavLink
            to="/search-result"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
          >
            View All →
          </NavLink>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trendingCourses.map((course) => (
            <NavLink key={course.id} to="/video-player">
              <article className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col hover:shadow-2xl">
                <div className="relative">

                  {/* RESPONSIVE THUMBNAIL FIX */}
                  <div className="bg-black rounded-xl h-[220px] sm:h-[260px] md:h-[300px] w-full md:w-[400px] hidden md:flex items-center justify-center hover:shadow-lg">
                    <Play className="text-white w-20 h-20 opacity-40" />
                  </div>

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
                  <h3 className="text-sm font-semibold text-gray-900">{course.title}</h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-gray-200" />
                    {course.instructor}
                  </div>

                  <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                    <span>🎬 {course.videos}</span>
                    <span>⏱ {course.hours}</span>
                  </div>

                  <div className="mt-3 text-xs text-gray-500">{course.views}</div>
                </div>
              </article>
            </NavLink>
          ))}
        </div>

        <div className="sm:hidden mt-4 flex justify-center">
          <NavLink
            to="/search-result"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
          >
            View All →
          </NavLink>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">Browse by Category</h2>
          <p className="text-sm text-gray-500 mt-1">Explore courses in your area of interest</p>

          {/* RESPONSIVE CATEGORY GRID */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <NavLink key={cat.name} to="/search-result">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col gap-3">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.iconBg} flex items-center justify-center text-white text-lg`}>
                    ⌘
                  </div>

                  <div>
                    <div className="font-medium text-gray-900">{cat.name}</div>
                    <div className="text-xs text-gray-500">{cat.count}</div>
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
