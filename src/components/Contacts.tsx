import React, { useState } from 'react'
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Upload,
  Edit, 
  Trash2, 
  Mail,
  Phone,
  MapPin,
  Calendar,
  Tag,
  MoreVertical,
  Users,
  UserPlus,
  UserMinus
} from 'lucide-react'

const contacts = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    status: 'active',
    tags: ['VIP', 'Newsletter'],
    joinDate: '2024-01-15',
    lastActivity: '2024-01-18',
    source: 'Website Form',
    engagement: 'high',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA',
    status: 'active',
    tags: ['Customer', 'Tech'],
    joinDate: '2024-01-12',
    lastActivity: '2024-01-17',
    source: 'Social Media',
    engagement: 'medium',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@example.com',
    phone: '+1 (555) 345-6789',
    location: 'Austin, TX',
    status: 'inactive',
    tags: ['Lead', 'Marketing'],
    joinDate: '2024-01-10',
    lastActivity: '2024-01-14',
    source: 'Referral',
    engagement: 'low',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: 4,
    name: 'David Thompson',
    email: 'david.thompson@example.com',
    phone: '+1 (555) 456-7890',
    location: 'Chicago, IL',
    status: 'active',
    tags: ['VIP', 'Enterprise'],
    joinDate: '2024-01-08',
    lastActivity: '2024-01-18',
    source: 'Direct Sales',
    engagement: 'high',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    email: 'lisa.wang@example.com',
    phone: '+1 (555) 567-8901',
    location: 'Seattle, WA',
    status: 'active',
    tags: ['Newsletter', 'Startup'],
    joinDate: '2024-01-05',
    lastActivity: '2024-01-16',
    source: 'Webinar',
    engagement: 'medium',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: 6,
    name: 'James Wilson',
    email: 'james.wilson@example.com',
    phone: '+1 (555) 678-9012',
    location: 'Miami, FL',
    status: 'bounced',
    tags: ['Lead'],
    joinDate: '2024-01-03',
    lastActivity: '2024-01-10',
    source: 'Advertisement',
    engagement: 'low',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
  }
]

const tags = ['All', 'VIP', 'Customer', 'Lead', 'Newsletter', 'Tech', 'Marketing', 'Enterprise', 'Startup']
const statuses = ['All', 'active', 'inactive', 'bounced', 'unsubscribed']
const engagementLevels = ['All', 'high', 'medium', 'low']

export const Contacts: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedEngagement, setSelectedEngagement] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedContacts, setSelectedContacts] = useState<number[]>([])

  const filteredContacts = contacts.filter(contact => {
    const tagMatch = selectedTag === 'All' || contact.tags.includes(selectedTag)
    const statusMatch = selectedStatus === 'All' || contact.status === selectedStatus
    const engagementMatch = selectedEngagement === 'All' || contact.engagement === selectedEngagement
    const searchMatch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       contact.email.toLowerCase().includes(searchTerm.toLowerCase())
    return tagMatch && statusMatch && engagementMatch && searchMatch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'inactive':
        return 'bg-yellow-100 text-yellow-800'
      case 'bounced':
        return 'bg-red-100 text-red-800'
      case 'unsubscribed':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getEngagementColor = (engagement: string) => {
    switch (engagement) {
      case 'high':
        return 'bg-green-100 text-green-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleSelectContact = (contactId: number) => {
    setSelectedContacts(prev => 
      prev.includes(contactId) 
        ? prev.filter(id => id !== contactId)
        : [...prev, contactId]
    )
  }

  const handleSelectAll = () => {
    if (selectedContacts.length === filteredContacts.length) {
      setSelectedContacts([])
    } else {
      setSelectedContacts(filteredContacts.map(contact => contact.id))
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Contact Management</h2>
          <p className="text-gray-600 mt-1">Manage your contacts and subscriber lists</p>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
            <Plus className="h-4 w-4 mr-2" />
            Add Contact
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Contacts</p>
              <p className="text-3xl font-bold text-gray-900">12,847</p>
            </div>
            <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Subscribers</p>
              <p className="text-3xl font-bold text-gray-900">9,234</p>
            </div>
            <div className="h-12 w-12 bg-green-50 rounded-lg flex items-center justify-center">
              <UserPlus className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">New This Month</p>
              <p className="text-3xl font-bold text-gray-900">1,423</p>
            </div>
            <div className="h-12 w-12 bg-purple-50 rounded-lg flex items-center justify-center">
              <UserPlus className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Unsubscribed</p>
              <p className="text-3xl font-bold text-gray-900">234</p>
            </div>
            <div className="h-12 w-12 bg-red-50 rounded-lg flex items-center justify-center">
              <UserMinus className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
          </div>
          
          <select 
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            {tags.map(tag => (
              <option key={tag} value={tag}>{tag === 'All' ? 'All Tags' : tag}</option>
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

          <select 
            value={selectedEngagement}
            onChange={(e) => setSelectedEngagement(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            {engagementLevels.map(level => (
              <option key={level} value={level}>
                {level === 'All' ? 'All Engagement' : level.charAt(0).toUpperCase() + level.slice(1) + ' Engagement'}
              </option>
            ))}
          </select>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </div>

        {selectedContacts.length > 0 && (
          <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-amber-800">
                {selectedContacts.length} contact{selectedContacts.length > 1 ? 's' : ''} selected
              </span>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm bg-amber-600 text-white rounded hover:bg-amber-700">
                  Send Email
                </button>
                <button className="px-3 py-1 text-sm border border-amber-600 text-amber-600 rounded hover:bg-amber-50">
                  Add Tag
                </button>
                <button className="px-3 py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-50">
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contacts Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedContacts.length === filteredContacts.length && filteredContacts.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engagement
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Activity
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredContacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedContacts.includes(contact.id)}
                      onChange={() => handleSelectContact(contact.id)}
                      className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={contact.avatar}
                        alt={contact.name}
                        className="h-10 w-10 rounded-full mr-4"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Mail className="h-3 w-3 mr-1" />
                          {contact.email}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          {contact.phone}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {contact.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {contact.tags.map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getEngagementColor(contact.engagement)}`}>
                      {contact.engagement}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {contact.source}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-gray-900">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      {new Date(contact.lastActivity).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
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
      {filteredContacts.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No contacts found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your filters or add your first contact to get started.</p>
          <button className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
            <Plus className="h-4 w-4 mr-2" />
            Add Your First Contact
          </button>
        </div>
      )}
    </div>
  )
}
