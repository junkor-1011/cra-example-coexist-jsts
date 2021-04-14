import React from 'react';
import logo from './logo.svg';
import Hoge from './Hoge';
import Foo from './modules/Foo';
import './App.scss';
import styles from './dummy.module.scss';

type AppProps = Partial<{
  color: string
}>

const App: React.FC<AppProps> = ({ color }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ color: color || 'yellow' }}>Hello, world</div>
        <Hoge color="blue" />
        <Foo />
        <div className={`test-class ${styles.test}`}>
          hello css-modules with sass
        </div>
        <div className={styles['dummy-text']}>
          css-modules dummy-text
        </div>
      </header>
    </div>
  );
};

export default App;
