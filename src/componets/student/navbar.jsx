 import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
          <div className="hidden md:flex w-[55%] items-center gap-3">
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

          {/* PROFILE ICON */}
          <div className="relative shrink-0" ref={dropdownRef}>
            <RiAccountCircleLine
              className="hover:shadow-xl transition text-2xl text-gray-800 cursor-pointer"
              onClick={() => setDropdownOpen((prev) => !prev)}
            />

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border shadow-lg rounded-lg text-sm py-2">
                <Link to="/student-dashboard" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                  Dashboard
                </Link>
                <Link to="/watch-history" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                  Watch History
                </Link>
                <Link to="/saved" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                  Saved Courses
                </Link>
                <Link to="/creator-dashboard" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                  Switch to Creator
                </Link>
                <Link to="/settings" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </Link>
                <Link to="/logout" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100 text-red-500">
                  Sign Out
                </Link>
              </div>
            )}
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

export default Navbar;
