import React from 'react'
import { 
  TrendingUp, 
  Users, 
  Mail, 
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Play,
  Pause,
  MoreVertical
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const statsData = [
  { name: 'Jan', emails: 2400, opens: 1800, clicks: 600 },
  { name: 'Feb', emails: 1398, opens: 1200, clicks: 400 },
  { name: 'Mar', emails: 9800, opens: 7200, clicks: 2100 },
  { name: 'Apr', emails: 3908, opens: 2800, clicks: 980 },
  { name: 'May', emails: 4800, opens: 3600, clicks: 1200 },
  { name: 'Jun', emails: 3800, opens: 2900, clicks: 950 },
]

const workflowData = [
  { name: 'Welcome Series', executions: 1240, success: 98.5 },
  { name: 'Abandoned Cart', executions: 890, success: 94.2 },
  { name: 'Re-engagement', executions: 650, success: 87.3 },
  { name: 'Product Launch', executions: 420, success: 96.1 },
]

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Workflows</p>
              <p className="text-3xl font-bold text-gray-900">24</p>
            </div>
            <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">12%</span>
            <span className="text-gray-500 ml-1">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Contacts</p>
              <p className="text-3xl font-bold text-gray-900">12,847</p>
            </div>
            <div className="h-12 w-12 bg-green-50 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">8.2%</span>
            <span className="text-gray-500 ml-1">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Emails Sent</p>
              <p className="text-3xl font-bold text-gray-900">89,432</p>
            </div>
            <div className="h-12 w-12 bg-purple-50 rounded-lg flex items-center justify-center">
              <Mail className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">23.1%</span>
            <span className="text-gray-500 ml-1">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-3xl font-bold text-gray-900">3.24%</p>
            </div>
            <div className="h-12 w-12 bg-amber-50 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-amber-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-red-600 font-medium">2.1%</span>
            <span className="text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={statsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="emails" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="opens" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="clicks" stroke="#f59e0b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Workflow Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={workflowData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="executions" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Active Workflows</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { name: 'Welcome Email Series', status: 'running', executions: '1,247', success: '98.5%' },
                { name: 'Abandoned Cart Recovery', status: 'running', executions: '892', success: '94.2%' },
                { name: 'Product Recommendation', status: 'paused', executions: '654', success: '87.3%' },
                { name: 'Re-engagement Campaign', status: 'running', executions: '423', success: '96.1%' },
              ].map((workflow, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`h-3 w-3 rounded-full ${workflow.status === 'running' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    <div>
                      <p className="font-medium text-gray-900">{workflow.name}</p>
                      <p className="text-sm text-gray-500">{workflow.executions} executions • {workflow.success} success rate</p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    {workflow.status === 'running' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Recent Campaigns</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { name: 'Summer Sale 2024', sent: '12,847', opens: '4,231', clicks: '892', date: '2 hours ago' },
                { name: 'Product Launch Announcement', sent: '8,432', opens: '3,124', clicks: '654', date: '1 day ago' },
                { name: 'Weekly Newsletter #47', sent: '15,234', opens: '5,892', clicks: '1,234', date: '3 days ago' },
                { name: 'Customer Feedback Survey', sent: '6,789', opens: '2,456', clicks: '423', date: '5 days ago' },
              ].map((campaign, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                    <span className="text-sm text-gray-500">{campaign.date}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Sent</p>
                      <p className="font-medium">{campaign.sent}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Opens</p>
                      <p className="font-medium">{campaign.opens}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Clicks</p>
                      <p className="font-medium">{campaign.clicks}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
