import React, { Component } from "react";
import MaterialTable from "components/MaterialTable/MaterialTable.jsx";

class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.handleRowClicked = this.handleRowClicked.bind(this);
  }
  
  handleRowClicked(row){
    const { history: { push } } = this.props;    
    push('/editPolicy');
    console.log(row);
  }
  
  render() {
    return (
      <div className="content">
        <MaterialTable
          data={this.data}
          columns = {this.columns}
          handleRowClicked = {this.handleRowClicked}
        ></MaterialTable>
      </div>
    );
  }
}

export default DashboardView;
