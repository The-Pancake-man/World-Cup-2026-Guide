import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { Award, Globe2, Trophy } from "lucide-react"
import { champions } from "../data/champions"

function HistoryPage() {
  const { t } = useTranslation()
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
          <p className="eyebrow">{t("history.eyebrow")}</p>
          <h1>{t("history.title")}</h1>
          <p className="page-description">
            {t("history.description")}
          </p>
        </div>

        <div className="summary-card">
          <Trophy size={22} />
          <div>
            <strong>{champions.length}</strong>
            <span>{t("history.tournamentsShown")}</span>
          </div>
        </div>
      </div>

      <div className="history-intro-card">
        <div>
          <p className="eyebrow">{t("history.about")}</p>
          <h2>{t("history.introTitle")}</h2>
          <p>
            {t("history.introText")}
          </p>
        </div>

        <div className="history-mini-stats">
          <div>
            <Award size={20} />
            <strong>{latestChampion.champion}</strong>
            <span>{t("history.latestChampion")}</span>
          </div>

          <div>
            <Globe2 size={20} />
            <strong>{totalHosts}</strong>
            <span>{t("history.hostsInData")}</span>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <div className="placeholder-card">
          <h3>{t("history.selectedChampions")}</h3>
          <p className="small-note">
            {t("history.selectedChampionsNote")}
          </p>

          <div className="table-wrapper">
            <table className="basic-table">
              <thead>
                <tr>
                  <th>{t("history.year")}</th>
                  <th>{t("history.host")}</th>
                  <th>{t("history.champion")}</th>
                  <th>{t("history.runnerUp")}</th>
                  <th>{t("history.note")}</th>
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
                    <td>{t(`history.notes.${item.year}`)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="placeholder-card">
          <h3>{t("history.championStats")}</h3>

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