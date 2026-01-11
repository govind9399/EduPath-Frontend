import { useEffect, useState, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ThemeToggle } from "../themeToggle/themetoggle";
import axios from "axios";

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    console.log("Navbar useEffect started");

    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const API_BASE_URL = import.meta.env.VITE_API_URL;

        const res = await axios.get(
          `${API_BASE_URL}/api/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const pictureUrl = res.data.user?.pictureUrl;
        if (pictureUrl) {
          setProfilePic(`${API_BASE_URL}/${pictureUrl}`);
        }
      } catch (error) {
        console.error("Failed to load profile picture", error);
      }
    };

    fetchProfile();
  }, []);

  /* ================= DROPDOWN CLOSE ================= */
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ================= LOGOUT ================= */
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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
          <span className="font-semibold text-lg dark:text-gpt-text">
            EduPath
          </span>
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
              "
                placeholder="Search courses, videos, creators..."
              />
              <CiSearch className="absolute right-10 top-2.5 text-xl cursor-pointer text-gray-600 dark:text-gpt-muted" />
              <FaMicrophone className="absolute right-3 top-2.5 text-xl cursor-pointer text-gray-600 dark:text-gpt-muted" />
            </div>
          </div>
        </div>

        {/* PROFILE + ACTIONS */}
        <div className="flex relative shrink-0 items-center" ref={dropdownRef}>
          <ThemeToggle />

          <IoMdNotificationsOutline className="md:text-3xl text-2xl mx-2 cursor-pointer text-gray-800 dark:text-gpt-text hover:text-cyan-500" />

          {/* PROFILE IMAGE / ICON */}
          <div
            onClick={() => setDropdownOpen(prev => !prev)}
            className="cursor-pointer"
          >
            {profilePic ? (
              <img
                src={profilePic}
                alt="profile"
                className="w-9 h-9 rounded-full object-cover border"
              />
            ) : (
              <RiAccountCircleLine className="md:text-3xl text-2xl text-gray-800 dark:text-gpt-text hover:text-cyan-500" />
            )}
          </div>

          {/* DROPDOWN */}
          {dropdownOpen && (
            <div
              className="
              absolute right-0 mt-18 w-56 bg-white border shadow-lg rounded-lg py-2 text-sm
              border-gray-200
              dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text
            "
            >
              <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gpt-border" to="/student-dashboard">
                Dashboard
              </Link>

              <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gpt-border" to="/settings">
                Settings
              </Link>

              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-red-50 text-red-500"
              >
                Sign Out
              </button>
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
            focus:outline-none focus:ring-2 focus:ring-cyan-500
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
