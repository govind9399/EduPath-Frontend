import { useState } from 'react';
import { Search, Video, Eye, ThumbsUp, Flag, CheckCircle, Trash2 } from 'lucide-react';

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
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.creator.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || video.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || video.category === filterCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleApprove = (videoId) => {
    setVideos(videos.map(video =>
      video.id === videoId ? { ...video, status: 'approved' } : video
    ));
    setSelectedVideo(null);
  };

  const handleFlag = (videoId) => {
    setVideos(videos.map(video =>
      video.id === videoId ? { ...video, status: 'flagged' } : video
    ));
    setSelectedVideo(null);
  };

  const handleRemove = (videoId) => {
    setVideos(videos.map(video =>
      video.id === videoId ? { ...video, status: 'removed' } : video
    ));
    setSelectedVideo(null);
  };

  const canPerformActions = adminRole === 'super_admin' || adminRole === 'content_admin';

  const totalViews = videos.reduce((sum, v) => sum + v.views, 0);
  const totalLikes = videos.reduce((sum, v) => sum + v.likes, 0);
  const flaggedCount = videos.filter(v => v.status === 'flagged').length;

  return (
    <div className="space-y-6">

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6 flex items-center gap-3">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Video className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Videos</p>
            <p className="text-gray-900">234,890</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex items-center gap-3">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Eye className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Views</p>
            <p className="text-gray-900">{totalViews.toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex items-center gap-3">
          <div className="bg-green-100 p-3 rounded-lg">
            <ThumbsUp className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Likes</p>
            <p className="text-gray-900">{totalLikes.toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex items-center gap-3">
          <div className="bg-red-100 p-3 rounded-lg">
            <Flag className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Flagged Videos</p>
            <p className="text-gray-900">{flaggedCount}</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search videos or creators..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Status</option>
          <option value="approved">Approved</option>
          <option value="flagged">Flagged</option>
          <option value="removed">Removed</option>
        </select>

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'All Categories' : cat}
            </option>
          ))}
        </select>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredVideos.map(video => (
          <div
            key={video.id}
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />

              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                {video.duration}
              </div>

              <div className="absolute top-2 right-2">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    video.status === 'approved'
                      ? 'bg-green-500 text-white'
                      : video.status === 'flagged'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-500 text-white'
                  }`}
                >
                  {video.status.charAt(0).toUpperCase() + video.status.slice(1)}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h4 className="text-gray-900 mb-2 line-clamp-2">{video.title}</h4>
              <p className="text-gray-600 text-sm mb-3">{video.creator}</p>

              <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{video.views.toLocaleString()}</span>
                </div>

                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{video.likes.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>{video.category}</span>
                <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
              </div>

              <button
                onClick={() => setSelectedVideo(video)}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6">
            <img src={selectedVideo.thumbnail} alt={selectedVideo.title} className="w-full h-64 object-cover rounded-lg mb-4" />

            <h3 className="text-gray-900 mb-2">{selectedVideo.title}</h3>
            <p className="text-gray-600 mb-4">by {selectedVideo.creator}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <Info label="Views" value={selectedVideo.views.toLocaleString()} />
              <Info label="Likes" value={selectedVideo.likes.toLocaleString()} />
              <Info label="Duration" value={selectedVideo.duration} />
              <Info label="Category" value={selectedVideo.category} />
              <Info label="Upload Date" value={new Date(selectedVideo.uploadDate).toLocaleDateString()} />
              <Info label="Watch Time" value={`${selectedVideo.watchTime}h`} />
            </div>

            <div className="mb-6">
              <p className="text-gray-500 text-sm mb-2">Status</p>

              <span
                className={`px-3 py-1 rounded ${
                  selectedVideo.status === 'approved'
                    ? 'bg-green-100 text-green-700'
                    : selectedVideo.status === 'flagged'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-gray-100 text-gray-700'
                }`}
              >
                {selectedVideo.status}
              </span>
            </div>

            {/* Actions */}
            {canPerformActions && (
              <div className="flex flex-wrap gap-3 pt-4 border-t">
                {selectedVideo.status !== 'approved' && (
                  <button
                    onClick={() => handleApprove(selectedVideo.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <CheckCircle className="w-4 h-4" /> Approve
                  </button>
                )}

                {selectedVideo.status !== 'flagged' && (
                  <button
                    onClick={() => handleFlag(selectedVideo.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
                  >
                    <Flag className="w-4 h-4" /> Flag for Review
                  </button>
                )}

                {selectedVideo.status !== 'removed' && (
                  <button
                    onClick={() => handleRemove(selectedVideo.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    <Trash2 className="w-4 h-4" /> Remove Video
                  </button>
                )}

                <button
                  onClick={() => setSelectedVideo(null)}
                  className="ml-auto px-4 py-2 border rounded-lg"
                >
                  Close
                </button>
              </div>
            )}

            {!canPerformActions && (
              <div className="flex justify-end pt-4 border-t">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-gray-900">{value}</p>
    </div>
  );
}
