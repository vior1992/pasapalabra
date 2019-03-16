import React, { useContext } from 'react';
import { PlayerContext } from '../../Store';

const HeaderPlayername = () => {
    const [playerName, , playMode] = useContext(PlayerContext)

    return (
        <div>
            {playMode 
                ?
                    <h4>{playerName}</h4>
                :
                    <h1>Playername</h1>
            }
        </div>
    )
}

export default HeaderPlayername
