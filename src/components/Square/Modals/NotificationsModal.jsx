import React from 'react'
import { useTheme } from '../../../contexts/ThemeContext'
import { getNotificationIcon } from '../../../data/squareData'

const NotificationsModal = ({ 
  showNotifications, 
  setShowNotifications, 
  setActiveSidebarItem, 
  notifications 
}) => {
  const { theme } = useTheme()

  if (!showNotifications) return null

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg w-full max-w-md mx-4 max-h-[80vh] overflow-hidden shadow-2xl`}>
        {/* Modal Header */}
        <div className={`px-6 py-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} flex items-center justify-between`}>
          <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Notifications
          </h2>
          <div className="flex items-center space-x-3">
            <button className={`text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}`}>
              Mark all as read
            </button>
            <button
              onClick={() => {
                setShowNotifications(false)
                setActiveSidebarItem('home')
              }}
              className={`p-2 hover:bg-gray-100 rounded ${theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500'}`}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="overflow-y-auto max-h-96">
          {notifications.length === 0 ? (
            <div className="py-16 text-center">
              <i className={`fas fa-bell text-4xl mb-4 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-300'}`}></i>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                No notifications yet
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-4 cursor-pointer transition-colors ${
                    !notification.read 
                      ? theme === 'dark' ? 'bg-gray-700/50' : 'bg-blue-50'
                      : theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {/* User Avatar */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'}`}>
                      <i className={`${notification.userAvatar} text-gray-500`}></i>
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Notification Content */}
                      <div className="flex items-start space-x-2 mb-1">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className={`font-medium text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                              {notification.user}
                            </span>
                            {notification.verified && (
                              <i className="fas fa-check-circle text-blue-500 text-xs"></i>
                            )}
                            <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                              {notification.action}
                            </span>
                          </div>
                          
                          {notification.content && (
                            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2 line-clamp-2`}>
                              {notification.content}
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                              {notification.timestamp}
                            </span>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                        </div>

                        {/* Notification Type Icon */}
                        <div className="flex-shrink-0">
                          <i className={`${getNotificationIcon(notification.type)} text-sm`}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className={`px-6 py-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} text-center`}>
          <button className="text-yellow-500 hover:text-yellow-600 text-sm font-medium">
            View All Notifications
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotificationsModal
