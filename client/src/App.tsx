import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

// adds icons to FA library so it may be referenced
// by icon name as a string anywhere else in our app
library.add(fab, faSun);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon="sun" size="6x" spin />
        <h1>
          Offline for maintenance
        </h1>
        <small> - Bruna Enos</small>
      </header>
    </div>
  );
}

export default App;
