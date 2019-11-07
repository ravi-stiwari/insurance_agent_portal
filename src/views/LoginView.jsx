import React, { Component } from "react";
import { withRouter } from 'react-router';
import {
  Grid,
  Col,
  Row
} from "react-bootstrap";
import { LoginCard } from "components/LoginCard/LoginCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import avatar from "assets/img/default-avatar.png";

class LoginView extends Component {
  
  constructor(props){
    super(props);
    this.handleSignInClick = this.handleSignInClick.bind(this);
  }
  
  handleSignInClick() {
    const { history: { push } } = this.props;    
    push('/dashboard')
  }
  
  render() {
    return (
      <div className="content">
        <Grid>
          <Row >
            <Col md={4} xs={12}>
              <LoginCard
                bgImage="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/10/24/101140660-183427329r.530x298.jpg?v=1397148022"
                avatar={avatar}
                handleSignInClick={this.handleSignInClick}
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(LoginView);
