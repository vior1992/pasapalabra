import React from 'react';

function Input(props) {
    return (
        <div>
            <input
                type='text'
                placeholder='Introduce tu nombre'
                onChange={() => null}
            >
            </input>
        </div>
    )
}

export default Input