import React, { useState } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  Mail, 
  Eye, 
  MousePointer, 
  Users,
  Calendar,
  Download,
  Filter
} from 'lucide-react'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts'

const emailPerformanceData = [
  { month: 'Jan', sent: 24000, delivered: 23520, opened: 8232, clicked: 1647 },
  { month: 'Feb', sent: 18000, delivered: 17640, opened: 6174, clicked: 1235 },
  { month: 'Mar', sent: 32000, delivered: 31360, opened: 10976, clicked: 2197 },
  { month: 'Apr', sent: 28000, delivered: 27440, opened: 9604, clicked: 1921 },
  { month: 'May', sent: 35000, delivered: 34300, opened: 12005, clicked: 2401 },
  { month: 'Jun', sent: 30000, delivered: 29400, opened: 10290, clicked: 2058 },
]

const campaignTypeData = [
  { name: 'Newsletter', value: 35, color: '#3b82f6' },
  { name: 'Promotional', value: 28, color: '#f59e0b' },
  { name: 'Transactional', value: 20, color: '#10b981' },
  { name: 'Welcome Series', value: 12, color: '#8b5cf6' },
  { name: 'Re-engagement', value: 5, color: '#ef4444' },
]

const workflowPerformanceData = [
  { name: 'Welcome Series', executions: 1240, success: 1220, failed: 20 },
  { name: 'Abandoned Cart', executions: 890, success: 839, failed: 51 },
  { name: 'Lead Nurturing', executions: 650, success: 617, failed: 33 },
  { name: 'Product Launch', executions: 420, success: 404, failed: 16 },
  { name: 'Customer Feedback', executions: 320, success: 301, failed: 19 },
]

const engagementTrendData = [
  { date: '2024-01-01', opens: 32.5, clicks: 4.2, unsubscribes: 0.8 },
  { date: '2024-01-08', opens: 34.1, clicks: 4.8, unsubscribes: 0.6 },
  { date: '2024-01-15', opens: 31.8, clicks: 4.1, unsubscribes: 0.9 },
  { date: '2024-01-22', opens: 35.2, clicks: 5.1, unsubscribes: 0.7 },
  { date: '2024-01-29', opens: 33.7, clicks: 4.6, unsubscribes: 0.8 },
  { date: '2024-02-05', opens: 36.4, clicks: 5.3, unsubscribes: 0.5 },
]

export const Analytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months')

  const periods = [
    { value: '7days', label: 'Last 7 Days' },
    { value: '30days', label: 'Last 30 Days' },
    { value: '3months', label: 'Last 3 Months' },
    { value: '6months', label: 'Last 6 Months' },
    { value: '1year', label: 'Last Year' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
          <p className="text-gray-600 mt-1">Track performance and gain insights from your marketing automation</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <select 
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            {periods.map(period => (
              <option key={period.value} value={period.value}>{period.label}</option>
            ))}
          </select>
          <button className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Emails Sent</p>
              <p className="text-3xl font-bold text-gray-900">167,000</p>
            </div>
            <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">18.2%</span>
            <span className="text-gray-500 ml-1">vs last period</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Open Rate</p>
              <p className="text-3xl font-bold text-gray-900">34.2%</p>
            </div>
            <div className="h-12 w-12 bg-green-50 rounded-lg flex items-center justify-center">
              <Eye className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">2.4%</span>
            <span className="text-gray-500 ml-1">vs last period</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Click Rate</p>
              <p className="text-3xl font-bold text-gray-900">4.7%</p>
            </div>
            <div className="h-12 w-12 bg-purple-50 rounded-lg flex items-center justify-center">
              <MousePointer className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-red-600 font-medium">0.8%</span>
            <span className="text-gray-500 ml-1">vs last period</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Subscribers</p>
              <p className="text-3xl font-bold text-gray-900">12,847</p>
            </div>
            <div className="h-12 w-12 bg-amber-50 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-amber-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">5.3%</span>
            <span className="text-gray-500 ml-1">vs last period</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Email Performance Trend */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Performance Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={emailPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="sent" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
              <Area type="monotone" dataKey="opened" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              <Area type="monotone" dataKey="clicked" stackId="3" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Campaign Types Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Types Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={campaignTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {campaignTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {campaignTypeData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-600">{item.name}</span>
                <span className="text-sm font-medium text-gray-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow Performance */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Workflow Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={workflowPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="success" fill="#10b981" name="Successful" />
            <Bar dataKey="failed" fill="#ef4444" name="Failed" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Engagement Trends */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={engagementTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="opens" stroke="#3b82f6" strokeWidth={2} name="Open Rate %" />
            <Line type="monotone" dataKey="clicks" stroke="#10b981" strokeWidth={2} name="Click Rate %" />
            <Line type="monotone" dataKey="unsubscribes" stroke="#ef4444" strokeWidth={2} name="Unsubscribe Rate %" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Summary Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Campaign Performance Summary</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Sent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Open Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Click Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversion Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ROI
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { type: 'Newsletter', sent: 58400, openRate: 32.1, clickRate: 4.2, conversionRate: 2.1, roi: 340 },
                { type: 'Promotional', sent: 46760, openRate: 28.7, clickRate: 6.8, conversionRate: 3.4, roi: 520 },
                { type: 'Transactional', sent: 33400, openRate: 45.2, clickRate: 12.1, conversionRate: 8.7, roi: 890 },
                { type: 'Welcome Series', sent: 20040, openRate: 52.3, clickRate: 15.4, conversionRate: 12.3, roi: 1240 },
                { type: 'Re-engagement', sent: 8350, openRate: 18.9, clickRate: 3.1, conversionRate: 1.8, roi: 180 },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.sent.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.openRate}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.clickRate}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.conversionRate}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                    {row.roi}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
