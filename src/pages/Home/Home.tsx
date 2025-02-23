import { FC } from 'react';
import logo from './logo.svg';
import './Home.css';

const Home: FC = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React with TS
        </a>
      </div>
    </div>
  );
};

export default Home;
