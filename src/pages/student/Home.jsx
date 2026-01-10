import { Footer } from "../../componets/student/footer";
import { NavLink } from "react-router-dom";
import { Navbar } from "../../componets/student/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

/* ================= CONFIG ================= */

const API_BASE_URL = "http://localhost:3000"; // backend base URL
const DEFAULT_THUMBNAIL = `${API_BASE_URL}/uploads/default-thumb.jpg`;

/* ========================================= */

export const Homepage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/videos`);
        console.log("VIDEOS API RESPONSE:", res.data);

        const videoList =
          res.data?.videos ||
          res.data?.data ||
          (Array.isArray(res.data) ? res.data : []);

        setVideos(videoList);
      } catch (error) {
        console.error("Fetch videos error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const categories = [
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
    <div className="min-h-screen font-gpt bg-white dark:bg-gpt-bg text-gray-800 dark:text-gpt-text">
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-b from-cyan-50 via-white to-blue-50 dark:from-gpt-bg dark:to-gpt-bg mt-16">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Learn Anything,
            </span>
            <br />
            <span>Teach Everything</span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gpt-muted max-w-2xl mx-auto">
            Access thousands of high-quality educational videos for free.
          </p>
        </div>
      </section>

      {/* RECOMMENDED VIDEOS */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Recommended Videos</h2>
            <p className="text-sm text-gray-500">
              Most popular videos this week
            </p>
          </div>

          <NavLink
            to="/search-result"
            className="hidden sm:inline-flex px-4 py-2 border rounded-lg text-sm hover:bg-gray-50"
          >
            View All →
          </NavLink>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading videos...</p>
        ) : videos.length === 0 ? (
          <p className="text-gray-500">No videos found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videos.map((video) => {
              const normalizedVideoUrl = video.videoUrl
                ? video.videoUrl.replace(/\\/g, "/")
                : "";

              const normalizedThumbUrl = video.thumbnailUrl
                ? video.thumbnailUrl.replace(/\\/g, "/")
                : null;

              const finalVideoUrl = `${API_BASE_URL}/${normalizedVideoUrl}`;
              const finalThumbUrl = normalizedThumbUrl
                ? `${API_BASE_URL}/${normalizedThumbUrl}`
                : DEFAULT_THUMBNAIL;

              return (
                <article
                  key={video._id}
                  className="bg-white dark:bg-gpt-surface rounded-xl border shadow-sm overflow-hidden"
                >
                  <video
                    controls
                    preload="metadata"
                    poster={finalThumbUrl}
                    className="w-full h-48 bg-black object-cover"
                  >
                    <source src={finalVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold">
                      {video.title || "Untitled Video"}
                    </h3>

                    {video.description && (
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {video.description}
                      </p>
                    )}

                    <NavLink
                      to={`/videos/${video._id}`}
                      className="text-sm text-cyan-600 hover:underline"
                    >
                      View details
                    </NavLink>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* CATEGORIES */}
      <section className="mt-16 bg-gray-50 dark:bg-gpt-bg">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold">Browse by Category</h2>
          <p className="text-sm text-gray-500">
            Explore courses based on your interest
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <NavLink key={cat.name} to="/search-result">
                <div className="bg-white dark:bg-gpt-surface border rounded-xl shadow-sm p-5 hover:shadow-md transition flex gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.iconBg} flex items-center justify-center text-white`}
                  >
                    ⌘
                  </div>

                  <div>
                    <div className="font-medium">{cat.name}</div>
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
