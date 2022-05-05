import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Nav.css"

function Nav({ button }) {
  const navigate = useNavigate();

  const [matchId, setMatchId] = useState(null);

  const handleClick = () => {
    navigate(`/match/${matchId}`);
    setMatchId("");
  }

  return (
    <div className="nav">
      <Link className="nav-link" to="/">
        <h1>Dota 2 Finder</h1>
      </Link>
      {button === "search" &&
        <>
          <input type="text" value={matchId} onChange={(e) => { setMatchId(e.target.value) }} />
          <button onClick={handleClick}>Find Match</button>
        </>}
      {button === "back" &&
        <Link to="/"><i className="fa-solid fa-arrow-left back-button"></i></Link>}
    </div>
  )
}

export default Nav