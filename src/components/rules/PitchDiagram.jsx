function PitchDiagram() {
  return (
    <div className="pitch-diagram">
      <div className="pitch-halfway-line" />
      <div className="pitch-center-circle" />
      <div className="pitch-center-dot" />

      <div className="pitch-penalty-area left" />
      <div className="pitch-penalty-area right" />

      <div className="pitch-goal-area left" />
      <div className="pitch-goal-area right" />

      <div className="pitch-goal left" />
      <div className="pitch-goal right" />

      <span className="pitch-label halfway">Halfway Line</span>
      <span className="pitch-label center">Center Circle</span>
      <span className="pitch-label left-box">Penalty Area</span>
      <span className="pitch-label right-box">Penalty Area</span>
      <span className="pitch-label touchline">Touchline</span>
      <span className="pitch-label goal-line">Goal Line</span>
    </div>
  )
}

export default PitchDiagram