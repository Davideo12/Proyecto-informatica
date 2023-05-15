import React, { useState } from 'react';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {

  const [page, setPage] = useState(Banner);

  return (
    <div className="App">
      <NavBar setPage={setPage} />
      { page }
      <Footer />
    </div>
  );
}

export default App;
