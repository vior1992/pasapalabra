import React, { useState, useContext } from 'react';
import { PlayerContext } from './Store';
import Header from './containers'
// import logic from './logic'

const App = () => {
  const [, setPlayerName, ,setPlayMode] = useContext(PlayerContext)
  const [inputPlayerName, setInputPlayerName] = useState('')

  const handlePlayerName = e => {
      e.preventDefault()

      setPlayerName(inputPlayerName)
      setInputPlayerName('')
      setPlayMode(true)
  }

  return (
      <div>
          <Header />
          <form onSubmit={e => handlePlayerName(e)}>
              <input 
                  placeholder='introduce a name'
                  value={inputPlayerName}
                  onChange={e => setInputPlayerName(e.target.value)}
              >
              </input>
          </form>
      </div>
  );
};

export default App