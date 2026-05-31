import { Link, useParams } from "react-router-dom"
import { ArrowLeft, CalendarDays, MapPin, Star } from "lucide-react"

import { matches } from "../data/matches"
import { useFavorites } from "../context/FavoritesContext"

function MatchDetailPage() {
  const { matchId } = useParams()
  const match = matches.find((item) => item.id === matchId)

  const { toggleFavoriteMatch, isFavoriteMatch } = useFavorites()

  if (!match) {
    return (
      <section className="page">
        <p className="eyebrow">Match Detail</p>
        <h1>Match Not Found</h1>
        <p className="page-description">
          The match you are looking for does not exist.
        </p>

        <Link to="/schedule" className="primary-link">
          Back to Schedule
        </Link>
      </section>
    )
  }

  const favorite = isFavoriteMatch(match.id)

  return (
    <section className="page">
      <Link to="/schedule" className="back-link">
        <ArrowLeft size={16} />
        Back to Schedule
      </Link>

      <div className="match-detail-hero">
        <div>
          <p className="eyebrow">
            {match.group} · Match {match.matchNo}
          </p>

          <h1>
            {match.homeTeam} vs {match.awayTeam}
          </h1>

          <p className="page-description">{match.description}</p>
        </div>

        <button
          type="button"
          className={favorite ? "large-favorite active" : "large-favorite"}
          onClick={() => toggleFavoriteMatch(match.id)}
        >
          <Star size={18} fill={favorite ? "currentColor" : "none"} />
          {favorite ? "Saved" : "Save Match"}
        </button>
      </div>

      <div className="match-detail-grid">
        <div className="placeholder-card">
          <h3>Match Information</h3>

          <div className="info-list">
            <p>
              <CalendarDays size={16} />
              <strong>Date:</strong> {match.date}
            </p>

            <p>
              <strong>Time:</strong> {match.time}
            </p>

            <p>
              <MapPin size={16} />
              <strong>Venue:</strong> {match.venue}
            </p>

            <p>
              <strong>City:</strong> {match.city}
            </p>
          </div>
        </div>

        <div className="placeholder-card">
          <h3>Team Links</h3>
          <p className="small-note">
            If the team exists in the Teams data, you can open its team profile.
          </p>

          <div className="match-links">
            {match.homeTeamId ? (
              <Link to={`/teams/${match.homeTeamId}`} className="primary-link">
                View {match.homeTeam}
              </Link>
            ) : (
              <span className="disabled-pill">{match.homeTeam}</span>
            )}

            {match.awayTeamId ? (
              <Link to={`/teams/${match.awayTeamId}`} className="primary-link">
                View {match.awayTeam}
              </Link>
            ) : (
              <span className="disabled-pill">{match.awayTeam}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MatchDetailPage