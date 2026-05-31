import { Link } from "react-router-dom"
import { useMemo, useState } from "react"
import {
  CalendarDays,
  Search,
  SlidersHorizontal,
  Star,
  MapPin,
} from "lucide-react"

import { matches } from "../data/matches"
import { useFavorites } from "../context/FavoritesContext"

function SchedulePage() {
  const { toggleFavoriteMatch, isFavoriteMatch } = useFavorites()

  const [searchText, setSearchText] = useState("")
  const [selectedGroup, setSelectedGroup] = useState("All")
  const [selectedDate, setSelectedDate] = useState("All")
  const [selectedVenue, setSelectedVenue] = useState("All")

  const groups = useMemo(() => {
    return ["All", ...new Set(matches.map((match) => match.group))]
  }, [])

  const dates = useMemo(() => {
    return ["All", ...new Set(matches.map((match) => match.date))]
  }, [])

  const venues = useMemo(() => {
    return ["All", ...new Set(matches.map((match) => match.venue))]
  }, [])

  const filteredMatches = useMemo(() => {
    const keyword = searchText.trim().toLowerCase()

    return matches.filter((match) => {
      const searchableText = `
        ${match.homeTeam}
        ${match.awayTeam}
        ${match.group}
        ${match.venue}
        ${match.city}
      `.toLowerCase()

      const matchesSearch = searchableText.includes(keyword)

      const matchesGroup =
        selectedGroup === "All" || match.group === selectedGroup

      const matchesDate = selectedDate === "All" || match.date === selectedDate

      const matchesVenue =
        selectedVenue === "All" || match.venue === selectedVenue

      return matchesSearch && matchesGroup && matchesDate && matchesVenue
    })
  }, [searchText, selectedGroup, selectedDate, selectedVenue])

  function handleResetFilters() {
    setSearchText("")
    setSelectedGroup("All")
    setSelectedDate("All")
    setSelectedVenue("All")
  }

  return (
    <section className="page">
      <div className="page-heading-row">
        <div>
          <p className="eyebrow">Schedule</p>
          <h1>Match Schedule</h1>
          <p className="page-description">
            Browse featured World Cup matches, filter by group, date, or venue,
            and save matches to your watchlist.
          </p>
        </div>

        <div className="summary-card">
          <CalendarDays size={22} />
          <div>
            <strong>{filteredMatches.length}</strong>
            <span>matches shown</span>
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
              type="text"
              placeholder="Search team, city, venue..."
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </div>
        </div>

        <div className="filter-group">
          <label>Group</label>
          <select
            value={selectedGroup}
            onChange={(event) => setSelectedGroup(event.target.value)}
          >
            {groups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Date</label>
          <select
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
          >
            {dates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Venue</label>
          <select
            value={selectedVenue}
            onChange={(event) => setSelectedVenue(event.target.value)}
          >
            {venues.map((venue) => (
              <option key={venue} value={venue}>
                {venue}
              </option>
            ))}
          </select>
        </div>

        <button className="secondary-button" onClick={handleResetFilters}>
          Reset
        </button>
      </div>

      {filteredMatches.length === 0 ? (
        <div className="placeholder-card">
          <h3>No matches found</h3>
          <p>Please try another keyword, group, date, or venue.</p>
        </div>
      ) : (
        <div className="match-grid">
          {filteredMatches.map((match) => {
            const favorite = isFavoriteMatch(match.id)

            return (
              <article key={match.id} className="match-card">
                <div className="match-card-top">
                  <span className="match-group">
                    {match.group} · Match {match.matchNo}
                  </span>

                  <button
                    type="button"
                    className={
                      favorite
                        ? "favorite-button active"
                        : "favorite-button"
                    }
                    onClick={() => toggleFavoriteMatch(match.id)}
                    aria-label="Toggle favorite match"
                  >
                    <Star size={17} fill={favorite ? "currentColor" : "none"} />
                  </button>
                </div>

                <h3>
                  {match.homeTeam} <span>vs</span> {match.awayTeam}
                </h3>

                <div className="match-meta">
                  <p>
                    <CalendarDays size={16} />
                    {match.date} · {match.time}
                  </p>

                  <p>
                    <MapPin size={16} />
                    {match.venue}, {match.city}
                  </p>
                </div>

                <p className="match-description">{match.description}</p>

                <Link to={`/schedule/${match.id}`} className="text-link">
                  View match detail →
                </Link>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default SchedulePage