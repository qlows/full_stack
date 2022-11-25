import './App.css';
import React, { useState } from "react"
import axios from "axios"


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5318ceaec2de791db1af8b804883bc91`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className='container'>
        <div className='top'>
          <p>Toronto</p>
        </div>
        <div className='temp'>
          <h2>18 °C</h2>
        </div>
        <div className='desc'>
          <p>Clouds</p>
        </div>
        <div className='bottom'>
          <div className='feel'>
            <h6>Feels Like</h6>
            <p>15 °C</p>
          </div>
          <div className='humidity'>
            <h6>Humidity</h6>
            <p>45%</p>
          </div>
          <div className='wind'>
            <h6>Wind Speed</h6>
            <p>20 KMH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
