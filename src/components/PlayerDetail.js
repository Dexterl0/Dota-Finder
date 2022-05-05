import React from 'react'
import "./PlayerDetail.css"

function PlayerDetail({ hero_icon, kills, net_worth, deaths, gold_per_min, assists, xp_per_min, last_hits, hero_damage }) {

    const formatStat = (stat) => {
        const statString = stat.toString();
        if (statString.length > 3) {
            let nums = "";
            for (let i = 0; i < statString.length; i++) {
                nums = nums.concat(statString[i]);
            }
            const numSplit1 = nums.slice(0, -3);
            const numSplit2 = nums.slice(-3, -2);

            const formattedStat = numSplit1 + "." + numSplit2 + "k";

            return formattedStat;
        } else {
            return statString;
        }
    }

    return (
        <div className="player-detail">
            <div className="hero-img">
                <img src={`https://api.opendota.com${hero_icon}`} alt="" />
            </div>
            <div className="stats-column">
                <div>
                    <p className="stats-key">K</p>
                    <p>{kills}</p>
                </div>
                <div>
                    <p className="stats-key">NW</p>
                    <p>{formatStat(net_worth)}</p>
                </div>
            </div>
            <div className="stats-column">
                <div>
                    <p className="stats-key">D</p>
                    <p>{deaths}</p>
                </div>
                <div>
                    <p className="stats-key">GPM</p>
                    <p>{gold_per_min}</p>
                </div>
            </div>
            <div className="stats-column">
                <div>
                    <p className="stats-key">A</p>
                    <p>{assists}</p>
                </div>
                <div>
                    <p className="stats-key">XPM</p>
                    <p>{xp_per_min}</p>
                </div>
            </div>
            <div className="stats-column">
                <div>
                    <p className="stats-key">LH</p>
                    <p>{last_hits}</p>
                </div>
                <div>
                    <p className="stats-key">DMG</p>
                    <p>{formatStat(hero_damage)}</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerDetail