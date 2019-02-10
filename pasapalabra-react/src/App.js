import React, { useState } from 'react'
import Landing from './components/Landing'
import GameTable from './components/GameTable'
import logic from './logic'

function App() {
  const [ playerName, setPlayerName ] = useState(null)
  const [ playMode, setPlayMode ] = useState(false)

  return (
    <div className="App">
      <section className="App-section">
        <div>
          {!playerName || !playMode ? 
              <Landing 
                setPlayerName={setPlayerName}
                setPlayMode={setPlayMode} 
              />
              : 
              <GameTable
                setPlayerName={setPlayerName}
                setPlayMode={setPlayMode} 
              />
          }
        </div>
      </section>
    </div>
  );
}

export default App;