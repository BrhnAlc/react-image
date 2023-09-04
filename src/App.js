
import { useState } from 'react';
import './App.css';
import Images from './Images';
import "./styles.css";

function App() {
  const [phone, setPhone] = useState(Images[0]);
  return (
    <div className="App">
      <div className='container'>
     <img src={phone} alt="selected" className='selected'/>
      </div>
      <div className='imgContainer'>
       {Images.map((img,index)=>(
        <img key={index} src={img} alt="phone" onClick={()=>setPhone(img)}/>
       ))}
      </div>
     
    </div>
  );
}

export default App;
