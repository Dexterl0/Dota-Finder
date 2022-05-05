import React from 'react'
import "./MatchId.css"

function MatchId({id, winningTeam, formatDuration}) {
  return (
    <div className="match-id">
        <p>Match ID: {id}</p>
        <h2>{winningTeam()} Victory</h2>
        <p>{formatDuration()}</p>
    </div>
  )
}

export default MatchId