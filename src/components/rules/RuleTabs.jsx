import { useMemo, useState } from "react"
import { BookOpen, Flag, ShieldAlert } from "lucide-react"

import { rules } from "../../data/rules"
import PitchDiagram from "./PitchDiagram"
import OffsideDiagram from "./OffsideDiagram"

function RuleTabs() {
  const [activeRuleId, setActiveRuleId] = useState("basic")

  const activeRule = useMemo(() => {
    return rules.find((rule) => rule.id === activeRuleId) || rules[0]
  }, [activeRuleId])

  return (
    <div className="rules-layout">
      <aside className="rules-tabs">
        {rules.map((rule) => (
          <button
            key={rule.id}
            type="button"
            className={
              activeRuleId === rule.id ? "rule-tab active" : "rule-tab"
            }
            onClick={() => setActiveRuleId(rule.id)}
          >
            <span>{rule.title}</span>
            <small>{rule.category}</small>
          </button>
        ))}
      </aside>

      <div className="rules-content">
        <div className="rule-main-card">
          <div className="rule-card-header">
            <div className="rule-icon">
              {activeRule.id === "cards" ? (
                <ShieldAlert size={22} />
              ) : activeRule.id === "set-pieces" ? (
                <Flag size={22} />
              ) : (
                <BookOpen size={22} />
              )}
            </div>

            <div>
              <p className="eyebrow">{activeRule.category}</p>
              <h2>{activeRule.title}</h2>
            </div>
          </div>

          <p className="rule-summary">{activeRule.summary}</p>

          <ul className="rule-point-list">
            {activeRule.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        {activeRule.id === "pitch" && (
          <div className="placeholder-card">
            <h3>Pitch Diagram</h3>
            <p className="small-note">
              A simple visual explanation of the main football pitch areas.
            </p>
            <PitchDiagram />
          </div>
        )}

        {activeRule.id === "offside" && (
          <div className="placeholder-card">
            <h3>Offside Diagram</h3>
            <p className="small-note">
              This simplified diagram shows how the offside line is related to
              the second-last defender.
            </p>
            <OffsideDiagram />
          </div>
        )}

        {activeRule.id === "cards" && (
          <div className="card-rule-grid">
            <div className="card-rule yellow-card-box">
              <span>Yellow Card</span>
              <strong>Warning</strong>
              <p>A player is cautioned but can continue playing.</p>
            </div>

            <div className="card-rule red-card-box">
              <span>Red Card</span>
              <strong>Sent Off</strong>
              <p>The player leaves the match and cannot be replaced.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RuleTabs