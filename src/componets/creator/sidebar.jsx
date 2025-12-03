 import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden fixed top-20 left-4 z-50 bg-gray-900 text-white p-2 rounded"
        onClick={() => setOpen(!open)}
      >
        <IoMenu size={22} />
      </button>

      {/* SIDEBAR */}
      <div
        className={`fixed top-16 left-0 h-full bg-white border-r border-gray-200 shadow-sm
        w-56 p-3 space-y-3 text-sm flex flex-col transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block`}
      >
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
          Monetization Setting
        </NavLink>
      </div>
    </>
  );
};
