import React, {useState} from 'react';

export const PlayerContext = React.createContext({
    playerName: '',
    playMode: false
});

const Store = ({children}) => {
    const [playerName, setPlayerName] = useState('');
    const [playMode, setPlayMode] = useState('')

    return (
        <PlayerContext.Provider value={[
            playerName, 
            setPlayerName,
            playMode,
            setPlayMode
        ]}>
            {children}
        </PlayerContext.Provider>
    )
}

export default Store;