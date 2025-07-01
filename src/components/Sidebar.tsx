import React from 'react'
import { 
  LayoutDashboard, 
  Workflow, 
  Mail, 
  BarChart3, 
  Users, 
  Settings,
  Shield,
  X,
  Menu
} from 'lucide-react'

interface SidebarProps {
  activeView: string
  setActiveView: (view: any) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeView, 
  setActiveView, 
  isOpen, 
  setIsOpen 
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'workflows', label: 'Workflows', icon: Workflow },
    { id: 'campaigns', label: 'Campaigns', icon: Mail },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'contacts', label: 'Contacts', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-amber-500" />
            <span className="text-xl font-bold text-gray-900">AutoFlow</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveView(item.id)
                      setIsOpen(false)
                    }}
                    className={`
                      w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                      ${activeView === item.id
                        ? 'bg-amber-50 text-amber-700 border-r-2 border-amber-500'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
              alt="User avatar"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
