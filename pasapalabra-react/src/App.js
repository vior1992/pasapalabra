import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {!name ? 
          <p>Hello Unknown, you clicked {count} times</p> : 
          <p>Hello {name}, you clicked {count} times</p> }
          <button onClick={() => setCount(count + 1)}>
            +1
          </button>
          <button onClick={() => setCount(0)}>
            Count to 0
          </button>
        </div>
        <div>
          <form >
            <input value={name} onChange={e => setName(e.target.value)} />
            <button type='submit'>Reload</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
