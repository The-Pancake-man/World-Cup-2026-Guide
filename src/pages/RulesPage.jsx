import { BookOpenCheck } from "lucide-react"
import { rules } from "../data/rules"
import RuleTabs from "../components/rules/RuleTabs"

function RulesPage() {
  return (
    <section className="page">
      <div className="page-heading-row">
        <div>
          <p className="eyebrow">Rules</p>
          <h1>Football Rules</h1>
          <p className="page-description">
            Learn basic football rules with interactive tabs, short
            explanations, and simple diagrams for pitch lines and offside.
          </p>
        </div>

        <div className="summary-card">
          <BookOpenCheck size={22} />
          <div>
            <strong>{rules.length}</strong>
            <span>rule topics</span>
          </div>
        </div>
      </div>

      <RuleTabs />
    </section>
  )
}

export default RulesPage