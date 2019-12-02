import React from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSun, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Navigation from "./Navigation";
import Content from "./Content";

// adds icons to FA library so it may be referenced
// by icon name as a string anywhere else in our app
library.add(fab, faSun, faEnvelope);

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation/>
      <main>
        <Content/>
      </main>
    </React.Fragment>
  );
};

export default App;
