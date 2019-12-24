import React from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Home from './components/Home';

library.add(fab);

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
