import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { goodDeedState } from './features/goodDeed/goodDeedSlice';

function App() {
  const goodDeedTitle = useSelector((state: goodDeedState) => state.title);

  fetch('http://localhost:8080', {
    mode: 'no-cors',
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <table>
          <tr>
            <th>Name</th>
          </tr>
          <tr>
            <td>{goodDeedTitle}</td>
          </tr>
        </table>
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
