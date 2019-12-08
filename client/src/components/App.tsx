import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSun, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Navigation from "./Navigation";
import Content from "./Content";
import { BrowserRouter as Router } from "react-router-dom";

// adds icons to FA library so it may be referenced
// by icon name as a string anywhere else in our app
library.add(fab, faSun, faEnvelope);

const App: React.FC = () => {
  return (
    <Router>
      <Navigation/>
      <main>
        <Content/>
      </main>
    </Router>
  );
};

export default App;
