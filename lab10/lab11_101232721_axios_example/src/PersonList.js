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
                    this.state.persons.map(per => (
                        <>
                            <div class="container">
                                <div class="title">
                                    <h2>
                                        {per.name.title} {per.name.first} {per.name.last} - {per.login.uuid}
                                    </h2>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        )
    }
}
