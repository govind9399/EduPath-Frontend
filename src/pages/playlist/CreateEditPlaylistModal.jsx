import { useState, useEffect } from 'react';
import { X, Upload } from 'lucide-react';

export function CreateEditPlaylistModal({ playlist, onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [visibility, setVisibility] = useState('public');

  useEffect(() => {
    if (playlist) {
      setTitle(playlist.title);
      setDescription(playlist.description);
      setThumbnail(playlist.thumbnail);
      setVisibility(playlist.visibility);
    }
  }, [playlist]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onSave({
        title: title.trim(),
        description: description.trim(),
        thumbnail:
          thumbnail ||
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400',
        visibility,
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* HEADER */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2>{playlist ? 'Edit Playlist' : 'Create New Playlist'}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* TITLE */}
          <div>
            <label htmlFor="title" className="block mb-2">
              Playlist Title *
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., React Fundamentals"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label htmlFor="description" className="block mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what this playlist is about..."
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* THUMBNAIL */}
          <div>
            <label htmlFor="thumbnail" className="block mb-2">
              Thumbnail URL
            </label>
            <div className="space-y-2">
              <input
                id="thumbnail"
                type="url"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              {thumbnail ? (
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={thumbnail}
                    alt="Thumbnail preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Upload className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">No thumbnail set</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* VISIBILITY */}
          <div>
            <label className="block mb-2">Visibility *</label>

            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="visibility"
                  value="public"
                  checked={visibility === 'public'}
                  onChange={(e) => setVisibility(e.target.value)}
                  className="w-4 h-4"
                />
                <div>
                  <div>Public</div>
                  <p className="text-sm text-gray-600">Anyone can view this playlist</p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="visibility"
                  value="unlisted"
                  checked={visibility === 'unlisted'}
                  onChange={(e) => setVisibility(e.target.value)}
                  className="w-4 h-4"
                />
                <div>
                  <div>Unlisted</div>
                  <p className="text-sm text-gray-600">Only people with the link can view</p>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="visibility"
                  value="private"
                  checked={visibility === 'private'}
                  onChange={(e) => setVisibility(e.target.value)}
                  className="w-4 h-4"
                />
                <div>
                  <div>Private</div>
                  <p className="text-sm text-gray-600">Only you can view this playlist</p>
                </div>
              </label>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {playlist ? 'Save Changes' : 'Create Playlist'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
