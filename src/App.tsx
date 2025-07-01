import React, { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { Workflows } from './components/Workflows'
import { Campaigns } from './components/Campaigns'
import { Analytics } from './components/Analytics'
import { Contacts } from './components/Contacts'
import { Settings } from './components/Settings'

type ActiveView = 'dashboard' | 'workflows' | 'campaigns' | 'analytics' | 'contacts' | 'settings'

function App() {
  const [activeView, setActiveView] = useState<ActiveView>('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />
      case 'workflows':
        return <Workflows />
      case 'campaigns':
        return <Campaigns />
      case 'analytics':
        return <Analytics />
      case 'contacts':
        return <Contacts />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          activeView={activeView}
          setSidebarOpen={setSidebarOpen}
        />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {renderActiveView()}
        </main>
      </div>
    </div>
  )
}

export default App
