import { Plus, Video } from 'lucide-react';

export function Header({ userRole, onCreatePlaylist }) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* LEFT SECTION */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Video className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1>Playlist Manager</h1>
              <p className="text-sm text-gray-600">
                Role: <span className="capitalize">{userRole}</span>
              </p>
            </div>
          </div>

          {/* RIGHT SECTION BUTTON */}
          {(userRole === 'creator' || userRole === 'admin') && (
            <button
              onClick={onCreatePlaylist}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Playlist
            </button>
          )}

        </div>
      </div>
    </header>
  );
}
