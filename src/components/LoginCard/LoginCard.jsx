import React, { Component } from "react";
import Button from "components/CustomButton/CustomButton.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

export class LoginCard extends Component {
  
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.handleSignInClick();
  }
  
  render() {
    return (
      <div className="card card-user">
        <div className="image">
          <img src={this.props.bgImage} alt="..." />
        </div>
        <div className="content">
          <div className="author">
            <img
              className="avatar border-gray"
              src={this.props.avatar}
              alt="..."
            />
          </div>
          <form>
            <FormInputs
              ncols={["col-md-10"]}
              properties={[
                {
                  label: "Username",
                  type: "text",
                  bsClass: "form-control",
                  placeholder: "Username",
                  defaultValue: ""
                }
              ]}
            />
            <FormInputs
              ncols={["col-md-10"]}
              properties={[
                {
                  label: "Password",
                  type: "password",
                  bsClass: "form-control",
                  placeholder: "Password",
                  defaultValue: ""
                }
              ]}
            />
          </form>
          <Button 
              bsStyle="info" 
              fill 
              onClick={ this.handleClick }
              type="submit">
            SignIn
          </Button>
        </div>
        <hr />
        <div className="text-center">{this.props.socials}</div>
      </div>
    );
  }
}

export default LoginCard;
