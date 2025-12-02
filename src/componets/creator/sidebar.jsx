 import { NavLink } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div className="space-y-3 text-sm flex flex-col fixed mt-16">
      <NavLink
        to="/creator-dashboard"
        className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/upload-video"
        className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
      >
        Upload Video
      </NavLink>
      <NavLink className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">
        Course Management
      </NavLink>
      <NavLink
        to="/channel-setting"
        className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
      >
        Channel Setting
      </NavLink>
      <NavLink
        to="/comment-moderation"
        className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
      >
        Comment Moderation
      </NavLink>
      <NavLink
        to="/monetization-setting"
        className="w-full text-left px-3 py-2 rounded hover:bg-gray-100"
      >
        Monetization setting
      </NavLink>
    </div>
  );
};
