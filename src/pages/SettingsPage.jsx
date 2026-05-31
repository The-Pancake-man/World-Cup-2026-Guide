import { useTranslation } from "react-i18next"
import { useTheme } from "../context/ThemeContext"
import { useLanguage } from "../context/LanguageContext"

function SettingsPage() {
  const { t } = useTranslation()
  const { theme, changeTheme } = useTheme()
  const { language, changeLanguage } = useLanguage()

  return (
    <section className="page">
      <p className="eyebrow">{t("settings.eyebrow")}</p>
      <h1>{t("settings.title")}</h1>
      <p className="page-description">{t("settings.description")}</p>

      <div className="settings-grid">
        <div className="placeholder-card">
          <h3>{t("settings.themeTitle")}</h3>
          <p className="small-note">Choose your preferred display theme.</p>

          <div className="settings-option-row">
            <button
              className={
                theme === "light"
                  ? "settings-option active"
                  : "settings-option"
              }
              onClick={() => changeTheme("light")}
            >
              Light
            </button>

            <button
              className={
                theme === "dark"
                  ? "settings-option active"
                  : "settings-option"
              }
              onClick={() => changeTheme("dark")}
            >
              Dark
            </button>
          </div>
        </div>

        <div className="placeholder-card">
          <h3>{t("settings.languageTitle")}</h3>
          <p className="small-note">Choose website language.</p>

          <div className="settings-option-row">
            <button
              className={
                language === "en"
                  ? "settings-option active"
                  : "settings-option"
              }
              onClick={() => changeLanguage("en")}
            >
              English
            </button>

            <button
              className={
                language === "zh"
                  ? "settings-option active"
                  : "settings-option"
              }
              onClick={() => changeLanguage("zh")}
            >
              中文
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SettingsPage