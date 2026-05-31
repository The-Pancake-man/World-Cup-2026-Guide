import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import { ArrowLeft, Star } from "lucide-react"

import { teams } from "../data/teams"
import { useFavorites } from "../context/FavoritesContext"

function TeamDetailPage() {
  const { teamId } = useParams()
  const team = teams.find((item) => item.id === teamId)

  const { toggleFavoriteTeam, isFavoriteTeam } = useFavorites()

  if (!team) {
    return (
      <section className="page">
        <p className="eyebrow">Team Detail</p>
        <h1>Team Not Found</h1>
        <p className="page-description">
          The team you are looking for does not exist.
        </p>

        <Link to="/teams" className="primary-link">
          Back to Teams
        </Link>
      </section>
    )
  }

  const favorite = isFavoriteTeam(team.id)

  return (
    <section className="page">
      <Link to="/teams" className="back-link">
        <ArrowLeft size={16} />
        Back to Teams
      </Link>

      <div className="team-hero">
        <div className="team-hero-badge">{team.shortName}</div>

        <div>
          <p className="eyebrow">{team.region}</p>
          <h1>{team.name}</h1>
          <p className="page-description">{team.description}</p>
        </div>

        <button
          type="button"
          className={favorite ? "large-favorite active" : "large-favorite"}
          onClick={() => toggleFavoriteTeam(team.id)}
        >
          <Star size={18} fill={favorite ? "currentColor" : "none"} />
          {favorite ? "Saved" : "Save Team"}
        </button>
      </div>

      <div className="stat-grid">
        <div className="stat-card">
          <span>FIFA Ranking</span>
          <strong>{team.ranking}</strong>
        </div>

        <div className="stat-card">
          <span>Appearances</span>
          <strong>{team.appearances}</strong>
        </div>

        <div className="stat-card">
          <span>Best Result</span>
          <strong>{team.bestResult}</strong>
        </div>

        <div className="stat-card">
          <span>Coach</span>
          <strong>{team.coach}</strong>
        </div>
      </div>

      <div className="tab-nav">
        <NavLink
          to={`/teams/${teamId}`}
          end
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          Overview
        </NavLink>

        <NavLink
          to={`/teams/${teamId}/squad`}
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          Squad
        </NavLink>

        <NavLink
          to={`/teams/${teamId}/history`}
          className={({ isActive }) =>
            isActive ? "tab-link active" : "tab-link"
          }
        >
          History
        </NavLink>
      </div>

      <div className="nested-page">
        <Outlet context={{ team }} />
      </div>
    </section>
  )
}

export default TeamDetailPage