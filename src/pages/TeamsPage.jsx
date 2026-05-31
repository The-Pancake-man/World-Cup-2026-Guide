import { Link } from "react-router-dom"
import { useMemo, useRef, useState } from "react"
import { Search, SlidersHorizontal, Star, Trophy } from "lucide-react"

import { teams } from "../data/teams"
import { useFavorites } from "../context/FavoritesContext"

function TeamsPage() {
  const { toggleFavoriteTeam, isFavoriteTeam } = useFavorites()

  const searchInputRef = useRef(null)

  const [searchText, setSearchText] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("All")
  const [sortBy, setSortBy] = useState("ranking")

  const regions = useMemo(() => {
    return ["All", ...new Set(teams.map((team) => team.region))]
  }, [])

  const filteredTeams = useMemo(() => {
    const keyword = searchText.trim().toLowerCase()

    let result = teams.filter((team) => {
      const matchesSearch =
        team.name.toLowerCase().includes(keyword) ||
        team.shortName.toLowerCase().includes(keyword) ||
        team.region.toLowerCase().includes(keyword)

      const matchesRegion =
        selectedRegion === "All" || team.region === selectedRegion

      return matchesSearch && matchesRegion
    })

    if (sortBy === "ranking") {
      result = [...result].sort((a, b) => a.ranking - b.ranking)
    }

    if (sortBy === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name))
    }

    if (sortBy === "appearances") {
      result = [...result].sort((a, b) => b.appearances - a.appearances)
    }

    return result
  }, [searchText, selectedRegion, sortBy])

  function handleClearFilters() {
    setSearchText("")
    setSelectedRegion("All")
    setSortBy("ranking")
    searchInputRef.current?.focus()
  }

  return (
    <section className="page">
      <div className="page-heading-row">
        <div>
          <p className="eyebrow">Teams</p>
          <h1>National Teams</h1>
          <p className="page-description">
            Browse national teams, filter by confederation, sort by ranking,
            and save favorite teams.
          </p>
        </div>

        <div className="summary-card">
          <Trophy size={22} />
          <div>
            <strong>{filteredTeams.length}</strong>
            <span>teams shown</span>
          </div>
        </div>
      </div>

      <div className="filter-panel">
        <div className="filter-title">
          <SlidersHorizontal size={18} />
          <span>Filters</span>
        </div>

        <div className="filter-group">
          <label>Search</label>
          <div className="input-with-icon">
            <Search size={16} />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search Mexico, ARG, UEFA..."
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </div>
        </div>

        <div className="filter-group">
          <label>Region</label>
          <select
            value={selectedRegion}
            onChange={(event) => setSelectedRegion(event.target.value)}
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Sort by</label>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="ranking">FIFA Ranking</option>
            <option value="name">Team Name</option>
            <option value="appearances">World Cup Appearances</option>
          </select>
        </div>

        <button className="secondary-button" onClick={handleClearFilters}>
          Reset
        </button>
      </div>

      {filteredTeams.length === 0 ? (
        <div className="placeholder-card">
          <h3>No teams found</h3>
          <p>Please try another keyword, region, or sorting option.</p>
        </div>
      ) : (
        <div className="team-grid">
          {filteredTeams.map((team) => {
            const favorite = isFavoriteTeam(team.id)

            return (
              <article key={team.id} className="team-card">
                <div className="team-card-top">
                  <div className="team-badge">{team.shortName}</div>

                  <div className="team-card-actions">
                    <span className="team-region">{team.region}</span>

                    <button
                      type="button"
                      className={
                        favorite
                          ? "favorite-button active"
                          : "favorite-button"
                      }
                      onClick={() => toggleFavoriteTeam(team.id)}
                      aria-label="Toggle favorite team"
                    >
                      <Star
                        size={17}
                        fill={favorite ? "currentColor" : "none"}
                      />
                    </button>
                  </div>
                </div>

                <h3>{team.name}</h3>

                <p className="team-description">{team.description}</p>

                <div className="team-card-stats">
                  <div>
                    <span>Ranking</span>
                    <strong>{team.ranking}</strong>
                  </div>

                  <div>
                    <span>Appearances</span>
                    <strong>{team.appearances}</strong>
                  </div>

                  <div>
                    <span>Best</span>
                    <strong>{team.bestResult}</strong>
                  </div>
                </div>

                <Link to={`/teams/${team.id}`} className="text-link">
                  View team detail →
                </Link>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default TeamsPage