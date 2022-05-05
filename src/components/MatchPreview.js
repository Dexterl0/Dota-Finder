import React from 'react'
import { Link } from 'react-router-dom'
import "./MatchPreview.css"

function MatchPreview({ matchId, radiantTeam, direTeam }) {
    return (
        <Link className="match-preview-link" to={`/match/${matchId}`}>
            <div className="match-preview">
                <p className="match-preview-id">Match ID: {matchId}</p>
                <div className="match-preview-teams">
                    <div className="match-preview-radiant">
                        <p>Radiant Team:</p>
                        <p>{radiantTeam ? radiantTeam : "Radiant"}</p>
                    </div>
                    <div className="match-preview-vs">
                        <h2>VS</h2>
                    </div>
                    <div className="match-preview-dire">
                        <p>Dire Team:</p>
                        <p>{direTeam ? direTeam : "Dire"}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MatchPreview