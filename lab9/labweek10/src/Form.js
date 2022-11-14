import React from "react";


export default class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            email: "",
            address: "",
            address2: "",
            city: "",
            province: "",
            postalCode: ""
        }
    }
    province = [
        "Alberta", "British Columbia",
        "Manitoba", "New Brunswick",
        "Newfoundland and Labrador",
        "Nova Scotia", "Ontario",
        "Prince Edward Island",
        "Quebec", "Saskatchewan"
    ]

    onSubmitData = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    onValueChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={formElement => this.onSubmitData(formElement)}>

                    <input onChange={formElement => this.onValueChange(formElement)}
                        type="text" name="firstName" placeholder="Full Name"
                    />
                    <input onChange={formElement => this.onValueChange(formElement)}
                        type="text" name="email" placeholder="Enter Email"
                    />
                    <br />
                    <input onChange={formElement => this.onValueChange(formElement)}
                        type="text" name="address" placeholder="1234 Main St"
                    />
                    <input onChange={formElement => this.onValueChange(formElement)}
                        type="text" name="address2" placeholder="Apartment, studio, or floor no."
                    />
                    <br />
                    <input onChange={formElement => this.onValueChange(formElement)}
                        type="text" name="city" placeholder="City"
                    />
                    <input onChange={formElement => this.onValueChange(formElement)}
                        type="text" name="postalCode" placeholder="Postal Code"
                    />
                    <br />

                    <div>

                        <select name="optionSelected" onChange={formElement => this.onValueChange(formElement)}>
                            <option name="optionSelected" key="">---Choose a Province---</option>{
                                this.province.map(optionSelected => {
                                    return (
                                        <option key={optionSelected}>{optionSelected}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <br />
                    <input type="checkbox" name="checkbox" value="check" id="agree" /> Agree Terms & Conditions

                    <br />
                    <input onChange={formElement => this.onValueChange(formElement)} type="submit" name="submit " placeholder="Submit" />


                </form>

                <br />
                <hr />
                <br />

                <h2>Data Output</h2>

                <div>
                    <p>Full Name: {this.state.firstName}</p>
                    <p>Email: {this.state.email}</p>
                    <p>Address: {this.state.address + this.state.address2}</p>
                    <p>City: {this.state.city}</p>
                    <p>Province: {this.state.optionSelected}</p>
                    <p>Postal Code: {this.state.postalCode}</p>
                </div>
            </div>
        )
    }

}