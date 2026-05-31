import { useTranslation } from "react-i18next"
import useCountdown from "../../hooks/useCountdown"

const WORLD_CUP_OPENING_DATE = "2026-06-11T19:00:00-06:00"

function formatNumber(number) {
  return String(number).padStart(2, "0")
}

function CountdownCard() {
  const { t } = useTranslation()

  const { days, hours, minutes, seconds, isExpired } = useCountdown(
    WORLD_CUP_OPENING_DATE
  )

  return (
    <div className="countdown-card">
      <div className="countdown-card-header">
        <span className="countdown-icon">⏳</span>
        <div>
          <p className="countdown-label">{t("countdown.title")}</p>
          <p className="countdown-subtitle">{t("countdown.subtitle")}</p>
        </div>
      </div>

      {isExpired ? (
        <div className="countdown-expired">
          <h2>{t("countdown.expiredTitle")}</h2>
          <p>{t("countdown.expiredText")}</p>
        </div>
      ) : (
        <>
          <div className="countdown-days-box">
            <span className="countdown-days-number">{days}</span>
            <span className="countdown-days-text">{t("countdown.days")}</span>
          </div>

          <div className="countdown-time-grid">
            <div className="countdown-time-item">
              <span>{formatNumber(hours)}</span>
              <small>{t("countdown.hours")}</small>
            </div>

            <div className="countdown-time-item">
              <span>{formatNumber(minutes)}</span>
              <small>{t("countdown.minutes")}</small>
            </div>

            <div className="countdown-time-item">
              <span>{formatNumber(seconds)}</span>
              <small>{t("countdown.seconds")}</small>
            </div>
          </div>
        </>
      )}

      <div className="countdown-match-info">
        <p className="countdown-match-title">{t("countdown.openingMatch")}</p>
        <p className="countdown-match-teams">{t("countdown.match")}</p>
        <p className="countdown-match-date">{t("countdown.date")}</p>
      </div>
    </div>
  )
}

export default CountdownCard