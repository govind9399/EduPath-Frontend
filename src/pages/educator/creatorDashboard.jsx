import React, { useEffect, useState } from "react";
import { Navbar } from "../../componets/creator/navbar";
import { Sidebar } from "../../componets/creator/sidebar";
import { NavLink } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import axios from "axios";
export default function CreatorDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  useEffect(()=>{
      const fetchProfile= async()=>{
           try{
              const token = localStorage.getItem("token");
              const res= await axios.get("http://localhost:3000/api/auth/me",{headers:{Authorization:`Bearer ${token}`}})

              const fetchedPictureUrl= res.data.user?.pictureUrl;
              const fetchedUsername = res.data.user?.username;
              if(fetchedPictureUrl){
                 setProfilePic(`http://localhost:3000/${fetchedPictureUrl}`)
              }
              // const fetchedUsername= res.data.user?.username;
              if(fetchedUsername){
                 setUsername(fetchedUsername);
              }
           }catch(error){
            console.error("Failed to load profile picture", error)
           }
      };
      fetchProfile();
  },[])
  return (
    <div
      className="
      min-h-screen font-gpt
      bg-white text-gray-900
      dark:bg-gpt-bg dark:text-gpt-text transition-colors duration-300
    "
    >
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN LAYOUT */}
      <div className="flex w-full pt-16">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="flex-1 md:ml-64 px-4 sm:px-6 lg:px-8 pt-10 pb-12">
          {/* HEADER */}
          <h2 className="text-xl sm:text-2xl font-bold dark:text-gpt-text">
            Creator Dashboard
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gpt-muted mt-1">
            Manage your content, monitor performance, and grow your channel
          </p>

          {/* CHANNEL CARD */}
          <section
            className="
            mt-6 rounded-xl overflow-hidden border shadow-sm
            bg-white border-gray-200
            dark:bg-gpt-surface dark:border-gpt-border
          "
          >
            <div className="h-32 sm:h-40 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-80"></div>

            <div className="p-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div className="flex gap-4">
                   
                    <img src={profilePic} alt="picture" className="w-16 h-16 rounded-full " />
  
                  <div className="max-w-lg">
                    <h5 className="text-lg font-semibold dark:text-gpt-text">
                      Teaching web development, programming, and digital skills
                      to aspiring developers worldwide.
                    </h5>
                     <p>{username}</p>
                    <div className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gpt-muted flex flex-wrap gap-4">
                      <span>Subscribers</span>
                      <span>Total Videos</span>
                      <span>
                        Category{" "}
                        <strong className="dark:text-gpt-text">
                          Programming & Software Engineering
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>

                <NavLink
                  to="/channel-setting"
                  className="
                    px-4 py-2 rounded-md text-xs sm:text-sm
                    bg-white shadow-sm border border-gray-200 hover:bg-gray-100
                    dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border dark:text-gpt-text
                  "
                >
                  Edit Channel
                </NavLink>
              </div>

              <div
                className="
                mt-4 p-4 rounded-md border
                bg-cyan-50 border-cyan-200 text-cyan-800
                dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-accent
              "
              >
                Your channel is verified. You have access to all monetization
                features.
              </div>
            </div>
          </section>

          {/* QUICK ACTIONS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            <NavLink
              to="/upload"
              className="
                rounded-xl flex flex-col items-center justify-center p-6 shadow-sm border bg-white
                border-gray-200 hover:shadow-md
                dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border
              "
            >
              <MdOutlineFileUpload className="text-3xl text-cyan-600" />
              <span className="font-semibold text-sm sm:text-base mt-2 dark:text-gpt-text">
                Upload Video
              </span>
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gpt-muted text-center">
                Add new educational content
              </p>
            </NavLink>

            <NavLink to="/videos">
              <div
                className=" flex flex-col justify-center items-center
              rounded-xl p-6 shadow-sm border bg-white
              border-gray-200 hover:shadow-md
              dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border ">
 
                  <BiSolidVideos className="text-3xl text-cyan-600" />
                <span className="font-medium dark:text-gpt-text  ">
                  Videos
                </span>
                {/* </div> */}
                <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gpt-muted">
                  Organize videos into courses
                </p>
              </div>
            </NavLink>

            <NavLink
              to="/channel-setting"
              className=" flex flex-col justify-center items-center
                rounded-xl p-6 shadow-sm border bg-white
                border-gray-200 hover:shadow-md
                dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border
              "
            ><IoSettingsOutline className="text-2xl text-cyan-600" />
              <span className="font-medium dark:text-gpt-text">Channel Settings</span>
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gpt-muted">
                Customize your channel
              </p>
            </NavLink>

            <NavLink
              to="/monetization-dashboard"
              className=" flex flex-col justify-center items-center
                rounded-xl p-6 shadow-sm border bg-white
                border-gray-200 hover:shadow-md
                dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border
              "
            > <HiOutlineCurrencyRupee className="text-2xl text-cyan-600" />
              <span className="font-medium dark:text-gpt-text">
                Monetization
              </span>
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gpt-muted">
                {/* Review and manage comments */}
              </p>
            </NavLink>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <StatCard
              title="Total Views (28 days)"
              value="550,452"
              delta="12% from last month"
            />
            <StatCard
              title="Estimated Revenue"
              value="₹15,450"
              delta="8% from last month"
            />
            <StatCard
              title="Watch Hours"
              value="12,500 hrs"
              delta="5% from last month"
            />
            <StatCard
              title="New Subscribers"
              value="+3,100"
              delta="15% from last month"
            />
          </div>

          {/* FOOTER */}
          <footer className="mt-12 text-center text-xs text-gray-600 dark:text-gpt-muted">
            Free education for everyone • Privacy • Terms • Help
          </footer>
        </main>
      </div>
    </div>
  );
}

function StatCard({ title, value, delta }) {
  return (
    <div
      className="
      bg-white rounded-xl p-4 shadow-sm border border-gray-200
      dark:bg-gpt-surface dark:border-gpt-border
    "
    >
      <p className="text-sm text-gray-600 dark:text-gpt-muted">{title}</p>
      <div className="mt-3 flex justify-between">
        <p className="text-xl font-semibold dark:text-gpt-text">{value}</p>
        <p className="text-sm text-green-600">{delta}</p>
      </div>
    </div>
  );
}
