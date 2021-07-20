import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'


function App() {
  let imgs = 'https://res.cloudinary.com/dwwgiwtgh/image/upload/v1626743036/ScentHouse/promo_zou8qo.jpg';
  return (
    <DataProvider>
      <Router>
        <div className="App" style={{border: '5px solid',borderColor:'black'}}>
          <Header />
          <MainPages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
