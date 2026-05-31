import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
  Home,
  History,
  Dumbbell,
  Trophy,
  CalendarDays,
  Star,
  Settings,
} from "lucide-react"

import CountdownCard from "../countdown/CountdownCard"

function Sidebar() {
  const { t } = useTranslation()

  const navItems = [
    {
      to: "/",
      label: t("nav.home"),
      icon: Home,
      end: true,
    },
    {
      to: "/history",
      label: t("nav.history"),
      icon: History,
    },
    {
      to: "/rules",
      label: t("nav.rules"),
      icon: Dumbbell,
    },
    {
      to: "/teams",
      label: t("nav.teams"),
      icon: Trophy,
    },
    {
      to: "/schedule",
      label: t("nav.schedule"),
      icon: CalendarDays,
    },
    {
      to: "/favorites",
      label: t("nav.favorites"),
      icon: Star,
    },
    {
      to: "/settings",
      label: t("nav.settings"),
      icon: Settings,
    },
  ]

  return (
    <aside className="sidebar">
      <CountdownCard />

      <div className="sidebar-title">
        <span className="sidebar-logo">🏆</span>
        <div>
          <h1>{t("app.title")}</h1>
          <p>{t("app.subtitle")}</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar