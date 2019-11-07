import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class PolicyEditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
    this.data = props.location.state
    if(this.data == undefined) {
      this.data = {}
    }
  }
  
  onChange = date => this.setState({ date })
  
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Policy"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "Policy Id",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Policy Id",  
                          defaultValue: this.data.Policy_id
                        },
                        {
                          label: "Customer Id",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Customer_id",
                          defaultValue: this.data.Customer_id
                        },
                        {
                          label: "Premium",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Premium",
                          defaultValue: this.data.Premium
                        }
                      ]}
                    />
                    <div>
                      <label>Date of Purchase</label>
                      <DatePicker
                        selected={this.state.date}
                        placeholderText="Click to select a date"
                        onChange={this.onChange}
                        todayButton="Today"
                        withPortal
                      />
                      <br>
                      </br>
                    </div>
                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-3","col-md-3"]}
                      properties={[
                        {
                          label: "Customer_Income_Group",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: this.data.Customer_Income_Group
                        },
                        {
                          label: "Customer_Region",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Customer Region",
                          defaultValue: this.data.Customer_Region
                        },
                        {
                          label: "Property_Damage_Liability",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Property_Damage_Liability",
                          defaultValue: this.data.Property_Damage_Liability
                        },
                        {
                          label: "Fuel",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Fuel", 
                          defaultValue: this.data.Fuel
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4","col-md-4","col-md-4"]}
                      properties={[
                        {
                          label: "Customer_Marital_Status",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Customer Marital Status",
                          defaultValue: this.data.Customer_Marital_status
                        },
                        {
                          label: "Personal_Injury_Protection",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Personal_Injury_Protection",
                          defaultValue: this.data.Personal_Injury_Protection
                        },
                        {
                          label: "Customer_Gender",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Customer_Gender",
                          defaultValue: this.data.Customer_Gender
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-3","col-md-3","col-md-3","col-md-3"]}
                      properties={[
                        {
                          label: "Comprehensive",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Comprehensive",
                          defaultValue: this.data.Comprehensive
                        },
                        {
                          label: "Collision",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Collision",
                          defaultValue: this.data.Collision
                        },
                        {
                          label: "Bodily_Injury_Liability",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Bodily_Injury_Liability",
                          defaultValue: this.data.Bodily_Injury_Liability
                        },
                        {
                          label: "VEHICLE_SEGMENT",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "VEHICLE_SEGMENT",
                          defaultValue: this.data.VEHICLE_SEGMENT
                        }
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill type="submit">
                      Update Policy
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PolicyEditView;
