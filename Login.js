import React from "react";

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            borderColor: "#FF0000"
        }
        this.analyze = this.analyze.bind(this);
    }
    analyze(event) {
         
            if(strongRegex.test(event.target.value)) {
                this.setState({ borderColor: "#0F9D58" });
            } else if(mediumRegex.test(event.target.value)) {
                this.setState({ borderColor: "#F4B400" });
            } else {
                this.setState({ borderColor: "#DB4437" });
            }
        
    }

    render() {
        return (
            <div className="log">
            <h1><center>LOGIN FORM !</center></h1>
                <p><label for="Username"><b>Enter your Username</b></label></p>
                <p><input type="text" name="password" style={{ borderColor: this.state.borderColor }} onChange={this.analyze} placeholder="Your Username" /></p>
                <p><label for="Email"><b>Enter your Email</b></label></p>
                <p><input type="text" name="password" style={{ borderColor: this.state.borderColor }} onChange={this.analyze} placeholder="Your Email" /></p>
                <p><label for="Password"><b>Enter your Password</b></label></p>
                <p><input type="text" name="password" style={{ borderColor: this.state.borderColor }} onChange={this.analyze} placeholder="Your Password"/></p>
            </div>
        );
    }

}

export default Login;