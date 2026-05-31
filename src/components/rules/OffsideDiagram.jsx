function OffsideDiagram() {
  return (
    <div className="offside-diagram">
      <div className="offside-goal">Goal</div>

      <div className="offside-line">
        <span>Second-last defender line</span>
      </div>

      <div className="player passer">PASS</div>
      <div className="ball">●</div>
      <div className="pass-line" />

      <div className="player defender defender-one">DF</div>
      <div className="player defender defender-two">DF</div>

      <div className="player attacker legal">ATK</div>
      <div className="player attacker offside">ATK</div>

      <div className="player goalkeeper">GK</div>

      <div className="offside-note legal-note">
        Onside: level with or behind the second-last defender
      </div>

      <div className="offside-note offside-note-text">
        Possible offside: closer to goal when the pass is made
      </div>
    </div>
  )
}

export default OffsideDiagram