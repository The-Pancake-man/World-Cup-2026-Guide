import { useMemo, useState } from "react"
import { useOutletContext } from "react-router-dom"
import { players } from "../data/players"

function TeamSquadPage() {
  const { team } = useOutletContext()
  const [selectedPosition, setSelectedPosition] = useState("All")
  const [sortBy, setSortBy] = useState("position")

  const teamPlayers = useMemo(() => {
    return players.filter((player) => player.teamId === team.id)
  }, [team.id])

  const positions = useMemo(() => {
    return ["All", ...new Set(teamPlayers.map((player) => player.position))]
  }, [teamPlayers])

  const filteredPlayers = useMemo(() => {
    let result = teamPlayers

    if (selectedPosition !== "All") {
      result = result.filter((player) => player.position === selectedPosition)
    }

    if (sortBy === "age") {
      result = [...result].sort((a, b) => a.age - b.age)
    }

    if (sortBy === "name") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name))
    }

    if (sortBy === "position") {
      const order = {
        Goalkeeper: 1,
        Defender: 2,
        Midfielder: 3,
        Forward: 4,
      }

      result = [...result].sort(
        (a, b) => (order[a.position] || 99) - (order[b.position] || 99)
      )
    }

    return result
  }, [teamPlayers, selectedPosition, sortBy])

  return (
    <div className="placeholder-card">
      <div className="section-heading-row">
        <div>
          <h3>Squad</h3>
          <p className="small-note">
            The official list shall prevail.
          </p>
        </div>

        <div className="squad-count">
          <strong>{filteredPlayers.length}</strong>
          <span>players</span>
        </div>
      </div>

      <div className="inline-filter">
        <label>Position:</label>
        <select
          value={selectedPosition}
          onChange={(event) => setSelectedPosition(event.target.value)}
        >
          {positions.map((position) => (
            <option key={position} value={position}>
              {position}
            </option>
          ))}
        </select>

        <label>Sort:</label>
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="position">Position</option>
          <option value="name">Name</option>
          <option value="age">Age</option>
        </select>
      </div>

      {filteredPlayers.length === 0 ? (
        <div className="empty-box">
          <h4>No players found</h4>
          <p>Please choose another position.</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="basic-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Club</th>
                <th>Age</th>
              </tr>
            </thead>

            <tbody>
              {filteredPlayers.map((player) => (
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td>
                    <span className="position-badge">{player.position}</span>
                  </td>
                  <td>{player.club}</td>
                  <td>{player.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default TeamSquadPage