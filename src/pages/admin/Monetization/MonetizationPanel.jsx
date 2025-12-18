  import { DollarSign, TrendingUp, Users, Eye } from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import React from 'react';
const REVENUE_DATA = [
  { date: 'Nov 1', revenue: 15000, impressions: 2500000 },
  { date: 'Nov 5', revenue: 16500, impressions: 2650000 },
  { date: 'Nov 10', revenue: 18200, impressions: 2800000 },
  { date: 'Nov 15', revenue: 19800, impressions: 2950000 },
  { date: 'Nov 20', revenue: 21500, impressions: 3100000 },
  { date: 'Nov 25', revenue: 23100, impressions: 3250000 },
  { date: 'Nov 30', revenue: 25400, impressions: 3400000 },
];

const RPM_CPM_DATA = [
  { month: 'Jul', rpm: 4.2, cpm: 7.8 },
  { month: 'Aug', rpm: 4.5, cpm: 8.1 },
  { month: 'Sep', rpm: 4.8, cpm: 8.5 },
  { month: 'Oct', rpm: 5.1, cpm: 8.9 },
  { month: 'Nov', rpm: 5.4, cpm: 9.2 },
  { month: 'Dec', rpm: 5.7, cpm: 9.5 },
];

const PAYOUT_HISTORY = [
  { id: '1', creator: 'Alex Thompson', amount: 12500, date: '2024-11-01', status: 'completed' },
  { id: '2', creator: 'Maria Garcia', amount: 8900, date: '2024-11-01', status: 'completed' },
  { id: '3', creator: 'Sarah Johnson', amount: 15600, date: '2024-11-01', status: 'completed' },
  { id: '4', creator: 'James Wilson', amount: 5200, date: '2024-11-01', status: 'completed' },
  { id: '5', creator: 'Emily Chen', amount: 7800, date: '2024-11-01', status: 'pending' },
  { id: '6', creator: 'David Martinez', amount: 4300, date: '2024-11-01', status: 'pending' },
];

const TOP_EARNERS = [
  { rank: 1, creator: 'Sarah Johnson', revenue: 45600, videos: 234, subscribers: 125000 },
  { rank: 2, creator: 'Alex Thompson', revenue: 38900, videos: 145, subscribers: 89000 },
  { rank: 3, creator: 'Maria Garcia', revenue: 32400, videos: 89, subscribers: 67000 },
  { rank: 4, creator: 'David Lee', revenue: 28700, videos: 112, subscribers: 54000 },
  { rank: 5, creator: 'Jessica Brown', revenue: 25100, videos: 98, subscribers: 48000 },
];

export function MonetizationPanel({ adminRole }) {
  if (adminRole !== 'super_admin') {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <DollarSign className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-gray-900 mb-2">Access Restricted</h3>
        <p className="text-gray-600">
          Only Super Admins can access monetization data and controls.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Monthly Revenue</p>
              <p className="text-gray-900">$487,234</p>
              <p className="text-green-600 text-xs">+18.7% vs last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Average RPM</p>
              <p className="text-gray-900">$5.70</p>
              <p className="text-blue-600 text-xs">+5.6% vs last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Ad Impressions</p>
              <p className="text-gray-900">89.4M</p>
              <p className="text-purple-600 text-xs">+22.1% vs last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Creator Earnings</p>
              <p className="text-gray-900">$341,064</p>
              <p className="text-gray-500 text-xs">70% revenue share</p>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Distribution */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-900 mb-2">Revenue Distribution</h3>
        <p className="text-gray-600 text-sm mb-6">Platform vs Creator Share</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">Creator Share (70%)</span>
              <span className="text-gray-900">$341,064</span>
            </div>
            <div className="bg-gray-200 rounded-full h-3 mb-4">
              <div className="bg-indigo-600 h-3 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">Platform Share (30%)</span>
              <span className="text-gray-900">$146,170</span>
            </div>
            <div className="bg-gray-200 rounded-full h-3">
              <div className="bg-purple-600 h-3 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
            <p className="text-gray-900 mb-4">Monthly Summary</p>
            <div className="space-y-3">
              <SummaryRow label="Total Revenue" value="$487,234" />
              <SummaryRow label="Paid to Creators" value="$341,064" className="text-green-600" />
              <SummaryRow label="Platform Earnings" value="$146,170" className="text-indigo-600" />
              <SummaryRow label="Pending Payouts" value="$28,300" className="text-orange-600" border />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue & Impressions Trend */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-900 mb-4">Revenue & Impressions Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={REVENUE_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#6b7280" />
              <YAxis yAxisId="left" stroke="#6b7280" />
              <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="revenue" 
                stroke="#10b981" 
                fill="#d1fae5"
                strokeWidth={2}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="impressions" 
                stroke="#6366f1" 
                strokeWidth={2}
                dot={{ fill: '#6366f1', r: 3 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* RPM & CPM Trends */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-900 mb-4">RPM & CPM Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={RPM_CPM_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
              <Bar dataKey="rpm" fill="#8b5cf6" name="RPM ($)" />
              <Bar dataKey="cpm" fill="#ec4899" name="CPM ($)" />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex items-center justify-center gap-6 mt-4">
            <LegendItem color="bg-purple-500" label="RPM (Revenue per Mille)" />
            <LegendItem color="bg-pink-500" label="CPM (Cost per Mille)" />
          </div>
        </div>
      </div>

      {/* Top Earners */}
      <TableCard title="Top Earning Creators" data={TOP_EARNERS} keys={['rank','creator','revenue','videos','subscribers']} />

      {/* Payout History */}
      <TableCard title="Recent Payout History" data={PAYOUT_HISTORY} payout />
    </div>
  );
}

/* --- Helper Components (still JSX, no TS) --- */

function SummaryRow({ label, value, className, border }) {
  return (
    <div className={`flex justify-between ${border ? 'pt-3 border-t border-gray-200' : ''}`}>
      <span className="text-gray-600">{label}</span>
      <span className={className || 'text-gray-900'}>{value}</span>
    </div>
  );
}

function LegendItem({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded ${color}`}></div>
      <span className="text-gray-600 text-sm">{label}</span>
    </div>
  );
}

function TableCard({ title, data, payout }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-gray-900 mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {Object.keys(data[0]).map((key) => (
                key !== 'id' && <th key={key} className="px-6 py-3 text-left text-gray-700 text-sm capitalize">{key}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={row.id || row.rank} className="hover:bg-gray-50">
                {Object.entries(row).map(([key, val]) =>
                  key !== 'id' && (
                    <td key={key} className={`px-6 py-4 ${payout && key === 'amount' ? 'text-green-600' : 'text-gray-900'}`}>
                      {key === 'revenue' || key === 'amount'
                        ? `$${val.toLocaleString()}`
                        : key === 'subscribers'
                          ? val.toLocaleString()
                          : val}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
