import { createContext, useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language || "en")

  useEffect(() => {
    i18n.changeLanguage(language)
    localStorage.setItem("language", language)
  }, [language, i18n])

  function toggleLanguage() {
    setLanguage((currentLanguage) =>
      currentLanguage === "en" ? "zh" : "en"
    )
  }

  function changeLanguage(newLanguage) {
    if (newLanguage === "en" || newLanguage === "zh") {
      setLanguage(newLanguage)
    }
  }

  const value = {
    language,
    toggleLanguage,
    changeLanguage,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider")
  }

  return context
}