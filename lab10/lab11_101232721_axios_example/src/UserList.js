import React, { Component } from "react"

export default class UserList extends Component {

    

    getUsers = () => {
        const USER_URL = "https://jsonplaceholder.typicode.com/users"
        axios.get(USER_URL).then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <>
                <h2>UserList</h2>
            </>
        )
    }
}