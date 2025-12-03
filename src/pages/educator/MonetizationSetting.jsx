 import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../../componets/creator/navbar";
import { Sidebar } from "../../componets/creator/sidebar";

// EduPath Monetization Settings - single-file React component (Tailwind CSS)

export const MonetizationSetting = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* TOP NAVBAR */}
      <Navbar />

      <div className="flex w-full">
        {/* SIDEBAR – hidden on mobile, shown from md+ */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* MAIN WRAPPER */}
        <div className="flex-1">
          <main className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-24 md:pt-10 pb-10 md:ml-64 space-y-6">
            {/* Eligibility Card */}
            <section className="bg-white rounded-2xl p-6 shadow mb-2 sm:mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                <h2 className="font-semibold text-base sm:text-lg">
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

                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  ✓ Your channel meets all monetization requirements. You can
                  earn revenue from ads on your videos.
                </p>
              </div>
            </section>

            {/* Overview grid */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card title="Revenue Sharing Model">
                <div className="bg-gray-50 rounded p-4">
                  <div className="flex justify-between text-xs sm:text-sm mb-2">
                    <div>Creator Share</div>
                    <div className="font-semibold">55%</div>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <div>Platform Share</div>
                    <div className="font-semibold">45%</div>
                  </div>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-3">
                    You earn 55% of all ad revenue generated from your content.
                    Payments are processed monthly.
                  </p>
                </div>
              </Card>

              <Card title="Monetization Status">
                <div className="bg-green-50 rounded p-4">
                  <div className="text-sm font-medium text-green-800">
                    ✓ Your channel is eligible for monetization
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    You meet all requirements: 1000+ subscribers, 4000+ watch
                    hours
                  </div>
                </div>
              </Card>

              <Card title="Minimum Payout Threshold">
                <div className="bg-gray-50 rounded p-4">
                  <div className="text-sm">
                    Earnings must reach{" "}
                    <span className="font-semibold">₹100</span> before payout
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    Payments are processed on the 15th of each month for
                    earnings from the previous month.
                  </div>
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

                <div className="mt-4 bg-green-50 p-3 rounded text-green-800 text-xs sm:text-sm">
                  ✓ You have accepted all required policies. Your monetization
                  settings are compliant.
                </div>

                <div className="mt-4 text-[11px] sm:text-sm text-gray-500 space-y-1">
                  <div>• Policies are updated periodically. You'll be notified of any changes.</div>
                  <div>• Violations may result in demonetization or account suspension.</div>
                </div>
              </Card>
            </section>

            {/* Tabs for Ad Placement & Payment (visual only) */}
            <section className="mt-4 sm:mt-6">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button className="px-4 py-2 bg-white border rounded-lg text-sm">
                  Overview
                </button>
                <button className="px-4 py-2 bg-white border rounded-lg text-sm">
                  Ad Placement
                </button>
                <button className="px-4 py-2 bg-white border rounded-lg text-sm">
                  Payment
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow">
      <h3 className="font-semibold mb-3 text-sm sm:text-base">{title}</h3>
      {children}
    </div>
  );
}

function ProgressRow({ label, valueLabel, percent = 50 }) {
  const safePercent = Math.max(0, Math.min(100, percent));
  return (
    <div>
      <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2">
        <div>{label}</div>
        <div className="text-xs sm:text-sm">{valueLabel}</div>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-2 rounded-full"
          style={{ width: `${safePercent}%`, backgroundColor: "#0ea5a4" }}
        />
      </div>
    </div>
  );
}

function PolicyRow({ title }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
        ✓
      </div>
      <div>
        <div className="font-medium text-sm">{title}</div>
        <div className="text-[11px] sm:text-xs text-gray-500">Required</div>
      </div>
    </div>
  );
}
