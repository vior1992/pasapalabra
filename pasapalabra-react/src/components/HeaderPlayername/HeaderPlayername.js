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
                    ""
            }
        </div>
    );
};

export default HeaderPlayername
