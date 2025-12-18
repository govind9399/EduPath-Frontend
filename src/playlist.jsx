import { useState } from 'react';
import { PlaylistList } from './pages/playlist/PlaylistList';
import { PlaylistDetail } from './pages/playlist/PlaylistDetail';
import { CreateEditPlaylistModal } from './pages/playlist/CreateEditPlaylistModal';
import { AddVideoModal } from './pages/playlist/AddVideoModal';
import { Header } from './pages/playlist/Header';

// Mock video data
const mockVideos = [
  {
    id: 'v1',
    title: 'Introduction to React Hooks',
    description: 'Learn the basics of React Hooks including useState and useEffect',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
    duration: '12:30',
    uploadDate: '2024-01-15'
  },
  {
    id: 'v2',
    title: 'Advanced State Management',
    description: 'Deep dive into complex state patterns and context API',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400',
    duration: '18:45',
    uploadDate: '2024-01-20'
  },
  {
    id: 'v3',
    title: 'Building Custom Hooks',
    description: 'Create reusable logic with custom React hooks',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
    duration: '15:20',
    uploadDate: '2024-01-25'
  },
  {
    id: 'v4',
    title: 'TypeScript with React',
    description: 'Type-safe React development with TypeScript',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400',
    duration: '22:15',
    uploadDate: '2024-02-01'
  },
  {
    id: 'v5',
    title: 'React Performance Optimization',
    description: 'Optimize your React apps with useMemo, useCallback, and React.memo',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    duration: '20:30',
    uploadDate: '2024-02-05'
  },
  {
    id: 'v6',
    title: 'Testing React Components',
    description: 'Unit and integration testing with Jest and React Testing Library',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
    duration: '25:00',
    uploadDate: '2024-02-10'
  }
];

export const PlaylistManagementPage=()=> {
  const [currentUser] = useState('creator');
  const [playlists, setPlaylists] = useState([
    {
      id: 'p1',
      title: 'React Fundamentals',
      description: 'Master the basics of React development',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
      visibility: 'public',
      videoIds: ['v1', 'v2', 'v3'],
      createdAt: '2024-01-15',
      creatorId: 'user1'
    },
    {
      id: 'p2',
      title: 'Advanced React Patterns',
      description: 'Take your React skills to the next level',
      thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400',
      visibility: 'public',
      videoIds: ['v4', 'v5'],
      createdAt: '2024-02-01',
      creatorId: 'user1'
    }
  ]);

  const [videos] = useState(mockVideos);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [isCreateEditModalOpen, setIsCreateEditModalOpen] = useState(false);
  const [isAddVideoModalOpen, setIsAddVideoModalOpen] = useState(false);
  const [editingPlaylist, setEditingPlaylist] = useState(null);

  const handleCreatePlaylist = (playlist) => {
    const newPlaylist = {
      ...playlist,
      id: `p${Date.now()}`,
      videoIds: [],
      createdAt: new Date().toISOString(),
      creatorId: 'user1'
    };
    setPlaylists([...playlists, newPlaylist]);
    setIsCreateEditModalOpen(false);
  };

  const handleUpdatePlaylist = (id, updates) => {
    setPlaylists(playlists.map(p => p.id === id ? { ...p, ...updates } : p));
    setIsCreateEditModalOpen(false);
    setEditingPlaylist(null);
  };

  const handleDeletePlaylist = (id) => {
    if (confirm('Are you sure you want to delete this playlist?')) {
      setPlaylists(playlists.filter(p => p.id !== id));
      if (selectedPlaylist === id) {
        setSelectedPlaylist(null);
      }
    }
  };

  const handleAddVideosToPlaylist = (videoIds) => {
    if (selectedPlaylist) {
      const playlist = playlists.find(p => p.id === selectedPlaylist);

      if (playlist) {
        const newVideoIds = [...playlist.videoIds];
        videoIds.forEach(id => {
          if (!newVideoIds.includes(id)) newVideoIds.push(id);
        });
        handleUpdatePlaylist(selectedPlaylist, { videoIds: newVideoIds });
      }
    }
    setIsAddVideoModalOpen(false);
  };

  const handleRemoveVideoFromPlaylist = (playlistId, videoId) => {
    const playlist = playlists.find(p => p.id === playlistId);
    if (playlist) {
      handleUpdatePlaylist(playlistId, {
        videoIds: playlist.videoIds.filter(id => id !== videoId)
      });
    }
  };

  const handleReorderVideos = (playlistId, newOrder) => {
    handleUpdatePlaylist(playlistId, { videoIds: newOrder });
  };

  const handleEditPlaylist = (playlist) => {
    setEditingPlaylist(playlist);
    setIsCreateEditModalOpen(true);
  };

  const handleBack = () => setSelectedPlaylist(null);

  const currentPlaylist = selectedPlaylist
    ? playlists.find(p => p.id === selectedPlaylist)
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        userRole={currentUser}
        onCreatePlaylist={() => setIsCreateEditModalOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {!selectedPlaylist ? (
          <PlaylistList
            playlists={playlists}
            userRole={currentUser}
            onSelectPlaylist={setSelectedPlaylist}
            onEditPlaylist={handleEditPlaylist}
            onDeletePlaylist={handleDeletePlaylist}
          />
        ) : currentPlaylist ? (
          <PlaylistDetail
            playlist={currentPlaylist}
            videos={videos.filter(v => currentPlaylist.videoIds.includes(v.id))}
            allVideos={videos}
            userRole={currentUser}
            onBack={handleBack}
            onAddVideos={() => setIsAddVideoModalOpen(true)}
            onRemoveVideo={(videoId) =>
              handleRemoveVideoFromPlaylist(currentPlaylist.id, videoId)
            }
            onReorderVideos={(newOrder) =>
              handleReorderVideos(currentPlaylist.id, newOrder)
            }
            onEditPlaylist={() => handleEditPlaylist(currentPlaylist)}
          />
        ) : null}
      </main>

      {isCreateEditModalOpen && (
        <CreateEditPlaylistModal
          playlist={editingPlaylist}
          onClose={() => {
            setIsCreateEditModalOpen(false);
            setEditingPlaylist(null);
          }}
          onSave={(playlist) => {
            if (editingPlaylist) {
              handleUpdatePlaylist(editingPlaylist.id, playlist);
            } else {
              handleCreatePlaylist(playlist);
            }
          }}
        />
      )}

      {isAddVideoModalOpen && selectedPlaylist && (
        <AddVideoModal
          videos={videos}
          selectedVideoIds={currentPlaylist?.videoIds || []}
          onClose={() => setIsAddVideoModalOpen(false)}
          onAdd={handleAddVideosToPlaylist}
        />
      )}
    </div>
  );
}
