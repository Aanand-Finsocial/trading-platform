import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext()

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Welcome to FinSocial!',
      message: 'Complete your profile verification to unlock full trading features.',
      type: 'info',
      read: false,
      timestamp: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Security Alert',
      message: 'Enable 2FA for enhanced account security.',
      type: 'warning',
      read: false,
      timestamp: new Date(Date.now() - 3600000).toISOString()
    },
    {
      id: 3,
      title: 'Market Update',
      message: 'Bitcoin reaches new monthly high!',
      type: 'success',
      read: true,
      timestamp: new Date(Date.now() - 7200000).toISOString()
    }
  ])

  // Mock user data
  const mockUser = {
    id: 1,
    userId: 'FS-000001', // Unique user identifier
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    avatar: null,
    isVerified: false,
    balance: {
      total: '0.00',
      available: '0.00',
      currency: 'USDT'
    },
    joinedDate: '2024-01-15'
  }

  useEffect(() => {
    // Simulate loading user data
    const timer = setTimeout(() => {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const login = (userData) => {
    // Generate a unique user ID if not provided
    const generateUserId = () => {
      const timestamp = Date.now().toString().slice(-6)
      const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
      return `FS-${timestamp}${random}`
    }

    const userWithDefaults = { 
      ...mockUser, 
      ...userData,
      userId: userData.userId || generateUserId()
    }
    setUser(userWithDefaults)
    localStorage.setItem('user', JSON.stringify(userWithDefaults))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem('user', JSON.stringify(updatedUser))
  }

  const markNotificationAsRead = (notificationId) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, read: true }
          : notification
      )
    )
  }

  const addNotification = (notification) => {
    const newNotification = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      read: false,
      ...notification
    }
    setNotifications(prev => [newNotification, ...prev])
  }

  const unreadCount = notifications.filter(n => !n.read).length

  const value = {
    user,
    loading,
    notifications,
    unreadCount,
    login,
    logout,
    updateUser,
    markNotificationAsRead,
    addNotification,
    isAuthenticated: !!user
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
