import React, { Component } from "react";
import { MDBDataTable } from 'mdbreact';

export class PolicyViewTable extends Component {
  render() {
  return (
     <div className="content1">
      <MDBDataTable
        striped
        bordered
        small
        data={this.props.data}
      />
    </div>
  )};
}

export default PolicyViewTable;
