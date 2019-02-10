import React from 'react';

function StopButton(props) {    
    return (
        <div>
            <button onClick={e => {
                props.setPlayMode(false)
                props.setPlayerName(null)
            }}>
                Stop
            </button>
        </div>
    )
}

export default StopButton