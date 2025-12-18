import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { ThemeToggle } from "../themeToggle/themetoggle";

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Your browser doesn't support voice recognition.");

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.start();

    recognition.onresult = (event) => setSearch(event.results[0][0].transcript);
    recognition.onerror = () => alert("Voice recognition error. Try again.");
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false);
    };
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  return (
    <header
      className="
        w-full fixed top-0 z-50
        border-b bg-white text-gray-800
        border-gray-200
        dark:bg-gpt-surface dark:text-gpt-text dark:border-gpt-border
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/homepage" className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-blue-500 to-amber-400 flex items-center justify-center text-white font-bold">
            EP
          </div>
          <span className="font-semibold text-lg dark:text-gpt-text">EduPath</span>
        </NavLink>

        {/* DESKTOP SEARCH BAR */}
        <div className="hidden md:flex w-[50%] items-center gap-3">
          <div className="relative w-full">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses, videos, creators..."
              className="
                w-full pl-4 pr-20 py-2 rounded-lg text-sm shadow-sm
                border border-gray-200 bg-white text-gray-800
                focus:outline-none focus:ring-2 focus:ring-cyan-600
                dark:bg-gpt-bg dark:border-gpt-border dark:text-gpt-text dark:placeholder-gpt-muted
              "
            />
            <CiSearch className="absolute right-10 top-2.5 text-xl cursor-pointer dark:text-gpt-muted" />
            <FaMicrophone
              className="absolute right-3 top-2.5 text-xl cursor-pointer dark:text-gpt-muted"
              onClick={handleVoiceInput}
            />
          </div>
        </div>

        {/* THEME TOGGLE */}

        {/* PROFILE + NOTIFICATION */}
        <div className="flex items-center gap-4 shrink-0">
        <ThemeToggle />
          <IoMdNotificationsOutline className="md:text-3xl text-2xl cursor-pointer dark:text-gpt-text" />

          <div ref={dropdownRef} className="relative">
            <CgProfile
              className="md:text-3xl text-2xl cursor-pointer dark:text-gpt-text"
              onClick={() => setDropdownOpen((prev) => !prev)}
            />

            {dropdownOpen && (
              <div
                className="
                  absolute right-0 top-10 w-48 rounded-lg py-2 z-50
                  bg-white border border-gray-200 shadow-lg animate-fadeIn
                  dark:bg-gpt-surface dark:border-gpt-border
                "
              >
                <Link
                  to="/creator-dashboard"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gpt-border"
                >
                  Dashboard
                </Link>

                <Link
                  to="/channel-setting"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gpt-border"
                >
                  Channel Setting
                </Link>

                <Link
                  to="/"
                  className="block px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gpt-border"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE SEARCH BAR */}
      <div className="md:hidden px-4 pb-2">
        <div className="relative">
          <input
            placeholder="Search courses, videos, creators..."
            className="
              w-full pl-4 pr-20 py-2 text-sm rounded-lg shadow-sm
              border border-gray-200 bg-white text-gray-800
              focus:outline-none focus:ring-2 focus:ring-cyan-600
              dark:bg-gpt-bg dark:border-gpt-border dark:text-gpt-text
            "
          />
          <CiSearch className="absolute right-10 top-2.5 text-xl dark:text-gpt-muted" />
          <FaMicrophone className="absolute right-3 top-2.5 text-xl dark:text-gpt-muted" />
        </div>
      </div>
    </header>
  );
};
