 import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  return (
    <>
      <header className="w-full border-b border-gray-200 bg-white  top-0 z-50 fixed">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <NavLink to="/homepage" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-blue-500 to-amber-400 flex items-center justify-center text-white font-bold">
              EP
            </div>
            <span className="font-semibold text-gray-800 text-lg">EduPath</span>
          </NavLink>

          {/* SEARCH */}
          <div className="hidden md:block flex-1 mx-10">
            <div className="relative max-w-xl mx-auto">
              <input
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 shadow-sm
                focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Search courses, videos, creators..."
              />
              <svg
                className="w-4 h-4 absolute right-3 top-2.5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
              <CiSearch className="text-3xl font-semibold" />
   
              </svg>
            </div>
          </div>

          {/* PROFILE DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-white hover:bg-gray-100
              transition"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <RiAccountCircleLine size={22} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border shadow-lg rounded-lg text-sm py-2 animate-fade-in">
                
                <Link
                  to="/student-dashboard"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Dashboard
                </Link>

                <Link
                  to="/watch-history"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Watch History
                </Link>

                <Link
                  to="/saved"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Saved Courses
                </Link>

                <Link
                  to="/creator"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Switch to Creator
                </Link>

                <Link
                  to="/settings"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </Link>

                <Link
                  to="/logout"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 text-red-500"
                >
                  Sign Out
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
