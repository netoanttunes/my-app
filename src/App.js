import Aylan from './assets/Ursinho.png';
import './App.css';

function App() {
  return (
  <div className="App">
      <div className="App-box">
        <img src={Aylan} className="App-logo" alt="logo" />
        <p>
          Alou Mundão
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
