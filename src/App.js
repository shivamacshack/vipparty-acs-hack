import React from 'react';
import '@progress/kendo-theme-material/dist/all.css';

import './App.css';
import VideoChat from './VideoChat';
import ChatApp from './ChatApp';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>V I P PARTY</h1>
      </header>
      <main>
        <VideoChat />
        <br></br>
        <ChatApp />
      </main>
      <footer>
        <p>
          Made with{' '}
          <span role="img" aria-label="React">
            ⚛️
          </span>{' '}
          by <a href="https://twitter.com/philnash">philnash</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
