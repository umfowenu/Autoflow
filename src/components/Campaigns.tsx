import React, { useState } from 'react'
import { 
  Plus, 
  Send, 
  Edit, 
  Copy, 
  Trash2, 
  MoreVertical,
  Mail,
  Eye,
  MousePointer,
  Users,
  Calendar,
  Filter,
  Search
} from 'lucide-react'

const campaigns = [
  {
    id: 1,
    name: 'Summer Sale 2024',
    subject: '🌞 Summer Sale: Up to 50% Off Everything!',
    status: 'sent',
    type: 'promotional',
    sent: 12847,
    opens: 4231,
    clicks: 892,
    bounces: 23,
    unsubscribes: 12,
    sentDate: '2024-01-15T10:00:00Z',
    openRate: 32.9,
    clickRate: 6.9,
    template: 'Summer Sale Template'
  },
  {
    id: 2,
    name: 'Product Launch Announcement',
    subject: '🚀 Introducing Our Revolutionary New Product',
    status: 'sent',
    type: 'announcement',
    sent: 8432,
    opens: 3124,
    clicks: 654,
    bounces: 15,
    unsubscribes: 8,
    sentDate: '2024-01-14T14:30:00Z',
    openRate: 37.1,
    clickRate: 7.8,
    template: 'Product Launch Template'
  },
  {
    id: 3,
    name: 'Weekly Newsletter #47',
    subject: 'This Week in Tech: AI Breakthroughs & More',
    status: 'scheduled',
    type: 'newsletter',
    sent: 0,
    opens: 0,
    clicks: 0,
    bounces: 0,
    unsubscribes: 0,
    sentDate: '2024-01-20T09:00:00Z',
    openRate: 0,
    clickRate: 0,
    template: 'Newsletter Template'
  },
  {
    id: 4,
    name: 'Customer Feedback Survey',
    subject: 'Help Us Improve: Quick 2-Minute Survey',
    status: 'draft',
    type: 'survey',
    sent: 0,
    opens: 0,
    clicks: 0,
    bounces: 0,
    unsubscribes: 0,
    sentDate: null,
    openRate: 0,
    clickRate: 0,
    template: 'Survey Template'
  },
  {
    id: 5,
    name: 'Holiday Special Offer',
    subject: '🎄 Limited Time: Holiday Special 40% Off',
    status: 'sent',
    type: 'promotional',
    sent: 15234,
    opens: 5892,
    clicks: 1234,
    bounces: 31,
    unsubscribes: 18,
    sentDate: '2024-01-10T16:00:00Z',
    openRate: 38.7,
    clickRate: 8.1,
    template: 'Holiday Template'
  },
  {
    id: 6,
    name: 'Webinar Invitation',
    subject: 'Join Our Exclusive Marketing Automation Webinar',
    status: 'paused',
    type: 'event',
    sent: 0,
    opens: 0,
    clicks: 0,
    bounces: 0,
    unsubscribes: 0,
    sentDate: null,
    openRate: 0,
    clickRate: 0,
    template: 'Event Template'
  }
]

export const Campaigns: React.FC = () => {
  const [selectedType, setSelectedType] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const types = ['All', 'promotional', 'newsletter', 'announcement', 'survey', 'event']
  const statuses = ['All', 'sent', 'scheduled', 'draft', 'paused']

  const filteredCampaigns = campaigns.filter(campaign => {
    const typeMatch = selectedType === 'All' || campaign.type === selectedType
    const statusMatch = selectedStatus === 'All' || campaign.status === selectedStatus
    const searchMatch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       campaign.subject.toLowerCase().includes(searchTerm.toLowerCase())
    return typeMatch && statusMatch && searchMatch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent':
        return 'bg-green-100 text-green-800'
      case 'scheduled':
        return 'bg-blue-100 text-blue-800'
      case 'draft':
        return 'bg-gray-100 text-gray-800'
      case 'paused':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'promotional':
        return 'bg-purple-100 text-purple-800'
      case 'newsletter':
        return 'bg-blue-100 text-blue-800'
      case 'announcement':
        return 'bg-green-100 text-green-800'
      case 'survey':
        return 'bg-orange-100 text-orange-800'
      case 'event':
        return 'bg-pink-100 text-pink-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not scheduled'
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Email Campaigns</h2>
          <p className="text-gray-600 mt-1">Create, manage, and track your email marketing campaigns</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Create Campaign
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
          </div>
          
          <select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            {types.map(type => (
              <option key={type} value={type}>
                {type === 'All' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
          
          <select 
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'All' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search campaigns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Campaigns List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campaign
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recipients
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCampaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                        <div className="text-sm text-gray-500 max-w-md truncate">{campaign.subject}</div>
                        <div className="mt-1">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(campaign.type)}`}>
                            {campaign.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-gray-900">
                      <Users className="h-4 w-4 mr-1 text-gray-400" />
                      {campaign.sent > 0 ? campaign.sent.toLocaleString() : 'Not sent'}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {campaign.status === 'sent' ? (
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Eye className="h-3 w-3 mr-1 text-blue-500" />
                          <span className="text-gray-600">{campaign.openRate}% opens</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MousePointer className="h-3 w-3 mr-1 text-green-500" />
                          <span className="text-gray-600">{campaign.clickRate}% clicks</span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">No data</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-gray-900">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      {formatDate(campaign.sentDate)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Copy className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600">
                        <Send className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredCampaigns.length === 0 && (
        <div className="text-center py-12">
          <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No campaigns found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your filters or create a new campaign to get started.</p>
          <button className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Campaign
          </button>
        </div>
      )}
    </div>
  )
}
