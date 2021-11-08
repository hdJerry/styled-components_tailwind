import logo from './logo.svg';
import './App.css';
import { ExampleContainer } from './example.style';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ExampleContainer>
        <h4 className="text-center text-2xl text-blue-900">
          This is a styled component
        </h4>
      </ExampleContainer>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
