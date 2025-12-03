 import { 
  Users, 
  Video, 
  Eye, 
  DollarSign, 
  UserCheck, 
  AlertTriangle,
  TrendingUp,
  Clock
} from 'lucide-react';
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
  PieChart,
  Pie,
  Cell
} from 'recharts';

const KPI_DATA = [
  { label: 'Total Users', value: '1,234,567', icon: Users, color: 'bg-blue-500', change: '+12.3%' },
  { label: 'Total Creators', value: '45,678', icon: UserCheck, color: 'bg-green-500', change: '+8.5%' },
  { label: 'Total Videos', value: '234,890', icon: Video, color: 'bg-purple-500', change: '+15.2%' },
  { label: 'Total Impressions', value: '89.4M', icon: Eye, color: 'bg-orange-500', change: '+22.1%' },
  { label: 'Monthly Revenue', value: '$487,234', icon: DollarSign, color: 'bg-emerald-500', change: '+18.7%' },
  { label: 'Active Creators', value: '38,456', icon: TrendingUp, color: 'bg-cyan-500', change: '+5.4%' },
  { label: 'Watch Hours', value: '12.8M', icon: Clock, color: 'bg-indigo-500', change: '+19.8%' },
  { label: 'Flagged Videos', value: '1,234', icon: AlertTriangle, color: 'bg-red-500', change: '-3.2%' },
];

const REVENUE_TREND_DATA = [
  { month: 'Jan', revenue: 320000 },
  { month: 'Feb', revenue: 345000 },
  { month: 'Mar', revenue: 380000 },
  { month: 'Apr', revenue: 410000 },
  { month: 'May', revenue: 445000 },
  { month: 'Jun', revenue: 487234 },
];

const USER_GROWTH_DATA = [
  { month: 'Jan', users: 980000, creators: 38000 },
  { month: 'Feb', users: 1050000, creators: 40000 },
  { month: 'Mar', users: 1120000, creators: 42000 },
  { month: 'Apr', users: 1165000, creators: 43500 },
  { month: 'May', users: 1200000, creators: 44800 },
  { month: 'Jun', users: 1234567, creators: 45678 },
];

const CONTENT_DISTRIBUTION = [
  { name: 'Programming', value: 35 },
  { name: 'Mathematics', value: 25 },
  { name: 'Science', value: 20 },
  { name: 'Business', value: 12 },
  { name: 'Others', value: 8 },
];

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

const RECENT_ACTIVITIES = [
  { id: 1, action: 'New creator registered', user: 'John Doe', time: '5 minutes ago' },
  { id: 2, action: 'Video flagged for review', user: 'System', time: '12 minutes ago' },
  { id: 3, action: 'Payout processed', user: 'Finance Bot', time: '1 hour ago' },
  { id: 4, action: 'User reported content', user: 'Alice Smith', time: '2 hours ago' },
  { id: 5, action: 'New admin added', user: 'Sarah Johnson', time: '3 hours ago' },
];

export const AdminDashboard=({ adminRole }) =>{
  const visibleKPIs = adminRole === 'support_admin' 
    ? KPI_DATA.filter(kpi => !['Monthly Revenue', 'Watch Hours'].includes(kpi.label))
    : KPI_DATA;

  return (
    <div className="space-y-6">
      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleKPIs.map((kpi) => {
          const Icon = kpi.icon;
          const isPositive = kpi.change.startsWith('+');
          return (
            <div key={kpi.label} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-1">{kpi.label}</p>
                  <p className="text-gray-900 mb-2">{kpi.value}</p>
                  <span className={`text-xs ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {kpi.change} vs last month
                  </span>
                </div>
                <div className={`${kpi.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        {adminRole === 'super_admin' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-900 mb-4">Revenue Trend (6 Months)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={REVENUE_TREND_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  formatter={(value) => `$${value.toLocaleString()}`}
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ fill: '#10b981', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* User Growth */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-900 mb-4">User Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={USER_GROWTH_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }} />
              <Bar dataKey="users" fill="#6366f1" />
              <Bar dataKey="creators" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-indigo-500 rounded"></div>
              <span className="text-gray-600 text-sm">Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded"></div>
              <span className="text-gray-600 text-sm">Creators</span>
            </div>
          </div>
        </div>

        {/* Content Distribution */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-900 mb-4">Content Distribution by Category</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={CONTENT_DISTRIBUTION}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {CONTENT_DISTRIBUTION.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {RECENT_ACTIVITIES.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-gray-900 text-sm">{activity.action}</p>
                  <p className="text-gray-500 text-xs mt-1">
                    {activity.user} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-900 mb-4">Platform Health</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-500 text-sm mb-2">Average Load Time</p>
            <p className="text-gray-900">247ms</p>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-green-600 text-xs mt-1">Excellent</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-2">Content Moderation Time</p>
            <p className="text-gray-900">18.5 hours</p>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p className="text-yellow-600 text-xs mt-1">Target: &lt; 24hrs</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-2">Payout Accuracy</p>
            <p className="text-gray-900">100%</p>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <p className="text-green-600 text-xs mt-1">On Target</p>
          </div>
        </div>
      </div>
    </div>
  );
}
