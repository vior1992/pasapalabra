import React from 'react';

function Input(props) {
    return (
        <div>
            <input
                type='text'
                placeholder='Introduce tu nombre'
                maxLength='22'
                onChange={e => props.setPlayerName(e.target.value) }
            />
        </div>
    )
}

export default Input