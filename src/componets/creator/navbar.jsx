 import { NavLink } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <header className="w-full border-b border-gray-200 bg-white fixed top-0 z-50">
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/homepage" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-blue-500 to-amber-400 flex items-center justify-center text-white font-bold">
              EP
            </div>
            <span className="font-semibold text-gray-800 text-lg">EduPath</span>
          </NavLink>

          {/* SEARCH BAR */}
          <div className="hidden md:flex w-[50%] items-center gap-3">
            <div className="flex-1 mx-2">
              <div className="relative max-w-xl mx-auto">
                <input
                  className="w-full pl-4 pr-20 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Search courses, videos, creators..."
                />
                <CiSearch className="absolute right-10 top-2.5 text-xl text-gray-600 cursor-pointer" />
                <FaMicrophone className="absolute right-3 top-2.5 text-xl text-gray-600 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-4 shrink-0">
            <IoMdNotificationsOutline className="text-3xl cursor-pointer" />

            <NavLink
              to="/creator-dashboard"
              className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700"
            >
              <CgProfile className="text-2xl" />
            </NavLink>
          </div>
        </div>

        {/* MOBILE SEARCH BAR */}
        <div className="md:hidden px-4 pb-2">
          <div className="relative w-full">
            <input
              className="w-full pl-4 pr-20 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Search courses, videos, creators..."
            />
            <CiSearch className="absolute right-10 top-2.5 text-xl text-gray-600 cursor-pointer" />
            <FaMicrophone className="absolute right-3 top-2.5 text-xl text-gray-600 cursor-pointer" />
          </div>
        </div>
      </header>
    </>
  );
};
