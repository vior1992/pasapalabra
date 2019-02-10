import React from 'react';

function PlayButton(props) {
    const buttonName = 'Play'
    
    return (
        <div>
            <button onClick={e => props.setPlayMode(true) }>
                {buttonName}
            </button>
        </div>
    )
}

export default PlayButton