import React from 'react';
import './App.css';
import Lastside from './Components/Lastside';
import Middlepart from './Components/Middlepart';
import Sidebar from './Components/Sidebar';

function App() 
{
  return (
    <div className = "App">
        <div className = "container">
            
              <Sidebar />
              <Middlepart />
              <Lastside />
        </div>
    </div>
  );
}

export default App;
