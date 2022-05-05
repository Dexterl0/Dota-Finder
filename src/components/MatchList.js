import React, { useState, useEffect } from 'react'
import MatchPreview from './MatchPreview';
import Nav from './Nav';

function MatchList() {
  const [matchList, setMatchList] = useState(null);

  const getMatches = async () => {
    const matches = await fetch("https://api.opendota.com/api/proMatches");
    const matchesJson = await matches.json();
    setMatchList(matchesJson);
  }

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div>
      <Nav button="search" />
      {matchList ? matchList.map((match) => {
        return <MatchPreview
          key={match.match_id}
          matchId={match.match_id}
          radiantTeam={match.radiant_name}
          direTeam={match.dire_name}
        />
      })
        :
        <p className="loading">Loading...</p>
      }
    </div>
  )
}

export default MatchList