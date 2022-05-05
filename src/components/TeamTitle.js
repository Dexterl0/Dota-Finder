import React from 'react'
import "./TeamTitle.css"

function TeamTitle({ team }) {
    return (
        <div className="team-title">
            <h1>{team} Team</h1>
        </div>
    )
}

export default TeamTitle