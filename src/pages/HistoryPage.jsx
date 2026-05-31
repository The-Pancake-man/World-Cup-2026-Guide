import { useMemo } from "react"
import { Award, Globe2, Trophy } from "lucide-react"
import { champions } from "../data/champions"

function HistoryPage() {
  const championStats = useMemo(() => {
    const counts = {}

    champions.forEach((item) => {
      counts[item.champion] = (counts[item.champion] || 0) + 1
    })

    return Object.entries(counts)
      .map(([country, titles]) => ({
        country,
        titles,
      }))
      .sort((a, b) => b.titles - a.titles)
  }, [])

  const latestChampion = champions[champions.length - 1]

  const totalHosts = useMemo(() => {
    return new Set(champions.map((item) => item.host)).size
  }, [])

  return (
    <section className="page">
      <div className="page-heading-row">
        <div>
          <p className="eyebrow">History</p>
          <h1>World Cup History</h1>
          <p className="page-description">
            Learn the basic history of the FIFA World Cup, explore selected past
            champions, and see title statistics calculated from data.
          </p>
        </div>

        <div className="summary-card">
          <Trophy size={22} />
          <div>
            <strong>{champions.length}</strong>
            <span>tournaments shown</span>
          </div>
        </div>
      </div>

      <div className="history-intro-card">
        <div>
          <p className="eyebrow">About the tournament</p>
          <h2>The BIGGEST international football tournament</h2>
          <p>
            The FIFA World Cup is an international football competition contested
            by national teams. It is held every four years and has become one of
            the most watched sporting events in the world. The 2026 tournament
            will be hosted by Canada, Mexico, and the United States.
          </p>
        </div>

        <div className="history-mini-stats">
          <div>
            <Award size={20} />
            <strong>{latestChampion.champion}</strong>
            <span>Latest champion</span>
          </div>

          <div>
            <Globe2 size={20} />
            <strong>{totalHosts}</strong>
            <span>Hosts in this data</span>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <div className="placeholder-card">
          <h3>Selected Past Champions</h3>
          <p className="small-note">
            *Up to the 2022 World Cup
          </p>

          <div className="table-wrapper">
            <table className="basic-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Host</th>
                  <th>Champion</th>
                  <th>Runner-up</th>
                  <th>Note</th>
                </tr>
              </thead>

              <tbody>
                {champions.map((item) => (
                  <tr key={item.year}>
                    <td>{item.year}</td>
                    <td>{item.host}</td>
                    <td>
                      <strong>{item.champion}</strong>
                    </td>
                    <td>{item.runnerUp}</td>
                    <td>{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="placeholder-card">
          <h3>Champion Stats</h3>

          <div className="ranking-list">
            {championStats.map((item, index) => (
              <div key={item.country} className="ranking-item">
                <span>
                  #{index + 1} {item.country}
                </span>
                <strong>{item.titles}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HistoryPage