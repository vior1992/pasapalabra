import React, { Component } from 'react'
import Landing from './components/Landing'
import logic from './logic'

class App extends Component {
  state = { playerName: null, playMode: false }

  render() {
    return (
      <div className="App">
        <section className="App-section">
          <div>
            {!this.state.playerName && !this.state.playMode ? 
              <div>
                <Landing/>
              </div>
            : 
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
            ''
            }
          </div>
        </section>
      </div>
    );
  }
}

export default App;