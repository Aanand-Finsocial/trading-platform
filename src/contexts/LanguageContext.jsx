import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './language/translations'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage)
  }

  const translate = (key) => {
    return translations[language]?.[key] || key
  }

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.setAttribute('lang', language)
  }, [language])

  const value = {
    language,
    changeLanguage,
    translate,
    availableLanguages: Object.keys(translations)
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
