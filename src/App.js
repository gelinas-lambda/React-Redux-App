import React from 'react';

import BeerList from './components/BeerList'

function App() {
  return (
    <div className="boxes">
      <div className="box">
        <BeerList />
      </div>
      <div className="box">
        box two
      </div>
    </div>
  );
}

export default App;
