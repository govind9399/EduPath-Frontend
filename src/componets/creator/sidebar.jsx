import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { MdUpload } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import { TbMessage2 } from "react-icons/tb";
import { PiMoneyLight } from "react-icons/pi";
import { RiBook2Line } from "react-icons/ri";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const baseClasses =
    "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200";
  const inactiveClasses =
    "text-gray-700 hover:bg-gray-100 dark:text-gpt-text dark:hover:bg-gpt-border";
  const activeClasses =
    "bg-cyan-600 text-white dark:bg-cyan-500 dark:text-white shadow-md";

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        className="
          md:hidden fixed top-20 left-4 z-50
          p-2 rounded-xl shadow-lg
          bg-cyan-600 text-white hover:bg-cyan-700
          transition
        "
        onClick={() => setOpen(!open)}
      >
        <IoMenu size={22} />
      </button>

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-16 left-0 h-full
          border-r shadow-sm w-60 md:w-64 p-4 shrink-0
          bg-white border-gray-200
          dark:bg-gpt-surface dark:border-gpt-border
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gpt-text px-4 mb-3">
          Creator Panel
        </h2>

        {/* NAV ITEMS */}
        <NavLink
          to="/creator-dashboard"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <RxDashboard size={20} /> Dashboard
        </NavLink>

        <NavLink
          to="/upload-video"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <MdUpload size={20} /> Upload Video
        </NavLink>

        <NavLink
          to="/playlist-management"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <RiBook2Line size={20} /> Playlist Management
        </NavLink>

        <NavLink
          to="/channel-setting"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <LuSettings2 size={20} /> Channel Setting
        </NavLink>

        {/* <NavLink */}
          {/* // to="/comment-moderation" */}
          {/* // className={({ isActive }) => */}
            {/* // // `${baseClasses} ${isActive ? activeClasses : inactiveClasses}` */}
          {/* // } */}
        {/* // > */}
          {/* <TbMessage2 size={20} /> Comment Moderation */}
        {/* </NavLink> */}

        <NavLink
          to="/monetization-setting"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <PiMoneyLight size={20} /> Monetization
        </NavLink>
      </aside>
    </>
  );
};
