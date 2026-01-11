import { NavLink } from "react-router-dom";
import { Sidebar } from "../../componets/creator/sidebar";
import { Navbar } from "../../componets/creator/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;
const DEFAULT_THUMBNAIL = "uploads/default-thumb.jpg";

export const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/videos`);
        setVideos(res.data.videos || []);

        // Debug: full response
        console.log("VIDEOS RESPONSE:", res.data.videos);
      } catch (err) {
        console.error("Fetch videos error:", err);
        setError("Failed to load videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <p className="mt-20 text-center">Loading videos...</p>;
  }

  if (error) {
    return <p className="mt-20 text-center text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gpt-bg dark:text-gpt-text">
      <Navbar />

      <div className="flex pt-16">
        <Sidebar />

        <main className="flex-1 md:ml-64 px-6 md:px-10 py-10">
          {/* HEADER */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Videos{" "}
            <span className="text-xl font-light">({videos.length})</span>
          </h1>

          {/* VIDEO GRID */}
          {videos.length === 0 ? (
            <p className="text-gray-500">No videos found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {videos.map((video) => {
                // Normalize Windows paths → URL paths
                const normalizedVideoUrl = video.videoUrl
                  ? video.videoUrl.replace(/\\/g, "/")
                  : "";

                const normalizedThumbUrl = video.thumbnailUrl
                  ? video.thumbnailUrl.replace(/\\/g, "/")
                  : DEFAULT_THUMBNAIL;

                const finalVideoUrl = `${API_BASE_URL}/${normalizedVideoUrl}`;
                const finalThumbUrl = `${API_BASE_URL}/${normalizedThumbUrl}`;

                // Debug per video
                console.log("VIDEO URL:", finalVideoUrl);
                console.log("THUMB URL:", finalThumbUrl);

                return (
                  <article
                    key={video._id}
                    className="
                      bg-white dark:bg-gpt-surface rounded-2xl
                      border border-gray-200 dark:border-gpt-border
                      shadow-md overflow-hidden
                    "
                  >
                    {/* VIDEO WITH THUMBNAIL */}
                    <video
                      controls
                      preload="metadata"
                      poster={finalThumbUrl}
                      className="w-full h-48 bg-black rounded-lg object-cover"
                    >
                      <source src={finalVideoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* DETAILS */}
                    <div className="p-5 space-y-2">
                      <h3 className="text-md font-semibold">
                        {video.title || "Untitled Video"}
                      </h3>

                      {video.description && (
                        <p className="text-sm text-gray-500 dark:text-gpt-muted line-clamp-2">
                          {video.description}
                        </p>
                      )}

                      <NavLink
                        to={`/videos/${video._id}`}
                        className="inline-block text-sm text-cyan-600 hover:underline"
                      >
                        View details
                      </NavLink>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
