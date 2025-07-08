import React from 'react'
import { TrendingUp, Mail, Users, MousePointer, BarChart3 } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts'

const emailData = [
  { name: 'Jan', sent: 4000, opened: 2400, clicked: 400 },
  { name: 'Feb', sent: 3000, opened: 1398, clicked: 300 },
  { name: 'Mar', sent: 2000, opened: 1800, clicked: 200 },
  { name: 'Apr', sent: 2780, opened: 1908, clicked: 278 },
  { name: 'May', sent: 1890, opened: 1200, clicked: 189 },
  { name: 'Jun', sent: 2390, opened: 1430, clicked: 239 },
]

const deviceData = [
  { name: 'Desktop', value: 45, color: '#3b82f6' },
  { name: 'Mobile', value: 35, color: '#f59e0b' },
  { name: 'Tablet', value: 20, color: '#10b981' },
]

const engagementData = [
  { name: 'Week 1', engagement: 65 },
  { name: 'Week 2', engagement: 72 },
  { name: 'Week 3', engagement: 68 },
  { name: 'Week 4', engagement: 75 },
]

export function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
        <p className="text-gray-600">Track your marketing performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Emails Sent</p>
              <p className="text-2xl font-bold text-gray-900">24,567</p>
              <p className="text-sm text-green-600">+12% from last month</p>
            </div>
            <Mail className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Open Rate</p>
              <p className="text-2xl font-bold text-gray-900">23.4%</p>
              <p className="text-sm text-green-600">+2.1% from last month</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Click Rate</p>
              <p className="text-2xl font-bold text-gray-900">4.2%</p>
              <p className="text-sm text-red-600">-0.3% from last month</p>
            </div>
            <MousePointer className="w-8 h-8 text-amber-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Subscribers</p>
              <p className="text-2xl font-bold text-gray-900">12,345</p>
              <p className="text-sm text-green-600">+156 this month</p>
            </div>
            <Users className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={emailData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sent" stroke="#3b82f6" strokeWidth={2} name="Sent" />
              <Line type="monotone" dataKey="opened" stroke="#10b981" strokeWidth={2} name="Opened" />
              <Line type="monotone" dataKey="clicked" stroke="#f59e0b" strokeWidth={2} name="Clicked" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Usage</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={deviceData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {deviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="engagement" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
