 import { useState } from 'react';
import { Search, Video, Eye, ThumbsUp, Flag, CheckCircle, XCircle, Trash2 } from 'lucide-react';
import React from 'react';
// ──────────────────────────────
// StatCard Component
// ──────────────────────────────

const StatCard = ({ icon, label, value, color }) => {
  const colors = {
    purple: "bg-purple-100 text-purple-700",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex items-center gap-4">
      <div className={`p-3 rounded-full ${colors[color]}`}>{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
};
// ──────────────────────────────
// Filters Component
// ──────────────────────────────
const Filters = ({
  searchTerm,
  setSearch,
  filterStatus,
  setFilterStatus,
  filterCategory,
  setFilterCategory,
  categories,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-gray-100 rounded-lg">
      {/* Search */}
      <input
        type="text"
        placeholder="Search videos..."
        className="border px-3 py-2 rounded w-full md:w-1/3"
        value={searchTerm}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Status Filter */}
      <select
        className="border px-3 py-2 rounded"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="all">All Status</option>
        <option value="approved">Approved</option>
        <option value="flagged">Flagged</option>
        <option value="removed">Removed</option>
      </select>

      {/* Category Filter */}
      <select
        className="border px-3 py-2 rounded"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};
// ──────────────────────────────
// VideoModal Component
// ──────────────────────────────
const VideoModal = ({
  video,
  close,
  approve,
  flag,
  remove,
  canPerformActions,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-xl p-6 space-y-4">

        {/* Title */}
        <h2 className="text-xl font-semibold">{video.title}</h2>

        {/* Thumbnail */}
        <img
          src={video.thumbnail}
          alt={video.title}
          className="rounded-md w-full h-48 object-cover"
        />

        {/* Video Details */}
        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>Creator:</strong> {video.creator}</p>
          <p><strong>Views:</strong> {video.views.toLocaleString()}</p>
          <p><strong>Likes:</strong> {video.likes.toLocaleString()}</p>
          <p><strong>Status:</strong> {video.status}</p>
          <p><strong>Category:</strong> {video.category}</p>
          <p><strong>Uploaded:</strong> {new Date(video.uploadDate).toLocaleDateString()}</p>
        </div>

        {/* Action Buttons */}
        {canPerformActions && (
          <div className="flex gap-3 pt-2">
            <button
              className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
              onClick={() => approve(video.id)}
            >
              Approve
            </button>

            <button
              className="flex-1 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
              onClick={() => flag(video.id)}
            >
              Flag
            </button>

            <button
              className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700"
              onClick={() => remove(video.id)}
            >
              Remove
            </button>
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={close}
          className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// ──────────────────────────────
// VideosGrid Component
// ──────────────────────────────
const VideosGrid = ({ videos, setSelectedVideo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {videos.map((video) => (
        <div
          key={video.id}
          className="bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition"
          onClick={() => setSelectedVideo(video)}
        >
          <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />

          <div className="p-4 space-y-2">
            <p className="text-lg font-semibold">{video.title}</p>
            <p className="text-sm text-gray-500">By {video.creator}</p>

            <div className="flex justify-between text-gray-600 text-sm">
              <span className="flex items-center gap-1"><Eye size={14} /> {video.views.toLocaleString()}</span>
              <span className="flex items-center gap-1"><ThumbsUp size={14} /> {video.likes.toLocaleString()}</span>
              <span className={`${video.status === "flagged" ? "text-red-500" : "text-green-600"} font-medium`}>
                {video.status.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const MOCK_VIDEOS = [
  {
    id: '1',
    title: 'Introduction to React Hooks - Complete Tutorial',
    creator: 'Alex Thompson',
    creatorId: '1',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop',
    views: 125000,
    likes: 8500,
    uploadDate: '2024-11-20',
    duration: '45:32',
    status: 'approved',
    category: 'Programming',
    watchTime: 3200,
  },
  {
    id: '2',
    title: 'Advanced Mathematics: Calculus Fundamentals',
    creator: 'Maria Garcia',
    creatorId: '2',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop',
    views: 89000,
    likes: 5600,
    uploadDate: '2024-11-18',
    duration: '1:12:45',
    status: 'approved',
    category: 'Mathematics',
    watchTime: 2100,
  },
  {
    id: '3',
    title: 'Physics Explained: Quantum Mechanics Basics',
    creator: 'Sarah Johnson',
    creatorId: '6',
    thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=300&h=200&fit=crop',
    views: 45000,
    likes: 3200,
    uploadDate: '2024-11-15',
    duration: '38:20',
    status: 'flagged',
    category: 'Science',
    watchTime: 1200,
  },
  {
    id: '4',
    title: 'Business Strategy 101: Marketing Fundamentals',
    creator: 'Alex Thompson',
    creatorId: '1',
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop',
    views: 67000,
    likes: 4100,
    uploadDate: '2024-11-12',
    duration: '52:18',
    status: 'approved',
    category: 'Business',
    watchTime: 1800,
  },
  {
    id: '5',
    title: 'Python Programming: Data Structures Deep Dive',
    creator: 'Maria Garcia',
    creatorId: '2',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop',
    views: 156000,
    likes: 12000,
    uploadDate: '2024-11-10',
    duration: '1:28:34',
    status: 'approved',
    category: 'Programming',
    watchTime: 4500,
  },
  {
    id: '6',
    title: 'Chemistry Basics: Understanding Chemical Reactions',
    creator: 'Sarah Johnson',
    creatorId: '6',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop',
    views: 23000,
    likes: 1800,
    uploadDate: '2024-11-08',
    duration: '41:15',
    status: 'flagged',
    category: 'Science',
    watchTime: 850,
  },
];

export function VideoManagement({ adminRole }) {
  const [videos, setVideos] = useState(MOCK_VIDEOS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['all', 'Programming', 'Mathematics', 'Science', 'Business'];

  const filteredVideos = videos.filter(video => {
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      video.title.toLowerCase().includes(query) ||
      video.creator.toLowerCase().includes(query);

    return (
      (filterStatus === 'all' || video.status === filterStatus) &&
      (filterCategory === 'all' || video.category === filterCategory) &&
      matchesSearch
    );
  });

  const handleApprove = (id) => {
    setVideos(videos.map(v => v.id === id ? { ...v, status: 'approved' } : v));
    setSelectedVideo(null);
  };

  const handleFlag = (id) => {
    setVideos(videos.map(v => v.id === id ? { ...v, status: 'flagged' } : v));
    setSelectedVideo(null);
  };

  const handleRemove = (id) => {
    setVideos(videos.map(v => v.id === id ? { ...v, status: 'removed' } : v));
    setSelectedVideo(null);
  };

  const canPerformActions =
    adminRole === 'super_admin' || adminRole === 'content_admin';

  const totalViews = videos.reduce((sum, v) => sum + v.views, 0);
  const totalLikes = videos.reduce((sum, v) => sum + v.likes, 0);
  const flaggedCount = videos.filter(v => v.status === 'flagged').length;

  return (
    <div className="space-y-6">

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard icon={<Video />} label="Total Videos" value="234,890" color="purple" />
        <StatCard icon={<Eye />} label="Total Views" value={totalViews.toLocaleString()} color="blue" />
        <StatCard icon={<ThumbsUp />} label="Total Likes" value={totalLikes.toLocaleString()} color="green" />
        <StatCard icon={<Flag />} label="Flagged Videos" value={flaggedCount} color="red" />
      </div>

      {/* Filters */}
      <Filters
        searchTerm={searchTerm}
        setSearch={setSearchTerm}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        categories={categories}
      />

      {/* Videos Grid */}
      <VideosGrid
        videos={filteredVideos}
        setSelectedVideo={setSelectedVideo}
      />

      {/* Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          close={() => setSelectedVideo(null)}
          approve={handleApprove}
          flag={handleFlag}
          remove={handleRemove}
          canPerformActions={canPerformActions}
        />
      )}
    </div>
  );
}

/* For space, subcomponents omitted here,
   BUT your component now has **zero TypeScript**.
*/
