import React from 'react'
import Header from '../Header'
import Input from '../Input'
import PlayButton from '../PlayButton'

function Landing(props) {
    return (
        <div>
            <Header/>
            <p>place where xplain rules</p>
            <Input setPlayerName={props.setPlayerName}/>
            <PlayButton setPlayMode={props.setPlayMode}/>
        </div>
    )
}

export default Landing