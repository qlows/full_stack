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

                    <div>
                        <label>Province</label>
                        <select name="optionSelected" onChange={formElement => this.onValueChange(formElement)}>
                            <option name="optionSelected" key="">---Choose a Province---</option>{
                                this.options.map(optionSelected => {
                                    return (
                                        <option key={optionSelected}>{optionSelected}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <input type="checkbox" name="checkbox" value="check" id="agree">Agree Terms & Conditions</input>
                    <input onChange={formElement => this.onValueChange(formElement)} type="submit" name="submit" placeholder="Submit" />
                </form>

                <br />
                <hr />
                <br />

                <h2>Data Output</h2>
                <h6>Full Name: {this.state.firstName}</h6>
                <h6>Email: {this.state.email}</h6>
                <h6>Address: {this.state.address + this.state.address2}</h6>
                <h6>City: {this.state.city}</h6>
                <h6>Province: {this.state.optionSelected}</h6>
                <h6>Postal Code: {this.state.postalCode}</h6>
            </div>
        )
    }
}