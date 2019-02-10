//COMPONENT GAMETABLE
            // WILL USE:
            // COMPONENT HEADER
            // COMPONENT QUESTIONS
              // WILL USE
              // COMPONENT QUESTION
            // COMPONENT INPUT
            // COMPONENT BUTTON
            // COMPONENT FOOTER
              // WILL USE
              // COMPONENT INFOPANEL

import React from 'react'
import Header from '../Header'
// import Questions from '../Questions'
// import Input from '../Input'
import StopButton from '../StopButton'
// import Footer from '../Footer'


function GameTable(props) {
    return (
        <div>
            <h1>GAMETABLE</h1>
            <Header/>
            {/* Component Questions */}
            {/* Component AnswerInput */}
            <StopButton 
                setPlayerName={props.setPlayerName}
                setPlayMode={props.setPlayMode} 
            />
            {/* Component Footer */}
        </div>
    )
}

export default GameTable