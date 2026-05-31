export const rules = [
  {
    id: "basic",
    title: "Basic Rules",
    category: "General",
    summary:
      "A football match is played by two teams of 11 players. The team that scores more goals wins.",
    points: [
      "Each team has 11 players, including one goalkeeper.",
      "The match is usually 90 minutes, divided into two halves.",
      "Players cannot use their hands or arms, except the goalkeeper inside the penalty area.",
      "The ball is out of play when it fully crosses the touchline or goal line.",
    ],
  },
  {
    id: "pitch",
    title: "Pitch Lines",
    category: "Field",
    summary:
      "The pitch includes touchlines, goal lines, the halfway line, center circle, penalty areas, goal areas, and corner arcs.",
    points: [
      "Touchlines are the long boundary lines.",
      "Goal lines are the short boundary lines.",
      "The halfway line divides the pitch into two halves.",
      "The penalty area is where the goalkeeper can use hands and where penalty kicks may be awarded.",
      "Corner arcs are used for corner kicks.",
    ],
  },
  {
    id: "offside",
    title: "Offside Rule",
    category: "Attack",
    summary:
      "A player may be offside if they are nearer to the opponent's goal than the second-last defender when the ball is played to them.",
    points: [
      "Offside is judged at the moment the pass is made.",
      "The attacker must be involved in active play.",
      "A player is not offside if they are level with the second-last defender.",
      "There is no offside from a throw-in, corner kick, or goal kick.",
    ],
  },
  {
    id: "cards",
    title: "Yellow and Red Cards",
    category: "Discipline",
    summary:
      "Cards are used by the referee to control fouls, misconduct, and dangerous play.",
    points: [
      "A yellow card is a warning.",
      "Two yellow cards result in a red card.",
      "A red card means the player is sent off.",
      "A team with a red-carded player must continue with fewer players.",
    ],
  },
  {
    id: "set-pieces",
    title: "Set Pieces",
    category: "Restart",
    summary:
      "Free kicks, penalty kicks, corner kicks, throw-ins, and goal kicks are common ways to restart play.",
    points: [
      "A free kick is awarded after a foul or rule violation.",
      "A penalty kick is awarded for certain fouls inside the penalty area.",
      "A corner kick is awarded when the defending team last touches the ball before it crosses its own goal line.",
      "A throw-in is used when the ball crosses the touchline.",
    ],
  },
  {
    id: "extra-time",
    title: "Extra Time and Penalties",
    category: "Knockout",
    summary:
      "In knockout matches, if the game is tied after 90 minutes, extra time and penalties may be used.",
    points: [
      "Extra time usually has two 15-minute halves.",
      "If the match remains tied, it may go to a penalty shootout.",
      "Each team usually takes five penalties first.",
      "If still tied, sudden-death penalties continue.",
    ],
  },
]