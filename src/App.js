import React  from 'react';
import Filter from './components/Filter/Filter';
import Home from './components/Home/Home';
import './App.css'


function App() {

  return (
    <div className="app">
      <div className="app__content">SpaceX Launch Programs</div>
      <div className="app__components">
         <div className="filter">
           <Filter /> 
          </div> 
          <div className="home"> 
           <Home />
          </div>
      </div>
       <div className="app__develop">Developed by: <mark>D.SIVA SANKARA REDDY</mark> </div>
    </div>
  );
}

export default App;
