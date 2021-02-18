import './App.css';
import React ,{useState} from 'react'
function App() {
  const [state, setState] = React.useState();

  function showText(){
    setState("Text is shown");
  }
  function hideText(){
    setState("");
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="hdiv" onMouseEnter={showText}
        onMouseLeave={hideText}>
          <h2>Hover Mouse On</h2>
        </div>
        <small>{state}</small>
      </header>
    </div>
  );
}

export default App;
