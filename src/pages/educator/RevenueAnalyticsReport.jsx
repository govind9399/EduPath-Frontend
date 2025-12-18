import React, { useState } from "react";
import { Navbar } from "../../componets/creator/navbar";
import { Sidebar } from "../../componets/creator/sidebar";
import { IoMenu } from "react-icons/io5";

export const RevenueAnalyticsReport = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="
      font-gpt min-h-screen flex flex-col
      bg-white text-gray-800
      dark:bg-gpt-bg dark:text-gpt-text transition-colors duration-300
    "
    >
      {/* NAVBAR */}
      <Navbar />

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="
          md:hidden fixed top-20 left-4 z-50 p-2 rounded-lg
          bg-gray-900 text-white dark:bg-gpt-surface dark:text-gpt-text
        "
      >
        <IoMenu size={20} />
      </button>

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-16 left-0 h-full z-40 p-4 w-60
          bg-white border-r border-gray-200 shadow-sm
          dark:bg-gpt-surface dark:border-gpt-border
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <Sidebar />
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 px-4 sm:px-6 pt-24 md:pt-10 md:ml-64 pb-24 space-y-6">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold dark:text-gpt-text">
              Revenue Analytics
            </h1>
            <p className="text-sm text-gray-600 dark:text-gpt-muted">
              Detailed breakdown of your earnings and monetization performance
            </p>
          </div>

          <button
            className="
              border px-4 py-2 rounded-md text-sm
              bg-white hover:bg-gray-50
              dark:bg-gpt-surface dark:border-gpt-border dark:hover:bg-gpt-border
            "
          >
            ⬇ Export Report
          </button>
        </div>

        {/* FILTERS */}
        <div className="grid sm:grid-cols-2 gap-4 w-full sm:w-[70%]">
          <InputBox placeholder="Time Period" />
          <InputBox placeholder="Date Range" />
        </div>

        {/* OVERVIEW CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <Card title="Total Revenue" value="₹62,340" delta="↑ 5% from last month" big />
          <Card title="RPM (Revenue Per Mille)" value="₹115.20" />
          <Card title="CPM (Cost Per Mille)" value="₹41.50" />
          <Card title="Ad Impressions" value="5,40,800" big />
        </div>

        {/* TABS */}
        <div
          className="
            flex bg-gray-100 p-1 rounded-lg border text-sm dark:bg-gpt-surface dark:border-gpt-border
          "
        >
          {["Overview", "Breakdown", "Details"].map((t, i) => (
            <button
              key={t}
              className={`flex-1 py-2 rounded text-center ${
                i === 0
                  ? "bg-white shadow dark:bg-gpt-surface"
                  : "dark:text-gpt-muted"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* TREND CHART */}
        <section
          className="
            h-64 p-4 rounded-lg border shadow-sm text-gray-600 text-sm
            bg-white dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-muted
          "
        >
          Revenue Trend
          <p className="text-xs">Your earnings over the selected time period</p>
        </section>

        {/* BOTTOM GRID */}
        <div className="grid lg:grid-cols-2 gap-6">
          <InfoBox title="Revenue Sources" desc="Distribution by ad type" />
          <InfoBox title="Performance Metrics" desc="Key monetization indicators" />
        </div>
      </main>
    </div>
  );
};

/* Reusable components */
const InputBox = (props) => (
  <input
    {...props}
    className="
      px-4 py-2 rounded-lg text-sm border bg-white
      dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text
    "
  />
);

const Card = ({ title, value, delta, big }) => (
  <div
    className="
      rounded-lg p-4 border shadow-sm bg-white
      dark:bg-gpt-surface dark:border-gpt-border
    "
  >
    <p className="text-sm text-gray-500 dark:text-gpt-muted">{title}</p>

    <h2 className={`font-bold mt-1 ${big ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
      {value}
    </h2>

    {delta && <p className="text-green-600 text-xs mt-1">{delta}</p>}
  </div>
);

const InfoBox = ({ title, desc }) => (
  <div
    className="
    rounded-lg p-6 border shadow-sm bg-white
    dark:bg-gpt-surface dark:border-gpt-border
    "
  >
    <h3 className="font-semibold text-lg dark:text-gpt-text">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-gpt-muted -mt-1">{desc}</p>
  </div>
);
