import { Link } from "react-router-dom"
import { CalendarDays, Star, Trophy } from "lucide-react"

import { teams } from "../data/teams"
import { matches } from "../data/matches"
import { useFavorites } from "../context/FavoritesContext"

function FavoritesPage() {
  const {
    favoriteTeamIds,
    favoriteMatchIds,
    toggleFavoriteTeam,
    toggleFavoriteMatch,
  } = useFavorites()

  const favoriteTeams = teams.filter((team) => favoriteTeamIds.includes(team.id))

  const favoriteMatches = matches.filter((match) =>
    favoriteMatchIds.includes(match.id)
  )

  const hasNoFavorites =
    favoriteTeams.length === 0 && favoriteMatches.length === 0

  return (
    <section className="page">
      <p className="eyebrow">Favorites</p>
      <h1>My Watchlist</h1>
      <p className="page-description">
        Save your favorite teams and matches. The data is stored in
        localStorage, so it stays after refreshing the page.
      </p>

      {hasNoFavorites && (
        <div className="placeholder-card empty-favorites">
          <Star size={32} />
          <h3>No favorites yet</h3>
          <p>
            Go to Teams or Schedule and click the star button to save something
            here.
          </p>

          <div className="match-links">
            <Link to="/teams" className="primary-link">
              Browse Teams
            </Link>

            <Link to="/schedule" className="primary-link">
              Browse Schedule
            </Link>
          </div>
        </div>
      )}

      {!hasNoFavorites && (
        <div className="favorites-layout">
          <div className="placeholder-card">
            <div className="section-heading-row">
              <div>
                <h3>Favorite Teams</h3>
                <p className="small-note">
                  Teams you saved from the national teams page.
                </p>
              </div>

              <div className="squad-count">
                <strong>{favoriteTeams.length}</strong>
                <span>teams</span>
              </div>
            </div>

            {favoriteTeams.length === 0 ? (
              <div className="empty-box">
                <h4>No favorite teams</h4>
                <p>You have not saved any teams yet.</p>
              </div>
            ) : (
              <div className="favorite-list">
                {favoriteTeams.map((team) => (
                  <div key={team.id} className="favorite-item">
                    <div className="favorite-icon">
                      <Trophy size={18} />
                    </div>

                    <div className="favorite-content">
                      <strong>{team.name}</strong>
                      <span>
                        {team.region} · Ranking {team.ranking}
                      </span>
                    </div>

                    <div className="favorite-actions">
                      <Link to={`/teams/${team.id}`} className="mini-link">
                        Detail
                      </Link>

                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => toggleFavoriteTeam(team.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="placeholder-card">
            <div className="section-heading-row">
              <div>
                <h3>Favorite Matches</h3>
                <p className="small-note">
                  Matches you saved from the schedule page.
                </p>
              </div>

              <div className="squad-count">
                <strong>{favoriteMatches.length}</strong>
                <span>matches</span>
              </div>
            </div>

            {favoriteMatches.length === 0 ? (
              <div className="empty-box">
                <h4>No favorite matches</h4>
                <p>You have not saved any matches yet.</p>
              </div>
            ) : (
              <div className="favorite-list">
                {favoriteMatches.map((match) => (
                  <div key={match.id} className="favorite-item">
                    <div className="favorite-icon">
                      <CalendarDays size={18} />
                    </div>

                    <div className="favorite-content">
                      <strong>
                        {match.homeTeam} vs {match.awayTeam}
                      </strong>
                      <span>
                        {match.date} · {match.venue}
                      </span>
                    </div>

                    <div className="favorite-actions">
                      <Link to={`/schedule/${match.id}`} className="mini-link">
                        Detail
                      </Link>

                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => toggleFavoriteMatch(match.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default FavoritesPage