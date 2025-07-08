import React from 'react'
import { Play, Pause, Edit, Trash2, Plus, Users, Mail, Clock } from 'lucide-react'

export function Workflows() {
  const workflows = [
    {
      id: 1,
      name: 'Welcome Series',
      status: 'active',
      triggers: 245,
      contacts: 1234,
      lastRun: '2 hours ago',
      description: 'Automated welcome sequence for new subscribers'
    },
    {
      id: 2,
      name: 'Lead Nurturing',
      status: 'active',
      triggers: 89,
      contacts: 567,
      lastRun: '1 hour ago',
      description: 'Follow-up sequence for potential customers'
    },
    {
      id: 3,
      name: 'Re-engagement Campaign',
      status: 'paused',
      triggers: 12,
      contacts: 890,
      lastRun: '1 day ago',
      description: 'Win back inactive subscribers'
    },
    {
      id: 4,
      name: 'Product Launch',
      status: 'draft',
      triggers: 0,
      contacts: 0,
      lastRun: 'Never',
      description: 'Announcement sequence for new product'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'paused': return 'bg-yellow-100 text-yellow-800'
      case 'draft': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Workflows</h2>
          <p className="text-gray-600">Automate your marketing campaigns</p>
        </div>
        <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Create Workflow</span>
        </button>
      </div>

      <div className="grid gap-6">
        {workflows.map((workflow) => (
          <div key={workflow.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{workflow.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(workflow.status)}`}>
                    {workflow.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{workflow.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{workflow.triggers} triggers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{workflow.contacts} contacts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Last run: {workflow.lastRun}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                {workflow.status === 'active' ? (
                  <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg">
                    <Pause className="w-4 h-4" />
                  </button>
                ) : (
                  <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                    <Play className="w-4 h-4" />
                  </button>
                )}
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
