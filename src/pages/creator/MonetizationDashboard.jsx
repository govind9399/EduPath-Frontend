
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MonetizationDashboard() {
  return (
    <div className="w-full min-h-screen bg-white text-[#111] font-sans flex flex-col">
      {/* Top Nav */}
      <header className="w-full flex items-center justify-between px-6 py-4 border-b bg-white">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-[#0038FF] flex items-center justify-center text-white font-bold">
            ES
          </div>
          <span className="font-semibold text-lg">EduStream</span>
        </div>
        <div className="flex-1 flex justify-center">
          <input
            placeholder="Search courses, videos, creators..."
            className="w-[50%] border rounded-lg px-4 py-2 text-sm"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Button className="bg-[#0038FF] text-white">Upload</Button>
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">U</div>
        </div>
      </header>

      <div className="flex w-full">
        {/* Sidebar */}
        <aside className="w-60 min-h-screen border-r p-4 bg-white">
          <h2 className="font-semibold mb-6">Tech Academy<br/><span className="text-sm text-gray-500">Creator Studio</span></h2>
          <ul className="space-y-4 text-[15px]">
            <li className="font-semibold text-blue-600">Dashboard</li>
            <li>Upload Video</li>
            <li>Course Management</li>
            <li>Channel Settings</li>
            <li>Comment Moderation</li>
            <li>Monetization</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          <h1 className="text-2xl font-bold">Monetization Dashboard</h1>
          <p className="text-gray-600 -mt-3">Monitor your earnings and revenue performance</p>

          {/* Monetization Active Box */}
          <Card className="border bg-[#E8F6EA] shadow-none">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-green-600 font-semibold">Monetization Active</p>
                  <p className="text-sm text-gray-600 mt-1">Your channel is eligible for monetization</p>
                </div>
                <span className="text-green-600 font-semibold">active</span>
              </div>
              <div className="flex space-x-20 mt-4 text-gray-700">
                <p>Subscribers<br/><span className="font-bold text-black">15,000</span></p>
                <p>Watch Hours (12 months)<br/><span className="font-bold text-black">45,000</span></p>
              </div>
            </CardContent>
          </Card>

          {/* Filters */}
          <div className="flex space-x-3">
            <Button variant="outline">Today</Button>
            <Button variant="outline">Week</Button>
            <Button className="bg-[#0038FF] text-white">Month</Button>
            <Button variant="outline">All</Button>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-4 gap-4">
            <Card><CardContent className="p-4"><p className="text-sm text-gray-600">Total Earnings</p><h2 className="text-2xl font-bold mt-1">$12,450.75</h2><p className="text-green-600 text-xs mt-1">↑ 12.5% from last month</p></CardContent></Card>
            <Card><CardContent className="p-4"><p className="text-sm text-gray-600">This Month</p><h2 className="text-2xl font-bold mt-1">$3,250.50</h2><p className="text-green-600 text-xs mt-1">↑ 8.3% from last month</p></CardContent></Card>
            <Card><CardContent className="p-4"><p className="text-sm text-gray-600">RPM</p><h2 className="text-2xl font-bold mt-1">$4.25</h2><p className="text-xs text-gray-500">Revenue per 1K views</p></CardContent></Card>
            <Card><CardContent className="p-4"><p className="text-sm text-gray-600">CPM</p><h2 className="text-2xl font-bold mt-1">$8.50</h2><p className="text-xs text-gray-500">Cost per 1K impressions</p></CardContent></Card>
          </div>

          {/* Earnings Trend + Revenue Breakdown */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="col-span-2 h-64"><CardContent className="p-4 text-gray-500">Earnings Trend<br/><span className="text-sm">Your earnings and impressions over time</span></CardContent></Card>
            <Card>
              <CardContent className="p-4">
                <p className="font-semibold">Revenue Breakdown</p>
                <p className="text-sm text-gray-500 mb-4">Income sources this month</p>
                <div className="space-y-2 text-[15px]">
                  <p className="flex justify-between"><span>🔵 Ad Breaks</span><span>$8,750.25</span></p>
                  <p className="flex justify-between"><span>🟡 Sponsorships</span><span>$3,700.50</span></p>
                </div>
                <p className="flex justify-between font-semibold mt-4 text-black"><span>Total This Month</span><span>$3,250.50</span></p>
              </CardContent>
            </Card>
          </div>

          {/* Performance Metrics */}
          <Card>
            <CardContent className="p-6 grid grid-cols-3 text-center">
              <div>
                <p className="text-sm text-gray-600">Total Impressions</p>
                <h2 className="text-xl font-bold">1.3M</h2>
              </div>
              <div>
                <p className="text-sm text-gray-600">This Month Impressions</p>
                <h2 className="text-xl font-bold">385.0K</h2>
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg. RPM</p>
                <h2 className="text-xl font-bold">$4.25</h2>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Buttons */}
          <div className="flex space-x-4 mt-6">
            <Button variant="outline">View Detailed Report</Button>
            <Button variant="outline">Manage Settings</Button>
            <Button variant="outline">Back to Dashboard</Button>
            <Button className="bg-[#0038FF] text-white">Upload New Video</Button>
          </div>
        </main>
      </div>
    </div>
  );

}
