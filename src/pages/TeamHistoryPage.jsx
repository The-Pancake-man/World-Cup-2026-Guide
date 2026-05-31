import { useOutletContext } from "react-router-dom"

function TeamHistoryPage() {
  const { team } = useOutletContext()

  return (
    <div className="placeholder-card">
      <h3>World Cup History</h3>
      <p>{team.history}</p>

      <div className="history-highlight-grid">
        <div className="history-highlight-card">
          <span>Best Result</span>
          <strong>{team.bestResult}</strong>
        </div>

        <div className="history-highlight-card">
          <span>Appearances</span>
          <strong>{team.appearances}</strong>
        </div>

        <div className="history-highlight-card">
          <span>Current Ranking</span>
          <strong>{team.ranking}</strong>
        </div>
      </div>
    </div>
  )
}

export default TeamHistoryPage