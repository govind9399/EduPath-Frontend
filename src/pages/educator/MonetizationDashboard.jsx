import React from "react";
import { Navbar } from "../../componets/creator/navbar";
import { Sidebar } from "../../componets/creator/sidebar";
import { NavLink } from "react-router-dom";

export const MonetizationDashboard = () => {
  return (
    <div className="
      font-gpt w-full min-h-screen flex flex-col
      bg-white text-gray-900
      dark:bg-gpt-bg dark:text-gpt-text transition-colors duration-300
    ">
      {/* NAVBAR */}
      <Navbar />

      {/* LAYOUT */}
      <div className="flex w-full">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="flex-1 md:ml-64 p-4 sm:p-6 space-y-6 pt-24">

          {/* TITLE */}
          <h1 className="text-xl sm:text-2xl font-bold dark:text-gpt-text">
            Monetization Dashboard
          </h1>
          <p className="text-sm text-gray-600 dark:text-gpt-muted -mt-1">
            Monitor your earnings and revenue performance
          </p>

          {/* STATUS BOX */}
          <div className="
            rounded-lg p-4 sm:p-6 border
            bg-green-50 border-green-200
            dark:bg-gpt-surface dark:border-gpt-border
          ">
            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <div>
                <p className="text-green-600 font-semibold dark:text-gpt-accent">
                  Monetization Active
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gpt-muted mt-1">
                  Your channel is eligible for monetization
                </p>
              </div>
              <span className="text-green-700 dark:text-gpt-accent font-semibold">
                active
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-16 mt-4 gap-4 sm:gap-0">
              <p className="text-sm dark:text-gpt-muted">
                Subscribers <br />
                <span className="text-lg font-bold dark:text-gpt-text">
                  15,000
                </span>
              </p>
              <p className="text-sm dark:text-gpt-muted">
                Watch Hours (12 months) <br />
                <span className="text-lg font-bold dark:text-gpt-text">
                  45,000
                </span>
              </p>
            </div>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-2">
            <button className="
              border rounded-md px-4 py-2 text-sm
              dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text dark:hover:bg-gpt-border
            ">
              Today
            </button>
            <button className="
              border rounded-md px-4 py-2 text-sm
              dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text dark:hover:bg-gpt-border
            ">
              Week
            </button>
            <button className="
              bg-cyan-600 text-white rounded-md px-4 py-2 text-sm
            ">
              Month
            </button>
            <button className="
              border rounded-md px-4 py-2 text-sm
              dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text dark:hover:bg-gpt-border
            ">
              All
            </button>
          </div>

          {/* METRICS ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Total Earnings", value: "$12,450.75", delta: "↑ 12.5% from last month" },
              { title: "This Month", value: "$3,250.50", delta: "↑ 8.3% from last month" },
              { title: "RPM", value: "$4.25", note: "Revenue per 1K views" },
              { title: "CPM", value: "$8.50", note: "Cost per 1K impressions" }
            ].map((box, i) => (
              <div key={i} className="
                border rounded-lg p-4 shadow-sm
                bg-white border-gray-200
                dark:bg-gpt-surface dark:border-gpt-border
              ">
                <p className="text-sm text-gray-600 dark:text-gpt-muted">{box.title}</p>
                <h2 className="text-xl sm:text-2xl font-bold mt-1 dark:text-gpt-text">{box.value}</h2>
                {box.delta && (
                  <p className="text-green-600 text-xs mt-1">{box.delta}</p>
                )}
                {box.note && (
                  <p className="text-xs text-gray-500 dark:text-gpt-muted mt-1">{box.note}</p>
                )}
              </div>
            ))}
          </div>

          {/* CHART + BREAKDOWN */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="
              h-48 sm:h-64 lg:col-span-2 rounded-lg p-4 shadow-sm border
              bg-white border-gray-200 text-gray-500 text-sm
              dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-muted
            ">
              Earnings Trend
              <br />
              <span className="text-xs">Your earnings and impressions over time</span>
            </div>

            <div className="
              border rounded-lg p-4 shadow-sm
              bg-white border-gray-200
              dark:bg-gpt-surface dark:border-gpt-border
            ">
              <p className="font-semibold text-sm dark:text-gpt-text">
                Revenue Breakdown
              </p>
              <p className="text-xs text-gray-600 dark:text-gpt-muted mb-4">
                Income sources this month
              </p>

              <div className="space-y-2 text-sm">
                <p className="flex justify-between dark:text-gpt-text">
                  🔵 Ad Breaks <span>$8,750.25</span>
                </p>
                <p className="flex justify-between dark:text-gpt-text">
                  🟡 Sponsorships <span>$3,700.50</span>
                </p>
              </div>

              <p className="flex justify-between font-semibold mt-4 dark:text-gpt-text">
                Total This Month <span>$3,250.50</span>
              </p>
            </div>
          </div>

          {/* PERFORMANCE ROW */}
          <div className="
            grid grid-cols-1 sm:grid-cols-3 text-center rounded-lg p-4 shadow-sm border
            bg-white border-gray-200
            dark:bg-gpt-surface dark:border-gpt-border
          ">
            {[
              { label: "Total Impressions", value: "1.3M" },
              { label: "This Month Impressions", value: "385.0K" },
              { label: "Avg. RPM", value: "$4.25" }
            ].map((x, i) => (
              <div key={i}>
                <p className="text-xs text-gray-600 dark:text-gpt-muted">{x.label}</p>
                <h2 className="text-xl font-bold dark:text-gpt-text">{x.value}</h2>
              </div>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button className="
              border px-4 py-2 rounded-md text-sm bg-white
              dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text dark:hover:bg-gpt-border
            ">
              View Detailed Report
            </button>

            <NavLink to="/channel-setting" className="
              border px-4 py-2 rounded-md text-sm bg-white
              dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text dark:hover:bg-gpt-border
            ">
              Manage Settings
            </NavLink>

            <NavLink to="/creator-dashboard" className="
              border px-4 py-2 rounded-md text-sm bg-white
              dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text dark:hover:bg-gpt-border
            ">
              Back to Dashboard
            </NavLink>

            <button className="
              bg-cyan-600 text-white px-4 py-2 rounded-md text-sm hover:bg-cyan-700
            ">
              Upload New Video
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
