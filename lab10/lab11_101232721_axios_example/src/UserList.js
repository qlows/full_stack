import React, { Component } from "react"

export default class UserList extends Component {

    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }



    componentDidMount = () => {
        this.getUsers()
    }

    getUsers = () => {
        const USER_URL = "https://jsonplaceholder.typicode.com/users"
        axios.get(USER_URL)
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <>
                <h2>UserList</h2>
                {
                    this.state.users.map(user => (
                        <p>{user.name} - {user.email}</p>
                    ))
                }
            </>
        )
    }
}