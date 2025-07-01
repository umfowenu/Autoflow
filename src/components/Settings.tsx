import React, { useState } from 'react'
import { 
  Save, 
  Key, 
  Mail, 
  Globe, 
  Shield, 
  Bell,
  Users,
  Database,
  Zap,
  Settings as SettingsIcon,
  Eye,
  EyeOff
} from 'lucide-react'

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general')
  const [showApiKey, setShowApiKey] = useState(false)
  const [showWebhookSecret, setShowWebhookSecret] = useState(false)

  const tabs = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'email', label: 'Email Settings', icon: Mail },
    { id: 'integrations', label: 'Integrations', icon: Zap },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'team', label: 'Team', icon: Users },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Organization Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    defaultValue="AutoFlow Marketing"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    defaultValue="https://autoflow.marketing"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Zone
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option>UTC-8 (Pacific Time)</option>
                    <option>UTC-5 (Eastern Time)</option>
                    <option>UTC+0 (GMT)</option>
                    <option>UTC+1 (Central European Time)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Default Language
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Support Email
                  </label>
                  <input
                    type="email"
                    defaultValue="support@autoflow.marketing"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 'email':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">SMTP Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SMTP Host
                  </label>
                  <input
                    type="text"
                    defaultValue="smtp.gmail.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SMTP Port
                  </label>
                  <input
                    type="number"
                    defaultValue="587"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    defaultValue="noreply@autoflow.marketing"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    defaultValue="••••••••••••"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Default Email Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    From Name
                  </label>
                  <input
                    type="text"
                    defaultValue="AutoFlow Marketing"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    From Email
                  </label>
                  <input
                    type="email"
                    defaultValue="noreply@autoflow.marketing"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reply-To Email
                  </label>
                  <input
                    type="email"
                    defaultValue="support@autoflow.marketing"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bounce Email
                  </label>
                  <input
                    type="email"
                    defaultValue="bounce@autoflow.marketing"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Email Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Enable Email Tracking</h4>
                    <p className="text-sm text-gray-500">Track email opens and clicks</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Enable Unsubscribe Link</h4>
                    <p className="text-sm text-gray-500">Automatically add unsubscribe links to emails</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Enable List-Unsubscribe Header</h4>
                    <p className="text-sm text-gray-500">Add list-unsubscribe header for better deliverability</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
                </div>
              </div>
            </div>
          </div>
        )

      case 'integrations':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">n8n Integration</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-800">n8n Connected</span>
                </div>
                <p className="text-sm text-blue-600 mt-1">Your n8n instance is successfully connected and ready to automate workflows.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    n8n Instance URL
                  </label>
                  <input
                    type="url"
                    defaultValue="https://n8n.autoflow.marketing"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    API Key
                  </label>
                  <div className="relative">
                    <input
                      type={showApiKey ? "text" : "password"}
                      defaultValue="n8n_api_key_1234567890abcdef"
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showApiKey ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Third-Party Integrations</h3>
              <div className="space-y-4">
                {[
                  { name: 'Salesforce', status: 'connected', description: 'Sync contacts and leads automatically' },
                  { name: 'HubSpot', status: 'connected', description: 'Integrate with HubSpot CRM and marketing tools' },
                  { name: 'Mailchimp', status: 'disconnected', description: 'Import contacts and sync email campaigns' },
                  { name: 'Slack', status: 'connected', description: 'Send notifications to Slack channels' },
                  { name: 'Zapier', status: 'disconnected', description: 'Connect with 5000+ apps via Zapier' },
                  { name: 'Google Analytics', status: 'connected', description: 'Track campaign performance and conversions' },
                ].map((integration, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`h-3 w-3 rounded-full ${integration.status === 'connected' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{integration.name}</h4>
                        <p className="text-sm text-gray-500">{integration.description}</p>
                      </div>
                    </div>
                    <button className={`px-4 py-2 text-sm rounded-lg ${
                      integration.status === 'connected' 
                        ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                        : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                    }`}>
                      {integration.status === 'connected' ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Webhooks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Webhook URL
                  </label>
                  <input
                    type="url"
                    defaultValue="https://autoflow.marketing/webhook/n8n"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Webhook Secret
                  </label>
                  <div className="relative">
                    <input
                      type={showWebhookSecret ? "text" : "password"}
                      defaultValue="webhook_secret_abcdef1234567890"
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      readOnly
                    />
                    <button
                      type="button"
                      onClick={() => setShowWebhookSecret(!showWebhookSecret)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showWebhookSecret ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
              <div className="space-y-4">
                {[
                  { title: 'Workflow Failures', description: 'Get notified when workflows fail to execute' },
                  { title: 'Campaign Completions', description: 'Receive notifications when campaigns finish sending' },
                  { title: 'High Bounce Rates', description: 'Alert when bounce rates exceed threshold' },
                  { title: 'New Subscribers', description: 'Notification for new contact subscriptions' },
                  { title: 'Weekly Reports', description: 'Receive weekly performance summaries' },
                  { title: 'System Updates', description: 'Get notified about system maintenance and updates' },
                ].map((notification, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                      <p className="text-sm text-gray-500">{notification.description}</p>
                    </div>
                    <input type="checkbox" defaultChecked={index < 3} className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Slack Notifications</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slack Webhook URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://hooks.slack.com/services/..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Default Channel
                  </label>
                  <input
                    type="text"
                    placeholder="#marketing-automation"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Authentication</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <button className="px-4 py-2 bg-amber-600 text-white text-sm rounded-lg hover:bg-amber-700">
                    Enable 2FA
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Single Sign-On (SSO)</h4>
                    <p className="text-sm text-gray-500">Enable SSO with your organization's identity provider</p>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50">
                    Configure SSO
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">API Security</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    API Rate Limiting
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option>1000 requests per hour</option>
                    <option>5000 requests per hour</option>
                    <option>10000 requests per hour</option>
                    <option>Unlimited</option>
                  </select>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">IP Whitelisting</h4>
                    <p className="text-sm text-gray-500">Restrict API access to specific IP addresses</p>
                  </div>
                  <input type="checkbox" className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Data Protection</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Data Encryption</h4>
                    <p className="text-sm text-gray-500">Encrypt sensitive data at rest and in transit</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Enabled</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Audit Logging</h4>
                    <p className="text-sm text-gray-500">Log all user actions and system events</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Data Retention</h4>
                    <p className="text-sm text-gray-500">Automatically delete old data after specified period</p>
                  </div>
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option>1 year</option>
                    <option>2 years</option>
                    <option>5 years</option>
                    <option>Never</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )

      case 'team':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Team Members</h3>
              <button className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                <Users className="h-4 w-4 mr-2" />
                Invite Member
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Member
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Active
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { name: 'John Doe', email: 'john@autoflow.marketing', role: 'Owner', status: 'Active', lastActive: '2 hours ago', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
                    { name: 'Sarah Johnson', email: 'sarah@autoflow.marketing', role: 'Admin', status: 'Active', lastActive: '1 day ago', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face' },
                    { name: 'Michael Chen', email: 'michael@autoflow.marketing', role: 'Editor', status: 'Active', lastActive: '3 days ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
                    { name: 'Emily Rodriguez', email: 'emily@autoflow.marketing', role: 'Viewer', status: 'Invited', lastActive: 'Never', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' },
                  ].map((member, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img className="h-10 w-10 rounded-full" src={member.avatar} alt={member.name} />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{member.name}</div>
                            <div className="text-sm text-gray-500">{member.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {member.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {member.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {member.lastActive}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-amber-600 hover:text-amber-900 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Role Permissions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { role: 'Owner', permissions: ['Full Access', 'Billing', 'Team Management', 'Settings'] },
                  { role: 'Admin', permissions: ['Workflows', 'Campaigns', 'Analytics', 'Contacts'] },
                  { role: 'Editor', permissions: ['Workflows', 'Campaigns', 'Contacts'] },
                  { role: '