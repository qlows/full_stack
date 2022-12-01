import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "./Home.css"
import axios from "axios"
//import employees from "../components/employee"

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    const res = await axios.get("http://localhost:8080/api/emp/employees");
    if (res.status === 200) {
      setData(res.data);
    }
  }

  console.log("data=>", data)

  return (
    <div style={{ marginTop: "200px" }}>
      <table className='style-table'>
        <tr>
          <th style={{ textAlign: "center" }}>ID</th>
          <th style={{ textAlign: "center" }}>First Name</th>
          <th style={{ textAlign: "center" }}>Last Name</th>
          <th style={{ textAlign: "center" }}>Email</th>
          <th style={{ textAlign: "center" }}>Gender</th>
          <th style={{ textAlign: "center" }}>Salary</th>
        </tr>
      </table>

      <tbody>
        {data && data.map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.salary}</td>
              <td>
                <Link to={`/employees/${item.id}`}>
                  <button className='btn btn-view'>View</button>
                </Link>
                <Link to={`/employees/${item.id}`}>
                  <button className='btn btn-edit'>Update</button>
                </Link>
                <button className='btn btn-delete'>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </div>
  )
}
export default Home