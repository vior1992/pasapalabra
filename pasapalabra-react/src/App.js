import React, { useContext } from 'react';
import { PlayerContext } from './Store';
import { PreviousGameBoard } from './containers'
// import logic from './logic'

const App = () => {
    const [playerName, , playMode, ] = useContext(PlayerContext);

    if (!playerName && !playMode) return <PreviousGameBoard />
    else if (playerName && playMode) return <h1>GameBoard</h1>
    else if (playerName && !playMode) return <h1>ScoreBoard</h1>
};

export default App
