import React from 'react'
import { User, Bell, Shield, Palette, Database, Mail, Key } from 'lucide-react'

export function Settings() {
  const settingSections = [
    {
      title: 'Profile Settings',
      icon: User,
      description: 'Manage your account information and preferences',
      items: [
        { label: 'Personal Information', value: 'Update your name, email, and profile picture' },
        { label: 'Password', value: 'Change your account password' },
        { label: 'Two-Factor Authentication', value: 'Enhance your account security' }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      description: 'Configure how you receive notifications',
      items: [
        { label: 'Email Notifications', value: 'Campaign updates, system alerts' },
        { label: 'Push Notifications', value: 'Real-time updates on your device' },
        { label: 'SMS Notifications', value: 'Critical alerts via text message' }
      ]
    },
    {
      title: 'Email Configuration',
      icon: Mail,
      description: 'Set up your email sending preferences',
      items: [
        { label: 'SMTP Settings', value: 'Configure your email server' },
        { label: 'Sender Information', value: 'Default from name and email' },
        { label: 'Bounce Handling', value: 'Manage bounced email addresses' }
      ]
    },
    {
      title: 'API & Integrations',
      icon: Key,
      description: 'Manage API keys and third-party integrations',
      items: [
        { label: 'API Keys', value: 'Generate and manage API access' },
        { label: 'Webhooks', value: 'Configure webhook endpoints' },
        { label: 'Connected Apps', value: 'Manage third-party integrations' }
      ]
    },
    {
      title: 'Data & Privacy',
      icon: Shield,
      description: 'Control your data and privacy settings',
      items: [
        { label: 'Data Export', value: 'Download your account data' },
        { label: 'Privacy Settings', value: 'Control data sharing preferences' },
        { label: 'GDPR Compliance', value: 'Manage consent and data rights' }
      ]
    },
    {
      title: 'Appearance',
      icon: Palette,
      description: 'Customize the look and feel of your dashboard',
      items: [
        { label: 'Theme', value: 'Light or dark mode preference' },
        { label: 'Language', value: 'Choose your preferred language' },
        { label: 'Timezone', value: 'Set your local timezone' }
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-600">Manage your account and application preferences</p>
      </div>

      <div className="grid gap-6">
        {settingSections.map((section, index) => {
          const Icon = section.icon
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.label}</p>
                          <p className="text-sm text-gray-500">{item.value}</p>
                        </div>
                        <button className="text-amber-600 hover:text-amber-700 text-sm font-medium">
                          Configure
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-lg shadow-sm border border-red-200 p-6">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Database className="w-5 h-5 text-red-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-red-900 mb-1">Danger Zone</h3>
            <p className="text-red-600 mb-4">Irreversible and destructive actions</p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-red-900">Delete Account</p>
                  <p className="text-sm text-red-600">Permanently delete your account and all data</p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
