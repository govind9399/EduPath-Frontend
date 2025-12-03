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
        <Card icon={DollarSign} bg="bg-green-100" text="Monthly Revenue" value="$487,234" change="+18.7%" />
        <Card icon={TrendingUp} bg="bg-blue-100" text="Average RPM" value="$5.70" change="+5.6%" />
        <Card icon={Eye} bg="bg-purple-100" text="Ad Impressions" value="89.4M" change="+22.1%" />
        <Card icon={Users} bg="bg-orange-100" text="Creator Earnings" value="$341,064" note="70% revenue share" />
      </div>

      {/* Revenue Distribution */}
      <RevenueDistribution />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart data={REVENUE_DATA} />
        <RPMChart data={RPM_CPM_DATA} />
      </div>

      {/* Top Earners */}
      <TopEarners earners={TOP_EARNERS} />

      {/* Payout History */}
      <PayoutHistory history={PAYOUT_HISTORY} />

      {/* Monetization Settings */}
      <SettingsPanel />

    </div>
  );
}

/* REUSABLE COMPONENTS */

function Card({ icon: Icon, bg, text, value, change, note }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-3">
        <div className={`${bg} p-3 rounded-lg`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">{text}</p>
          <p className="text-gray-900">{value}</p>
          {change && <p className="text-green-600 text-xs">{change} vs last month</p>}
          {note && <p className="text-gray-500 text-xs">{note}</p>}
        </div>
      </div>
    </div>
  );
}

function RevenueDistribution() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-gray-900 mb-2">Revenue Distribution</h3>
      <p className="text-gray-600 text-sm mb-6">Platform vs Creator Share</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bars */}
        <div>
          <BarRow label="Creator Share (70%)" value="$341,064" width="70%" bar="bg-indigo-600" />
          <BarRow label="Platform Share (30%)" value="$146,170" width="30%" bar="bg-purple-600" />
        </div>

        {/* Summary */}
        <Summary />
      </div>
    </div>
  );
}

function BarRow({ label, value, width, bar }) {
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-700">{label}</span>
        <span className="text-gray-900">{value}</span>
      </div>
      <div className="bg-gray-200 rounded-full h-3 mb-4">
        <div className={`${bar} h-3 rounded-full`} style={{ width }}></div>
      </div>
    </>
  );
}

function Summary() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 space-y-3">
      <SummaryRow label="Total Revenue" value="$487,234" />
      <SummaryRow label="Paid to Creators" value="$341,064" color="text-green-600" />
      <SummaryRow label="Platform Earnings" value="$146,170" color="text-indigo-600" />
      <SummaryRow label="Pending Payouts" value="$28,300" color="text-orange-600" border />
    </div>
  );
}

function SummaryRow({ label, value, color, border }) {
  return (
    <div className={`flex justify-between ${border ? 'pt-3 border-t border-gray-200' : ''}`}>
      <span className="text-gray-600">{label}</span>
      <span className={`${color || 'text-gray-900'}`}>{value}</span>
    </div>
  );
}

function RevenueChart({ data }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-gray-900 mb-4">Revenue & Impressions Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#6b7280" />
          <YAxis yAxisId="left" stroke="#6b7280" />
          <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
          <Tooltip />
          <Area yAxisId="left" dataKey="revenue" stroke="#10b981" fill="#d1fae5" strokeWidth={2} />
          <Line yAxisId="right" dataKey="impressions" stroke="#6366f1" strokeWidth={2} dot={{ r: 3 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function RPMChart({ data }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-gray-900 mb-4">RPM & CPM Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip />
          <Bar dataKey="rpm" fill="#8b5cf6" name="RPM ($)" />
          <Bar dataKey="cpm" fill="#ec4899" name="CPM ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function TopEarners({ earners }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-gray-900 mb-4">Top Earning Creators</h3>
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            <Th text="Rank" />
            <Th text="Creator" />
            <Th text="Revenue" />
            <Th text="Videos" />
            <Th text="Subscribers" />
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {earners.map(e => (
            <tr key={e.rank} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <span className="text-gray-900 flex items-center gap-2">
                  {e.rank === 1 && '🥇'}
                  {e.rank === 2 && '🥈'}
                  {e.rank === 3 && '🥉'}
                  #{e.rank}
                </span>
              </td>
              <td className="px-6 py-4">{e.creator}</td>
              <td className="px-6 py-4 text-green-600">${e.revenue.toLocaleString()}</td>
              <td className="px-6 py-4">{e.videos}</td>
              <td className="px-6 py-4">{e.subscribers.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PayoutHistory({ history }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-gray-900 mb-4">Recent Payout History</h3>
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            <Th text="Creator" />
            <Th text="Amount" />
            <Th text="Date" />
            <Th text="Status" />
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {history.map(p => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">{p.creator}</td>
              <td className="px-6 py-4">${p.amount.toLocaleString()}</td>
              <td className="px-6 py-4">{new Date(p.date).toLocaleDateString()}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded text-xs ${
                  p.status === 'completed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {p.status === 'completed' ? 'Completed' : 'Pending'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SettingsPanel() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-gray-900 mb-4">Monetization Settings</h3>

      <SettingRow label="Creator Revenue Share" unit="%" defaultValue={70} />
      <SettingRow label="Minimum Payout Threshold" unit="$" defaultValue={100} />

      <ToggleRow label="Monetization Status" defaultChecked />

      <div className="mt-6 pt-6 border-t">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}

function SettingRow({ label, unit, defaultValue }) {
  return (
    <div className="flex items-center justify-between py-3 border-b">
      <div>
        <p className="text-gray-900">{label}</p>
        <p className="text-gray-500 text-sm">Minimum requirement for eligibility</p>
      </div>
      <div className="flex items-center gap-3">
        {unit === '$' && <span className="text-gray-600">$</span>}
        <input 
          type="number" 
          defaultValue={defaultValue} 
          className="w-24 px-3 py-2 border rounded-lg text-center"
        />
        {unit === '%' && <span className="text-gray-600">%</span>}
      </div>
    </div>
  );
}

function ToggleRow({ label, defaultChecked }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <p className="text-gray-900">{label}</p>
        <p className="text-gray-500 text-sm">Enable or disable platform monetization</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:ring-indigo-300 rounded-full peer 
        peer-checked:after:translate-x-full after:absolute after:top-[2px] 
        after:left-[2px] after:h-5 after:w-5 after:bg-white after:rounded-full 
        after:transition-all peer-checked:bg-indigo-600"></div>
      </label>
    </div>
  );
}

function Th({ text }) {
  return <th className="px-6 py-3 text-left text-gray-700 text-sm">{text}</th>;
}
