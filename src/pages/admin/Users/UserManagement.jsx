import { useEffect, useState } from 'react';
import { Search, UserCheck, UserX, Shield, Eye, Ban, CheckCircle } from 'lucide-react';
import React from "react";
import axios from 'axios';

const MOCK_USERS = [
  {
    id: '1',
    name: 'Alex Thompson',
    email: 'alex.t@email.com',
    type: 'creator',
    status: 'active',
    joinDate: '2024-01-15',
    videoCount: 145,
    subscribers: 45000,
    violations: 0,
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria.g@email.com',
    type: 'creator',
    status: 'active',
    joinDate: '2024-02-20',
    videoCount: 89,
    subscribers: 28000,
    violations: 1,
  },
  {
    id: '3',
    name: 'James Wilson',
    email: 'james.w@email.com',
    type: 'student',
    status: 'active',
    joinDate: '2024-03-10',
    violations: 0,
  },
  {
    id: '4',
    name: 'Emily Chen',
    email: 'emily.c@email.com',
    type: 'creator',
    status: 'banned',
    joinDate: '2023-11-05',
    videoCount: 23,
    subscribers: 5600,
    violations: 3,
  },
  {
    id: '5',
    name: 'David Martinez',
    email: 'david.m@email.com',
    type: 'student',
    status: 'active',
    joinDate: '2024-05-22',
    violations: 0,
  },
  {
    id: '6',
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    type: 'creator',
    status: 'active',
    joinDate: '2023-09-18',
    videoCount: 234,
    subscribers: 125000,
    violations: 0,
  },
];

export function UserManagement({ adminRole }) {
  const [users, setUsers] = useState(MOCK_USERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null);
  const [totalusers, setTotalusers] = useState(null);
 
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || user.type === filterType;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });
  
  useEffect(()=>{
        const fetchUsers= async()=>{
           try{
              const res= await axios.get("http://localhost:3000/admin/management");
              console.log("users data",res.data.users);
              console.log("total users",res.data.totalUsers);
              setTotalusers(res.data.totalUsers);

           }catch(error){
            console.error("Failed to fetch users",error)
           }
        }

        fetchUsers();
  },[])
  const handleBanUser = (userId, ban) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: ban ? 'banned' : 'active' } : user
    ));
    setSelectedUser(null);
  };

  const handleMakeCreator = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, type: 'creator', videoCount: 0, subscribers: 0 } : user
    ));
    setSelectedUser(null);
  };

  const canPerformActions = adminRole === 'super_admin' || adminRole === 'content_admin' ||adminRole==='admin';

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <UserCheck className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Users</p>
              <p className="text-gray-900">1,234,567</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-lg">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Active Creators</p>
              <p className="text-gray-900">38,456</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="bg-red-100 p-3 rounded-lg">
              <UserX className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Banned Users</p>
              <p className="text-gray-900">1,234</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Under Review</p>
              <p className="text-gray-900">89</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Types</option>
            <option value="student">Students</option>
            <option value="creator">Creators</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="banned">Banned</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700 text-sm">User</th>
                <th className="px-6 py-3 text-left text-gray-700 text-sm">Type</th>
                <th className="px-6 py-3 text-left text-gray-700 text-sm">Status</th>
                <th className="px-6 py-3 text-left text-gray-700 text-sm">Join Date</th>
                <th className="px-6 py-3 text-left text-gray-700 text-sm">Stats</th>
                <th className="px-6 py-3 text-left text-gray-700 text-sm">Violations</th>
                <th className="px-6 py-3 text-left text-gray-700 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-gray-900">{user.name}</p>
                      <p className="text-gray-500 text-sm">{user.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      user.type === 'creator' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {user.type === 'creator' ? 'Creator' : 'Student'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      user.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {user.status === 'active' ? 'Active' : 'Banned'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">
                    {user.type === 'creator' ? (
                      <div>
                        <div>{user.videoCount} videos</div>
                        <div className="text-xs text-gray-500">{user.subscribers?.toLocaleString()} subs</div>
                      </div>
                    ) : (
                      <span className="text-gray-400">N/A</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      user.violations === 0 
                        ? 'bg-gray-100 text-gray-700' 
                        : user.violations >= 3
                          ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {user.violations}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedUser(user)}
                      className="text-indigo-600 hover:text-indigo-800 text-sm"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Detail Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h3 className="text-gray-900 mb-4">User Details</h3>
            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 text-sm">Name</p>
                  <p className="text-gray-900">{selectedUser.name}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-gray-900">{selectedUser.email}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Type</p>
                  <p className="text-gray-900">{selectedUser.type === 'creator' ? 'Creator' : 'Student'}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Status</p>
                  <p className="text-gray-900">{selectedUser.status === 'active' ? 'Active' : 'Banned'}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Join Date</p>
                  <p className="text-gray-900">{new Date(selectedUser.joinDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Violations</p>
                  <p className="text-gray-900">{selectedUser.violations}</p>
                </div>
                {selectedUser.type === 'creator' && (
                  <>
                    <div>
                      <p className="text-gray-500 text-sm">Videos</p>
                      <p className="text-gray-900">{selectedUser.videoCount}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Subscribers</p>
                      <p className="text-gray-900">{selectedUser.subscribers?.toLocaleString()}</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {canPerformActions && (
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                {selectedUser.status === 'active' ? (
                  <button
                    onClick={() => handleBanUser(selectedUser.id, true)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    <Ban className="w-4 h-4" />
                    Ban User
                  </button>
                ) : (
                  <button
                    onClick={() => handleBanUser(selectedUser.id, false)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Unban User
                  </button>
                )}
                
                {selectedUser.type === 'student' && (
                  <button
                    onClick={() => handleMakeCreator(selectedUser.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    <Shield className="w-4 h-4" />
                    Make Creator
                  </button>
                )}

                <button
                  onClick={() => setSelectedUser(null)}
                  className="ml-auto px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            )}
            {!canPerformActions && (
              <div className="flex justify-end pt-4 border-t border-gray-200">
                <button
                  onClick={() => setSelectedUser(null)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
