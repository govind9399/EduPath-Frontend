import {
  ArrowLeft,
  Plus,
  Edit2,
  GripVertical,
  Trash2,
  Clock,
  Calendar
} from 'lucide-react';

import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState, useRef } from 'react';

const DraggableVideoItem = ({ video, index, moveVideo, onRemove, canEdit }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'video',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: canEdit,
  });

  const [, drop] = useDrop({
    accept: 'video',
    hover: (item) => {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      moveVideo(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  preview(drop(ref));

  return (
    <div
      ref={ref}
      className={`bg-white border border-gray-200 rounded-lg p-4 flex gap-4 ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      {canEdit && (
        <div
          ref={drag}
          className="flex items-center cursor-move text-gray-400 hover:text-gray-600"
        >
          <GripVertical className="w-5 h-5" />
        </div>
      )}

      <div className="relative w-40 flex-shrink-0 aspect-video bg-gray-200 rounded overflow-hidden">
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
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
          {video.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {video.duration}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(video.uploadDate).toLocaleDateString()}
          </span>
        </div>
      </div>

      {canEdit && (
        <div className="flex items-center">
          <button
            onClick={onRemove}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export function PlaylistDetail({
  playlist,
  videos,
  allVideos,
  userRole,
  onBack,
  onAddVideos,
  onRemoveVideo,
  onReorderVideos,
  onEditPlaylist
}) {
  const canEdit = userRole === 'creator' || userRole === 'admin';
  const [orderedVideos, setOrderedVideos] = useState(videos);

  const moveVideo = (dragIndex, hoverIndex) => {
    const newVideos = [...orderedVideos];
    const draggedVideo = newVideos[dragIndex];

    newVideos.splice(dragIndex, 1);
    newVideos.splice(hoverIndex, 0, draggedVideo);

    setOrderedVideos(newVideos);
    onReorderVideos(newVideos.map((v) => v.id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {/* BACK BUTTON */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to playlists
        </button>

        {/* PLAYLIST HEADER */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="relative w-full md:w-80 aspect-video bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={playlist.thumbnail}
                alt={playlist.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="mb-2">{playlist.title}</h2>
                  <p className="text-gray-600 mb-4">{playlist.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span>{playlist.videoIds.length} videos</span>
                    <span className="capitalize">{playlist.visibility}</span>
                    <span>Created {new Date(playlist.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                {canEdit && (
                  <button
                    onClick={onEditPlaylist}
                    className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO SECTION HEADER */}
        <div className="mb-4 flex items-center justify-between">
          <h3>Videos ({orderedVideos.length})</h3>

          {canEdit && (
            <button
              onClick={onAddVideos}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Videos
            </button>
          )}
        </div>

        {/* NO VIDEOS STATE */}
        {orderedVideos.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <p className="text-gray-600 mb-4">
              This playlist is empty. Add some videos to get started.
            </p>

            {canEdit && (
              <button
                onClick={onAddVideos}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add Videos
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {orderedVideos.map((video, index) => (
              <DraggableVideoItem
                key={video.id}
                video={video}
                index={index}
                moveVideo={moveVideo}
                onRemove={() => onRemoveVideo(video.id)}
                canEdit={canEdit}
              />
            ))}
          </div>
        )}
      </div>
    </DndProvider>
  );
}
