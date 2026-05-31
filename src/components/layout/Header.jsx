import { Languages, Moon, Sun } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useTheme } from "../../context/ThemeContext"
import { useLanguage } from "../../context/LanguageContext"

function Header() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()

  return (
    <header className="header">
      <div>
        <p className="header-subtitle">{t("app.headerSubtitle")}</p>
        <h2 className="header-title">{t("app.headerTitle")}</h2>
      </div>

      <div className="header-actions">
        <button className="header-button" onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          <span>
            {theme === "dark"
              ? t("common.lightMode")
              : t("common.darkMode")}
          </span>
        </button>

        <button className="header-button" onClick={toggleLanguage}>
          <Languages size={16} />
          <span>{language === "en" ? "中文" : "EN"}</span>
        </button>
      </div>
    </header>
  )
}

export default Header