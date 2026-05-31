import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { BookOpen, CalendarDays, ShieldCheck, Trophy } from "lucide-react"

function HomePage() {
  const { t } = useTranslation()

  const features = [
    {
      to: "/history",
      icon: BookOpen,
      title: t("home.historyTitle"),
      text: t("home.historyText"),
      imageClass: "history-bg",
    },
    {
      to: "/rules",
      icon: ShieldCheck,
      title: t("home.rulesTitle"),
      text: t("home.rulesText"),
      imageClass: "rules-bg",
    },
    {
      to: "/teams",
      icon: Trophy,
      title: t("home.teamsTitle"),
      text: t("home.teamsText"),
      imageClass: "teams-bg",
    },
    {
      to: "/schedule",
      icon: CalendarDays,
      title: t("home.scheduleTitle"),
      text: t("home.scheduleText"),
      imageClass: "schedule-bg",
    },
  ]

  return (
    <section className="page">
      <div className="hero-section home-hero">
        <div>
          <p className="eyebrow">{t("home.eyebrow")}</p>
          <h1>{t("home.title")}</h1>
          <p className="hero-description">{t("home.description")}</p>

          <div className="home-hero-actions">
            <Link to="/teams" className="primary-link">
              Explore Teams
            </Link>
            <Link to="/schedule" className="secondary-button">
              View Schedule
            </Link>
          </div>
        </div>
        <div className="home-hero-panel">
        <div className="hero-panel-overlay">
            <strong>2026</strong>
            <p>Canada · Mexico · United States</p>
        </div>
        </div>
      </div>

      <div className="card-grid">
        {features.map((feature) => {
          const Icon = feature.icon

            return (
              <Link
                key={feature.to}
                to={feature.to}
                className={`feature-card hover-image-card ${feature.imageClass}`}
              >
              <div className="feature-icon">
                <Icon size={22} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default HomePage