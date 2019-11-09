import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { withRouter } from 'react-router';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class PolicyEditView extends Component {
  constructor(props) {
    super(props);
    var isdisabled = true;
    if(props.location.state === undefined) {
      isdisabled = false;
    }
    this.state = {
      isdisabled: isdisabled
    }
    this.editPolicyTitle = "Edit Policy"
    this.editPolicyTitleBtn = "Update Policy"
    this.deletePolicyTitleBtn = "Delete Policy"
    this.allDisabled = true;
    if(isdisabled === false) {
      this.allDisabled = false;
      this.editPolicyTitleBtn = "Save Policy"
      this.editPolicyTitle = "Add Policy"
    }
    this.data = props.location.state
    if(this.data === undefined) {
      this.data = {}
    }
  }
  
  onChange = date => this.setState({ date })
  
  deletePolicy(event){
    var policyId = event.target.parentNode.elements[0].value;
    var tableDataItems = JSON.parse(localStorage.getItem('tableDataItems'));
    var indexToBeDelted = 0;
    for(var idx = 0; idx<tableDataItems.length; idx++ ){
      if(tableDataItems[0].Policy_id === +policyId) {
        indexToBeDelted = idx;
        break;
      }
    }
    tableDataItems.splice(indexToBeDelted, 1);
    localStorage.setItem('tableDataItems', JSON.stringify(tableDataItems));
    const { history: { push } } = this.props;    
    push('/dashboard')
  }
  
  handleSubmit(event){
    event.preventDefault();
    if (event.target.Premium.value > 1000000) {
      alert("Premium cannot be greater than 1 Million");
      return false;
    }
    debugger;
    var tableDataItems = JSON.parse(localStorage.getItem('tableDataItems'));
    if(this.editPolicyTitle == "Add Policy") {
      var item = {
          "Policy_id": +event.target.Policy_id.value,
          "Date_of_Purchase": "1/16/2018",
          "Customer_id": +event.target.Customer_id.value,
          "Fuel": event.target.Fuel.value,
          "VEHICLE_SEGMENT": event.target.VEHICLE_SEGMENT.value,
          "Premium": +event.target.Premium.value,
          "Bodily_Injury_Liability": 0,
          "Personal_Injury_Protection": 0,
          "Property_Damage_Liability": 0,
          "Collision": 1,
          "Comprehensive": 1,
          "Customer_Gender": "Male",
          "Customer_Income_Group": "0- $25K",
          "Customer_Region": "North",
          "Customer_Marital_status": 0
      }
      tableDataItems.push(item);
    }
    else {
      
      tableDataItems.forEach(item => {
        if(item.Policy_id === +event.target.Policy_id.value) {
          item.Premium = event.target.Premium.value;
        }
      });
    }
    localStorage.setItem('tableDataItems', JSON.stringify(tableDataItems));
    const { history: { push } } = this.props;    
    push('/dashboard')
    return true;
  }
  
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title={ this.editPolicyTitle }
                content={
                  <form onSubmit={ this.handleSubmit.bind(this) }>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "Policy Id",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Policy Id",  
                          id: "Policy_id",
                          disabled: this.allDisabled,
                          defaultValue: this.data.Policy_id
                        },
                        {
                          label: "Customer Id",
                          type: "number",
                          bsClass: "form-control",
                          id: "Customer_id",
                          disabled: this.allDisabled,
                          placeholder: "Customer Id",
                          defaultValue: this.data.Customer_id
                        },
                        {
                          label: "Premium",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Premium",
                          id: "Premium",
                          defaultValue: this.data.Premium
                        }
                      ]}
                    />
                    <div>
                      <label>Date of Purchase</label>
                      <DatePicker
                        selected={this.data.Date_of_Purchase != undefined ? new Date(this.data.Date_of_Purchase) : new Date()}
                        placeholderText="Click to select a date"
                        onChange={this.onChange}
                        todayButton="Today"
                        withPortal
                        disabled={this.state.isdisabled}
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
                          disabled: this.allDisabled,
                          defaultValue: this.data.Customer_Income_Group
                        },
                        {
                          label: "Customer_Region",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Customer Region",
                          disabled: this.allDisabled,
                          defaultValue: this.data.Customer_Region
                        },
                        {
                          label: "Property_Damage_Liability",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Property_Damage_Liability",
                          disabled: this.allDisabled,
                          defaultValue: this.data.Property_Damage_Liability
                        },
                        {
                          label: "Fuel",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Fuel", 
                          id: "Fuel",
                          disabled: this.allDisabled,
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
                          disabled: this.allDisabled,
                          defaultValue: this.data.Customer_Marital_status
                        },
                        {
                          label: "Personal_Injury_Protection",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Personal_Injury_Protection",
                          disabled: this.allDisabled,
                          defaultValue: this.data.Personal_Injury_Protection
                        },
                        {
                          label: "Customer_Gender",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Customer_Gender",
                          disabled: this.allDisabled,
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
                          disabled: this.allDisabled,
                          defaultValue: this.data.Comprehensive
                        },
                        {
                          label: "Collision",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Collision",
                          disabled: this.allDisabled,
                          defaultValue: this.data.Collision
                        },
                        {
                          label: "Bodily_Injury_Liability",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Bodily_Injury_Liability",
                          disabled: this.allDisabled,
                          defaultValue: this.data.Bodily_Injury_Liability
                        },
                        {
                          label: "VEHICLE_SEGMENT",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "VEHICLE_SEGMENT",
                          id: "VEHICLE_SEGMENT",
                          disabled: this.allDisabled,
                          defaultValue: this.data.VEHICLE_SEGMENT
                        }
                      ]}
                    />
                    <Button bsStyle="danger" pullRight fill type="button" onClick={this.deletePolicy.bind(this)}>
                      {this.deletePolicyTitleBtn}
                    </Button>
                    <Button bsStyle="info" pullRight fill type="submit">
                      {this.editPolicyTitleBtn}
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

export default withRouter(PolicyEditView);
