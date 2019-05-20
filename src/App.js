import React from 'react';
import './assets/stylesheets/app.scss';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-container">
      <div className="navbar-Container">
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
