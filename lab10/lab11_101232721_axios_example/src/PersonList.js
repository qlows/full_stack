import React, { Component } from 'react'
import axios from "axios"

export default class PersonList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            persons: []
        }
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.persons.map(user => (
                        <>
                            <div class="container">
                                <div class="title">
                                    <h2>
                                        {user.name.title} {user.name.first} {user.name.last} - {user.login.uuid}
                                    </h2>
                                </div>
                                <div class="body">
                                    <div class="left-side"></div>
                                    <img src={user.picture.large} alt="users" />
                                    <button>Details</button>
                                </div>
                                <div class="right-side">
                                    <p>username: {user.login.username}</p>
                                    <p>Gender: {user.gender}</p>
                                    <p>Time Zone: {user.location.timezone.description}</p>
                                    <p>Address: {user.location.street.number} {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}, {user.location.postcode}</p>
                                    <p>email: {user.email}</p>
                                    <p>Date of Birth and Age: {user.dob.date}  {`Age: ` + user.dob.age}</p>
                                    <p>Date of Registry: {user.registered.date}</p>
                                    <p>Phone Number: {user.phone}</p>
                                    <p>Cell Number: {user.cell}</p>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        )
    }
}
