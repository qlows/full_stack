import './App.css';
import React, { useState } from "react"
import axios from "axios"


function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=43.65&lon=79.38&appid=5318ceaec2de791db1af8b804883bc91`

  return (
    <div className="App">
      <div className='container'>
        <div className='top'>
          <p>Toronto</p>
        </div>
        <div className='temp'><h2>18 °C</h2></div>
        <div className='desc'><p>Clouds</p></div>
        <div className='bottom'>
          <div className='feel'><p>15 °C</p></div>
          <div className='humidity'><p>45%</p></div>
          <div className='wind'>20 KMH</div>
        </div>
      </div>
    </div>
  );
}

export default App;
