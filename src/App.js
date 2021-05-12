import logo from './logo.svg';
import './App.css';
import Random from "./components/rand";

function App() {
  //配列の個数をらんだむにしたい
  const svgCount = [0,1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="App">
      <header className="App-header">
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

        {svgCount.map((count) => (
           <Random svgCount={count}/>
        ))}

      </header>
    </div>
  );
}

export default App;
