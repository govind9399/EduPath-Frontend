import { Edit2, Trash2, Lock, Globe, EyeOff, PlaySquare } from 'lucide-react';

export function PlaylistList({
  playlists,
  userRole,
  onSelectPlaylist,
  onEditPlaylist,
  onDeletePlaylist
}) {
  const canEdit = userRole === 'creator' || userRole === 'admin';

  const getVisibilityIcon = (visibility) => {
    switch (visibility) {
      case 'public':
        return <Globe className="w-4 h-4" />;
      case 'private':
        return <Lock className="w-4 h-4" />;
      case 'unlisted':
        return <EyeOff className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2>My Playlists</h2>
        <p className="text-gray-600">Organize your videos into collections</p>
      </div>

      {playlists.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <PlaySquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3>No playlists yet</h3>
          <p className="text-gray-600 mb-4">
            Create your first playlist to start organizing your videos
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                className="cursor-pointer"
                onClick={() => onSelectPlaylist(playlist.id)}
              >
                <div className="relative aspect-video bg-gray-200">
                  <img
                    src={playlist.thumbnail}
                    alt={playlist.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <PlaySquare className="w-3 h-3" />
                    {playlist.videoIds.length} videos
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="line-clamp-2">{playlist.title}</h3>
                    <div className="flex items-center gap-1 text-gray-500 flex-shrink-0">
                      {getVisibilityIcon(playlist.visibility)}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {playlist.description}
                  </p>

                  <p className="text-xs text-gray-500">
                    Created {new Date(playlist.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {canEdit && (
                <div className="border-t border-gray-200 p-3 flex gap-2">
                  <button
                    onClick={() => onEditPlaylist(playlist)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>

                  <button
                    onClick={() => onDeletePlaylist(playlist.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
