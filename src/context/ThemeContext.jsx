import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext(null)

function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  return prefersDark ? "dark" : "light"
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    )
  }

  function changeTheme(newTheme) {
    if (newTheme === "light" || newTheme === "dark") {
      setTheme(newTheme)
    }
  }

  const value = {
    theme,
    toggleTheme,
    changeTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider")
  }

  return context
}   