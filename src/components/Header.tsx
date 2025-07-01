import React from 'react'
import { Menu, Bell, Search } from 'lucide-react'

interface HeaderProps {
  activeView: string
  setSidebarOpen: (open: boolean) => void
}

export const Header: React.FC<HeaderProps> = ({ activeView, setSidebarOpen }) => {
  const getPageTitle = () => {
    switch (activeView) {
      case 'dashboard': return 'Dashboard'
      case 'workflows': return 'Automation Workflows'
      case 'campaigns': return 'Email Campaigns'
      case 'analytics': return 'Analytics & Reports'
      case 'contacts': return 'Contact Management'
      case 'settings': return 'Settings'
      default: return 'Dashboard'
    }
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">{getPageTitle()}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search workflows, campaigns..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          
          <button className="relative p-2 text-gray-400 hover:text-gray-600">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  )
}
