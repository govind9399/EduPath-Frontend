 import { useState } from 'react';
import { Lock, User } from 'lucide-react';

// Mock admin accounts for demo
const MOCK_ADMINS = {
  'super@edupath.com': {
    password: 'super123',
    admin: {
      id: '1',
      name: 'Sarah Johnson',
      email: 'super@edupath.com',
      role: 'super_admin',
    },
  },
  'content@edupath.com': {
    password: 'content123',
    admin: {
      id: '2',
      name: 'Mike Chen',
      email: 'content@edupath.com',
      role: 'content_admin',
    },
  },
  'support@edupath.com': {
    password: 'support123',
    admin: {
      id: '3',
      name: 'Lisa Rodriguez',
      email: 'support@edupath.com',
      role: 'support_admin',
    },
  },
};

export const AdminLogin=({ onLogin })=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const adminAccount = MOCK_ADMINS[email];

    if (!adminAccount || adminAccount.password !== password) {
      setError('Invalid email or password');
      return;
    }

    onLogin(adminAccount.admin);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-indigo-600 mb-2">EduPath Admin</h1>
          <p className="text-gray-600">Sign in to access the dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="admin@edupath.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-3">Demo Accounts:</p>
          <div className="space-y-2 text-xs text-gray-500">
            <div className="bg-gray-50 p-2 rounded">
              <div>Super Admin: super@edupath.com / super123</div>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <div>Content Admin: content@edupath.com / content123</div>
            </div>
            <div className="bg-gray-50 p-2 rounded">
              <div>Support Admin: support@edupath.com / support123</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
