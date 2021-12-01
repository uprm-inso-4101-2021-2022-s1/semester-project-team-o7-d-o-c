import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Feedback.css"

class Feedback extends Component {
    constructor() {
        super();
    
        this.state = {
            email: "",
            name: "",
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
            <Link to="/feedback">
                <div className="formCenter">
                    <form onSubmit={this.handleSubmit} className="formFields">
                        <h1>Office Feedback</h1>
                        <div className="formField">
                        <h3 className="formFieldLabel" htmlFor="name">
                            Username
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
                            Office Name
                        </h3>
                        <input
                            type="email"
                            id="email"
                            className="formFieldInput"
                            placeholder="Enter Office Name"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        </div>

                        <br/>

                        <div className="formField">
                            <input
                            type="text"
                            id="feedback"
                            className="formFieldInput"
                            placeholder="Enter Feedback"
                            name="comment"
                            value={this.state.comment}
                            onChange={this.handleChange}
                            style={{width: "470px"}, {height: "110px"}}
                            />
                        </div>
            
                        <div className="formField">
                            <button 
                            className="formFieldButton" 

                            style={{width: "80px"}, {height: "30px"}}
                            >Submit</button>
                            <br/>
                            <Link to="/officeFeedback" className="formFieldLink">
                                <button className="formFieldButton">See Office Feedback</button>{""}
                            </Link>
                        </div>
                    </form>
                </div>
            </Link>
        );
    }
}
export default Feedback