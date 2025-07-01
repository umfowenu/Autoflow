import React, { useState } from 'react'
import { 
  Plus, 
  Play, 
  Pause, 
  Edit, 
  Copy, 
  Trash2, 
  MoreVertical,
  Zap,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter
} from 'lucide-react'

const workflows = [
  {
    id: 1,
    name: 'Welcome Email Series',
    description: 'Automated welcome sequence for new subscribers',
    status: 'active',
    trigger: 'New Contact Added',
    executions: 1247,
    successRate: 98.5,
    lastRun: '2 minutes ago',
    nodes: 8,
    category: 'Onboarding'
  },
  {
    id: 2,
    name: 'Abandoned Cart Recovery',
    description: 'Recover abandoned shopping carts with targeted emails',
    status: 'active',
    trigger: 'Cart Abandoned',
    executions: 892,
    successRate: 94.2,
    lastRun: '5 minutes ago',
    nodes: 12,
    category: 'E-commerce'
  },
  {
    id: 3,
    name: 'Lead Scoring & Qualification',
    description: 'Automatically score and qualify leads based on behavior',
    status: 'paused',
    trigger: 'Form Submission',
    executions: 654,
    successRate: 87.3,
    lastRun: '2 hours ago',
    nodes: 15,
    category: 'Lead Management'
  },
  {
    id: 4,
    name: 'Social Media Cross-Posting',
    description: 'Automatically post content across multiple social platforms',
    status: 'active',
    trigger: 'Blog Post Published',
    executions: 423,
    successRate: 96.1,
    lastRun: '1 hour ago',
    nodes: 6,
    category: 'Social Media'
  },
  {
    id: 5,
    name: 'Customer Feedback Collection',
    description: 'Collect and analyze customer feedback automatically',
    status: 'active',
    trigger: 'Purchase Completed',
    executions: 789,
    successRate: 91.7,
    lastRun: '30 minutes ago',
    nodes: 10,
    category: 'Customer Success'
  },
  {
    id: 6,
    name: 'Event Registration Follow-up',
    description: 'Automated follow-up sequence for event registrations',
    status: 'draft',
    trigger: 'Event Registration',
    executions: 0,
    successRate: 0,
    lastRun: 'Never',
    nodes: 7,
    category: 'Events'
  }
]

export const Workflows: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')

  const categories = ['All', 'Onboarding', 'E-commerce', 'Lead Management', 'Social Media', 'Customer Success', 'Events']
  const statuses = ['All', 'active', 'paused', 'draft']

  const filteredWorkflows = workflows.filter(workflow => {
    const categoryMatch = selectedCategory === 'All' || workflow.category === selectedCategory
    const statusMatch = selectedStatus === 'All' || workflow.status === selectedStatus
    return categoryMatch && statusMatch
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'paused':
        return <Pause className="h-4 w-4 text-yellow-500" />
      case 'draft':
        return <Clock className="h-4 w-4 text-gray-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'paused':
        return 'bg-yellow-100 text-yellow-800'
      case 'draft':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-red-100 text-red-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Automation Workflows</h2>
          <p className="text-gray-600 mt-1">Create and manage your n8n automation workflows</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Create Workflow
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
          </div>
          
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
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
        </div>
      </div>

      {/* Workflows Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredWorkflows.map((workflow) => (
          <div key={workflow.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{workflow.name}</h3>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(workflow.status)}`}>
                      {getStatusIcon(workflow.status)}
                      <span className="ml-1">{workflow.status}</span>
                    </span>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{workflow.description}</p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Trigger:</span>
                  <span className="font-medium text-gray-900">{workflow.trigger}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Executions:</span>
                  <span className="font-medium text-gray-900">{workflow.executions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Success Rate:</span>
                  <span className="font-medium text-green-600">{workflow.successRate}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Last Run:</span>
                  <span className="font-medium text-gray-900">{workflow.lastRun}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Nodes:</span>
                  <span className="font-medium text-gray-900">{workflow.nodes}</span>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {workflow.category}
                </span>
                <div className="flex items-center space-x-2">
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
                    {workflow.status === 'active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredWorkflows.length === 0 && (
        <div className="text-center py-12">
          <Zap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No workflows found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your filters or create a new workflow to get started.</p>
          <button className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
            <Plus className="h-4 w-4 mr-2" />
            Create Your First Workflow
          </button>
        </div>
      )}
    </div>
  )
}
