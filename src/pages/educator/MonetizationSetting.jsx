import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../../componets/creator/navbar";
import { Sidebar } from "../../componets/creator/sidebar";

export const MonetizationSetting = () => {
  return (
    <div className="
      font-gpt min-h-screen flex flex-col
      bg-white text-gray-800
      dark:bg-gpt-bg dark:text-gpt-text transition-colors duration-300
    ">
      {/* NAVBAR */}
      <Navbar />

      <div className="flex w-full">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN WRAPPER */}
        <div className="flex-1">
          <main className="
            w-full max-w-[1200px] mx-auto px-4 sm:px-6
            pt-24 md:pt-10 pb-10 md:ml-64 space-y-6
          ">

            {/* ELIGIBILITY */}
            <section className="
              rounded-2xl p-6 shadow border
              bg-white border-gray-200
              dark:bg-gpt-surface dark:border-gpt-border
            ">
              <div className="flex flex-col sm:flex-row justify-between mb-4 gap-3">
                <h2 className="font-semibold text-base sm:text-lg dark:text-gpt-text">
                  Monetization Eligibility
                </h2>
                <span className="text-xs sm:text-sm bg-green-100 text-green-800 px-3 py-1 rounded">
                  Eligible
                </span>
              </div>

              <div className="space-y-4">
                <ProgressRow
                  label="Subscribers"
                  valueLabel="5,420 / 1,000 subscribers"
                  percent={100}
                />
                <ProgressRow
                  label="Watch Time (Last 12 months)"
                  valueLabel="12,850 / 4,000 hours"
                  percent={100}
                />
                <ProgressRow
                  label="Community Guidelines Compliance"
                  valueLabel="100 / 100 %"
                  percent={100}
                />

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gpt-muted mt-2">
                  ✓ Your channel meets all monetization requirements.
                </p>
              </div>
            </section>

            {/* OVERVIEW GRID */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              <Card title="Revenue Sharing Model">
                <div className="
                  rounded p-4
                  bg-gray-50 dark:bg-gpt-bg border dark:border-gpt-border
                ">
                  <Row label="Creator Share" value="70%" />
                  <Row label="Platform Share" value="30%" />
                  <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gpt-muted mt-3">
                    You earn 55% of ad revenue. Payments are monthly.
                  </p>
                </div>
              </Card>

              <Card title="Monetization Status">
                <div className="
                  bg-green-50 rounded p-4
                  dark:bg-gpt-surface border dark:border-gpt-border
                ">
                  <p className="text-sm font-medium text-green-700 dark:text-gpt-accent">
                    ✓ Monetization Enabled
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gpt-muted mt-1">
                    Requirements completed
                  </p>
                </div>
              </Card>

              <Card title="Minimum Payout Threshold">
                <div className="
                  bg-gray-50 rounded p-4
                  dark:bg-gpt-surface border dark:border-gpt-border
                ">
                  <p className="text-sm dark:text-gpt-text">
                    Payout starts at <span className="font-semibold">₹100</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gpt-muted mt-2">
                    Payments every 15th of the month.
                  </p>
                </div>
              </Card>

              <Card title="Monetization Policies & Agreements">
                <div className="space-y-3">
                  <PolicyRow title="Content Monetization Policy" />
                  <PolicyRow title="Ad-Friendly Content" />
                  <PolicyRow title="Revenue Sharing Agreement" />
                  <PolicyRow title="Fraud Prevention" />
                  <PolicyRow title="Data Privacy & Tax Compliance" />
                </div>

                <div className="
                  mt-4 text-xs bg-green-50 p-3 rounded text-green-700
                  dark:bg-gpt-surface dark:text-gpt-accent dark:border dark:border-gpt-border
                ">
                  ✓ All policies accepted
                </div>
              </Card>
            </section>

            {/* TABS */}
            <section>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Tab label="Overview" active />
                <Tab label="Ad Placement" />
                <Tab label="Payment" />
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

/* UTIL COMPONENTS */
function Card({ title, children }) {
  return (
    <div className="
      rounded-2xl p-5 sm:p-6 shadow border
      bg-white border-gray-200
      dark:bg-gpt-surface dark:border-gpt-border
    ">
      <h3 className="font-semibold mb-3 text-sm sm:text-base dark:text-gpt-text">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between text-xs sm:text-sm dark:text-gpt-text">
      <span>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function ProgressRow({ label, valueLabel, percent }) {
  return (
    <div>
      <div className="flex justify-between text-xs sm:text-sm text-gray-600 dark:text-gpt-muted mb-2">
        <span>{label}</span>
        <span>{valueLabel}</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gpt-border rounded-full">
        <div
          className="h-full rounded-full bg-cyan-600"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

function PolicyRow({ title }) {
  return (
    <div className="flex items-start gap-3 dark:text-gpt-text">
      <div className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xs">
        ✓
      </div>
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-[11px] text-gray-500 dark:text-gpt-muted">Required</p>
      </div>
    </div>
  );
}

function Tab({ label, active }) {
  return (
    <button
      className={`
        px-4 py-2 border rounded-lg text-sm
        bg-white border-gray-300 hover:bg-gray-50
        dark:bg-gpt-surface dark:border-gpt-border dark:text-gpt-text dark:hover:bg-gpt-border
        ${active && "bg-cyan-600 text-white dark:text-white"}
      `}
    >
      {label}
    </button>
  );
}
