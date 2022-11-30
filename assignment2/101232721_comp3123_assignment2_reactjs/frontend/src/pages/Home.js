import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import "./Home.css"
import axios from "axios"

const Home = () => {
  const[data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    const res = await axios.get("http://localhost:3000/api/emp/employees");
    if (res.status === 200){
      setData(res.data);
    }
  }

  console.log("data=>", data)

  return (
    <div>Home</div>
  )
}
export default Home