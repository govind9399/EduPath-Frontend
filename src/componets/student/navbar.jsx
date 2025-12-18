import { useEffect, useState, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ThemeToggle } from "../themeToggle/themetoggle";

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="
      w-full fixed top-0 z-50 border-b transition-colors duration-300
      bg-white text-gray-900 border-gray-200
      dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text
    "
    >
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/homepage" className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
            EP
          </div>
          <span className="font-semibold text-lg dark:text-gpt-text">EduPath</span>
        </NavLink>

        {/* SEARCH BAR (Desktop) */}
        <div className="hidden md:flex w-[55%] items-center gap-3">
          <div className="flex-1 mx-2">
            <div className="relative max-w-xl mx-auto">
              <input
                className="
                w-full pl-4 pr-20 py-2 rounded-lg border shadow-sm text-sm
                bg-white text-gray-800 border-gray-200
                focus:outline-none focus:ring-2 focus:ring-cyan-500
                dark:bg-gpt-bg dark:text-gpt-text dark:border-gpt-border
                dark:focus:ring-cyan-400
              "
                placeholder="Search courses, videos, creators..."
              />
              <CiSearch className="absolute right-10 top-2.5 text-xl cursor-pointer text-gray-600 dark:text-gpt-muted" />
              <FaMicrophone className="absolute right-3 top-2.5 text-xl cursor-pointer text-gray-600 dark:text-gpt-muted" />
            </div>
          </div>
        </div>

        {/* THEME TOGGLE */}

        {/* PROFILE + DROPDOWN */}
        <div className="flex relative shrink-0" ref={dropdownRef}>
        <ThemeToggle />
          <IoMdNotificationsOutline className="md:text-3xl text-2xl mx-2 cursor-pointer text-gray-800 dark:text-gpt-text hover:text-cyan-500 dark:hover:text-cyan-400" />

          <RiAccountCircleLine
            onClick={() => setDropdownOpen(prev => !prev)}
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition md:text-3xl text-2xl cursor-pointer text-gray-800 dark:text-gpt-text"
          />

          {dropdownOpen && (
            <div
              className="
              absolute right-0 mt-2 w-56 bg-white border shadow-lg rounded-lg py-2 text-sm
              border-gray-200
              dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text
              backdrop-blur-sm
            "
            >
              <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gpt-border" to="/student-dashboard">Dashboard</Link>
              <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gpt-border" to="/watch-history">Watch History</Link>
              {/* <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gpt-border" to="/saved">Saved Courses</Link> */}
              {/* <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gpt-border" to="/creator-dashboard">Switch to Creator</Link> */}
              <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gpt-border" to="/settings">Settings</Link>

              <Link className="block px-4 py-2 hover:bg-red-50 dark:hover:bg-gpt-border text-red-500" to="/">
                Sign Out
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE SEARCH */}
      <div className="md:hidden px-4 pb-2">
        <div className="relative w-full">
          <input
            className="
            w-full pl-4 pr-20 py-2 rounded-lg border text-sm shadow-sm
            bg-white text-gray-800 border-gray-200
            dark:bg-gpt-bg dark:text-gpt-text dark:border-gpt-border
            focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400
          "
            placeholder="Search courses, videos, creators..."
          />
          <CiSearch className="absolute right-10 top-2.5 text-xl cursor-pointer text-gray-600 dark:text-gpt-muted" />
          <FaMicrophone className="absolute right-3 top-2.5 text-xl cursor-pointer text-gray-600 dark:text-gpt-muted" />
        </div>
      </div>
    </header>
  );
};
