import React, { PureComponent } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const columns = [
  {
    name: 'Policy_id',
    selector: 'Policy_id',
    isKey: true
  },
  {
    name: 'Date_of_Purchase',
    selector: 'Date_of_Purchase',
    isKey: false
  },
  {
    name: 'Customer_id',
    selector: 'Customer_id',
    isKey: false
  },
  {
    name: 'Fuel',
    selector: 'Fuel',
    isKey: false
  },
  {
    name: 'VEHICLE_SEGMENT',
    selector: 'VEHICLE_SEGMENT',
    isKey: false
  },
  {
    name: 'Premium',
    selector: 'Premium',
    isKey: false
  },
  {
    name: 'Bodily_Injury_Liability',
    selector: 'Bodily_Injury_Liability',
    isKey: false
  },
  {
    name: 'Personal_Injury_Protection',
    selector: 'Personal_Injury_Protection',
    isKey: false
  },
  {
    name: 'Property_Damage_Liability',
    selector: 'Property_Damage_Liability',
    isKey: false
  },
  {
    name: 'Collision',
    selector: 'Collision',
    isKey: false
  },  
  {
    name: 'Comprehensive',
    selector: 'Comprehensive',
    isKey: false
  }, 
  {
    name: 'Customer_Gender',
    selector: 'Customer_Gender',
    isKey: false
  },  
  {
    name: 'Customer_Income_Group',
    selector: 'Customer_Income_Group',
    isKey: false
  },  
  {
    name: 'Customer_Region',
    selector: 'Customer_Region',
    isKey: false
  },  
  {
    name: 'Customer_Marital_Status',
    selector: 'Customer_Marital_status',
    isKey: false
  }
];

class MaterialTable extends PureComponent {
  
  selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    onSelect: this.props.handleRowClicked
  };
  onAfterDeleteRow(rowKeys) {
    var tableDataItems = JSON.parse(localStorage.getItem('tableDataItems'));
    var updatedItems = tableDataItems.filter(item => {
      if(rowKeys.indexOf(item.Policy_id) == -1){
        return item;
      }
    });
    localStorage.setItem('tableDataItems', JSON.stringify(updatedItems));
  }
  options = {
    afterDeleteRow: this.onAfterDeleteRow
  };
  
  render() {
    var items = columns.map((item,key) => {
      if (item.isKey === true)
        return <TableHeaderColumn 
              dataField={item.selector} 
              isKey
              width={ item.name.length + 180 + ''}
              dataSort={ true }
              >{item.name}</TableHeaderColumn>
      else
        return <TableHeaderColumn 
              dataField={item.selector} 
              width={ item.name.length + 180 + ''}
              dataSort={ true }
              >{item.name}</TableHeaderColumn>
      }
    );
    return (
        <BootstrapTable
          ref='table'
          data={ JSON.parse(localStorage.getItem('tableDataItems')) }
          pagination={ true }
          search={ true }
          exportCSV
          deleteRow={ true }
          selectRow={ this.selectRowProp } 
          options={ this.options }>
          {items}
        </BootstrapTable>
    );
  }
}

export default MaterialTable;