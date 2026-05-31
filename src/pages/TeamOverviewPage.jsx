import { useOutletContext } from "react-router-dom"

function TeamOverviewPage() {
  const { team } = useOutletContext()

  return (
    <div className="placeholder-card">
      <h3>Team Overview</h3>
      <p>{team.description}</p>

      <div className="info-list">
        <p>
          <strong>Confederation:</strong> {team.region}
        </p>
        <p>
          <strong>Short Name:</strong> {team.shortName}
        </p>
        <p>
          <strong>FIFA Ranking:</strong> {team.ranking}
        </p>
        <p>
          <strong>World Cup Appearances:</strong> {team.appearances}
        </p>
        <p>
          <strong>Best World Cup Result:</strong> {team.bestResult}
        </p>
        <p>
          <strong>Head Coach:</strong> {team.coach}
        </p>
      </div>
    </div>
  )
}

export default TeamOverviewPage