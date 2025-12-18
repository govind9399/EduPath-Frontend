import { useState } from 'react';
import { X, Search, Check } from 'lucide-react';

export function AddVideoModal({
  videos,
  selectedVideoIds,
  onClose,
  onAdd
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState(new Set());

  const availableVideos = videos.filter(v => !selectedVideoIds.includes(v.id));

  const filteredVideos = availableVideos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleVideo = (videoId) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(videoId)) {
      newSelected.delete(videoId);
    } else {
      newSelected.add(videoId);
    }
    setSelectedIds(newSelected);
  };

  const handleAdd = () => {
    onAdd(Array.from(selectedIds));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] flex flex-col">

        {/* HEADER */}
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <h2>Add Videos to Playlist</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SEARCH */}
        <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search videos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* VIDEO LIST */}
        <div className="flex-1 overflow-y-auto p-6">
          {filteredVideos.length === 0 ? (
            <div className="text-center py-8 text-gray-600">
              {availableVideos.length === 0 ? (
                <p>All available videos have been added to this playlist</p>
              ) : (
                <p>No videos found matching your search</p>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredVideos.map((video) => {
                const isSelected = selectedIds.has(video.id);
                return (
                  <div
                    key={video.id}
                    onClick={() => toggleVideo(video.id)}
                    className={`flex gap-4 p-3 border rounded-lg cursor-pointer transition-all ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="relative w-32 flex-shrink-0 aspect-video bg-gray-200 rounded overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white px-1.5 py-0.5 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="mb-1 line-clamp-2">{video.title}</h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {video.description}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                          isSelected
                            ? 'bg-blue-600 border-blue-600'
                            : 'border-gray-300'
                        }`}
                      >
                        {isSelected && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="border-t border-gray-200 px-6 py-4 flex gap-3 flex-shrink-0">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={handleAdd}
            disabled={selectedIds.size === 0}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add {selectedIds.size > 0 ? `(${selectedIds.size})` : ''}
          </button>
        </div>

      </div>
    </div>
  );
}
