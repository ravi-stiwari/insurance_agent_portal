import React, { Component } from "react";
import MaterialTable from "components/MaterialTable/MaterialTable.jsx";

class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.data = [
      { id: 1, title: 'Conan the Barbarian', year: '1982' },
      { id: 1, title: 'Conan the Barbarian', year: '1982' },
      { id: 1, title: 'Conan the Barbarian', year: '1982' }
    ]
    this.columns = [
        {
          name: 'Title',
          selector: 'title',
          sortable: true,
        },
        {
          name: 'Year',
          selector: 'year',
          sortable: true,
          right: true,
        },
    ]
  }
  
  render() {
    return (
      <div className="content">
        <MaterialTable
          data={this.data}
          columns = {this.columns}
        ></MaterialTable>
      </div>
    );
  }
}

export default DashboardView;
