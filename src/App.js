import React, { Suspense } from 'react';
import Filter from './components/Filter/Filter';

import './App.css'



const HomeComponent = React.lazy(() => import('./components/Home/Home'));



function App() {

  return (
    <div className="app">
      <div className="app__content">SpaceX Launch Programs</div>
      <div className="app__components">
         <div className="filter">
           <Filter /> 
          </div> 
          <div className="home"> 
          
           <Suspense fallback={<div>Loading...</div>}>
             <HomeComponent />
            </Suspense>
          </div>
      </div>
       <div className="app__develop">Developed by: <mark>D.SIVA SANKARA REDDY</mark> </div>
    </div>
  );
}

export default App;
