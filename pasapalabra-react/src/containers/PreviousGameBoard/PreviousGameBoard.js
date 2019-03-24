import React, { useState, useContext } from 'react';
import { PlayerContext } from '../../Store';
import Header from '../Header';
import Input from '../../components/Input';

const PreviousGameBoard = () => {
    const [, setPlayerName, ,setPlayMode] = useContext(PlayerContext);
    const [inputPlayerName, setInputPlayerName] = useState('');
    const [countdownModal, setCountdownModal] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [playerReady, setPlayerReady] = useState(false);
    
    const instruccions = 'The game consists of matching the twenty-five words, each of which corresponds to a letter of the alphabet for which a definition of a concept is given. The successes will be reflected in the letters by means of the green color, whereas the failures will be shown in red color. Unanswered questions or "pasapalabra" will be shown in yellow. A time of five minutes is available to complete the game.'
    let _countdown = 5
    
    const handlePlayerName = e => {
        e.preventDefault()

        setCountdownModal(true)
    };

    const handlePlayerReady = () => {
        setPlayerReady(true)

        const countdownInterval = setInterval(() => {
            _countdown = _countdown - 1
            setCountdown(_countdown)

            if (_countdown === 0) {
                clearInterval(countdownInterval);
                _countdown = 5;
                setPlayerName(inputPlayerName);
                setPlayMode(true);
            }
        }, 1000);
    };

    return (
        <div>
            <Header />
            {!countdownModal 
                ?
                    <div> 
                        <h1>{instruccions}</h1>
                        <form onSubmit={e => handlePlayerName(e)}>
                            <Input 
                                customInputType='text'
                                customInputClassName='input-classname'
                                customInputPlaceholder='introduce your playername'
                                customInputValue={inputPlayerName}
                                customInputfunctionality={e => setInputPlayerName(e.target.value)}
                            />
                            <button>
                                Ready
                            </button>
                        </form>
                    </div>
                :
                    <div>
                        {playerReady 
                            ?
                                <h1>{countdown}</h1>
                            :
                                <h1>Ready?</h1>
                        }
                        <button onClick={() => handlePlayerReady()}>
                            Play
                        </button>
                    </div>
            }
        </div>
    );
};

export default PreviousGameBoard