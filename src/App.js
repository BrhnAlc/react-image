
import { useState } from 'react';
import './App.css';
import Images from './Images';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className='container'>
     <img src="" alt="selected" className='selected'/>
      </div>
      <div className='imgContainer'>
        <img src="" alt="cağ kebap" />
      </div>
      <Images/>
    </div>
  );
}

export default App;
