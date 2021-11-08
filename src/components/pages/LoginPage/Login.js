import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import './Login.css'
import logo from "../../../Images/INSO_LOGO_noBG (1).png"




class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
        <NavLink to = '/login'>
            <div className="formCenter">
                <form className="formField" onSubmit={this.handleSubmit}>
                <div className="formField">
                  <h1>
                    Welcome back! Let's get you in by filling the information below.
                  </h1>
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
                    <button className="formFieldButton">Sign In</button>{" "}
                    <Link to="/register" className="formFieldLink">
                    Create an account
                    </Link>
                </div>

                {/* <div className='formField'>
                  <Link to="/register" className="formFieldLink"> //Change this to being redirected to Doctor Login 
                    I'm a doctor
                    </Link>
                </div> */}
                </form>
            </div>
        </NavLink>
    );
  }
}

export default Login;
