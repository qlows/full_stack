import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import axios from 'axios'
import "./View.css"

const View = () => {
    const [employee, setEmployee] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getSingleEmp(id)
        }
    }, [id])

    const getSingleEmp = async (id) => {
        const res = await axios.get(`http://localhost:8080/api/emp/employees/${id}`)
        if (res.status === 200) {
            setEmployee({ ...res.data[0] });
        }
    }

    return (
        <div style={{ marginTop: "150px" }}>
            <div className='card'>
                <div className='card-header'>
                    <p>Employee Detail</p>
                </div>
                <div className='container'>
                    <strong>ID: </strong>
                    <strong>{employee.id}</strong>
                    <br />
                    <strong>First Name: </strong>
                    <strong>{employee.first_name}</strong>
                    <br />
                    <strong>Last Name: </strong>
                    <strong>{employee.last_name}</strong>
                    <br />
                    <strong>Email: </strong>
                    <strong>{employee.email}</strong>
                    <br />
                    <strong>Gender: </strong>
                    <strong>{employee.gender}</strong>
                    <br />
                    <strong>Salary: </strong>
                    <strong>{employee.salary}</strong>
                    <br />
                    <Link to="/">
                        <button className='btn btn-edit'>Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default View