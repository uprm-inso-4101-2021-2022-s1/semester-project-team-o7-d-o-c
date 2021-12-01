import React, { Component } from "react";
import { Link } from "react-router-dom";

class DocRegister extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      phoneNumber: "",
      officeName: "",
      hasAgreed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <Link to="/register_doc">
        <div className="formCenter">
          <form onSubmit={this.handleSubmit} className="formFields">
              <h1>Welcome, Doctor! Please fill the information below!</h1>
            <div className="formField">
              <h3 className="formFieldLabel" htmlFor="name">
                Full Name
              </h3>
              <input
                type="text"
                id="name"
                className="formFieldInput"
                placeholder="Enter your full name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <div className="formField">
              <h3 className="formFieldLabel" htmlFor="email">
                E-Mail Address
              </h3>
              <input
                type="email"
                id="email"
                className="formFieldInput"
                placeholder="Enter your email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="formField">
              <h3 className="formFieldLabel" htmlFor="password">
                Password
              </h3>
              <input
                type="password"
                id="password"
                className="formFieldInput"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="formField">
                <h3 className="formFieldLabel" htmlFor="phoneNumber">
                    Phone Number
                </h3>
                <input 
                type="phoneNumber"
                id="phoneNumber"
                className="formFieldInput"
                placeholder="Enter your Phone Number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                 />
            </div>

            <div className="formField">
                <h3 className="formFieldLabel" htmlFor="officeName">
                    Office Name
                </h3>
                <input 
                type="officeName" 
                id="officeName"
                className="formFieldInput"
                placeholder="Enter your Office Name"
                name="officeName"
                value={this.state.officeName}
                onChange={this.handleChange}
                />
            </div>

            <div className="formField">
              <button className="formFieldButton">Register</button>{""}
              <Link to="/login" className="formFieldLink">
              <button className="formFieldButton">I have an Existing Account</button>{""}
              </Link>
            </div>
            <div>
              <Link to="/register" className="formFieldLink">
              <button className="formFieldButton">I'm a Patient</button>{""}
              </Link>
            </div>
          </form>
        </div>
      </Link>
    );
  }
}
export default DocRegister;
