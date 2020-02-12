import React from 'react';
import '../styles/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSun, faEnvelope, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import Navigation from "./Navigation";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";

// adds icons to FA library so it may be referenced
// by icon name as a string anywhere else in our app
library.add(fab, faSun, faEnvelope, faTwitterSquare, faLinkedin, faEnvelopeSquare);

const App: React.FC = () => {
  return (
    <Router>
      <Navigation/>
      <Main />
    </Router>
  );
};

export default App;
