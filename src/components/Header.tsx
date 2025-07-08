import React from 'react'
import { Menu, Bell, Search, User } from 'lucide-react'

interface HeaderProps {
  activeView: string
  setSidebarOpen: (open: boolean) => void
}

export function Header({ activeView, setSidebarOpen }: HeaderProps) {
  const getPageTitle = () => {
    switch (activeView) {
      case 'dashboard': return 'Dashboard'
      case 'workflows': return 'Workflows'
      case 'campaigns': return 'Campaigns'
      case 'analytics': return 'Analytics'
      case 'contacts': return 'Contacts'
      case 'settings': return 'Settings'
      default: return 'Dashboard'
    }
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-semibold text-gray-900">{getPageTitle()}</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        
        <button className="relative p-2 text-gray-400 hover:text-gray-600">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <span className="hidden md:block text-sm font-medium text-gray-700">John Doe</span>
        </div>
      </div>
    </header>
  )
}
