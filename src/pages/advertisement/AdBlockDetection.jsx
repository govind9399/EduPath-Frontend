import React from "react";

export default function AdBlockerPage() {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-[#1a1a1a]">
      {/* HEADER */}

      {/* ALERT */}
      <div className="w-[80%] mx-auto mt-10 p-4 border border-red-300 bg-red-50 rounded-lg text-red-700 text-sm flex items-start gap-3">
        <span>⚠️</span>
        <div>
          <p className="font-semibold">Ad Blocker Detected</p>
          <p className="mt-1 text-[13px]">
            We've detected that you're using an ad blocker. EduStream is completely free because of ads, and they directly
            support creators.
          </p>
        </div>
      </div>

      {/* TAB BUTTONS */}
      <div className="w-[80%] mx-auto mt-6 flex gap-2">
        <button className="flex-1 py-2 border rounded-lg bg-[#f7f7f7] text-sm">Why Ads Matter</button>
        <button className="flex-1 py-2 border rounded-lg text-sm">Support Options</button>
      </div>

      <div className="w-[80%] mx-auto mt-8 grid grid-cols-3 gap-6">
        {/* LEFT CONTENT */}
        <div className="col-span-2 border rounded-xl p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">📈 How EduStream Works</h3>
          <p className="text-sm mb-4 text-gray-600">Understanding our free education model</p>

          <div className="space-y-5 text-sm">
            <div>
              <p className="font-semibold flex items-center gap-2">🎓 Free for Everyone</p>
              <p className="text-gray-600 mt-1">
                We believe education should be accessible to all. That's why EduStream is completely free.
              </p>
            </div>

            <div>
              <p className="font-semibold flex items-center gap-2">💲 Creator Revenue</p>
              <p className="text-gray-600 mt-1">
                Creators earn 55% of ad revenue from their videos. Ads directly fund quality educational content.
              </p>
            </div>

            <div>
              <p className="font-semibold flex items-center gap-2">🌱 Sustainable Model</p>
              <p className="text-gray-600 mt-1">
                Ad revenue ensures creators can continue producing high-quality educational content without paywalls.
              </p>
            </div>

            <div>
              <p className="font-semibold flex items-center gap-2">⚡ Smart Ad Placement</p>
              <p className="text-gray-600 mt-1">
                We carefully place ads to minimize disruption. Pre-roll, mid-roll, and display ads are strategically timed.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          <div className="border rounded-xl p-5 bg-white">
            <h3 className="text-sm font-semibold mb-4">Quick Actions</h3>
            <button className="w-full py-2 bg-blue-600 text-white text-sm rounded-lg">🔄 Refresh Page</button>
            <button className="w-full py-2 mt-2 border rounded-lg text-sm">← Back to Video</button>
          </div>

          <div className="border rounded-xl p-5 bg-white">
            <h3 className="text-sm font-semibold mb-3">Need Help?</h3>
            <p className="text-xs text-gray-600 mb-3">
              Having trouble disabling your ad blocker? Check our help center for detailed guides.
            </p>
            <button className="w-full py-2 border rounded-lg text-sm">❓ Visit Help Center</button>
          </div>
        </div>
      </div>


      {/* FOOTER */}
 
    </div>
  );
}
