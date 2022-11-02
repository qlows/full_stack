import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="hi">
        <h1>Welcome to Fullstack Development - 1</h1>
        <h2>reactjs Programming Week9 lab exercise</h2>
        <p>101232721</p>
        <p>Umit Kilinc</p>
        <p>George Brown College, Toronto, ON.</p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
