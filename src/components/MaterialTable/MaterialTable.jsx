import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import differenceBy from 'lodash/differenceBy';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Delete from '@material-ui/icons/Delete';
import Add from '@material-ui/icons/Add';
import DataTable, { memoize } from 'react-data-table-component';

const sortIcon = <ArrowDownward />;
const selectProps = { indeterminate: isIndeterminate => isIndeterminate };
const actions = (
  <IconButton
    color="primary"
  >
    <Add />
  </IconButton>
);
const contextActions = memoize(deleteHandler => (
  <IconButton
    color="secondary"
    onClick={deleteHandler}
  >
    <Delete />
  </IconButton>
));

const tableDataItems = [
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Conan the Barbarian', type: '1982' },
  { id: 1, name: 'Ravi', type: '1993' }
];

const columns = memoize(() => [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
    grow: 2,
  },
  {
    name: 'Type',
    selector: 'type',
    sortable: true,
  }
]);

class MaterialTable extends PureComponent {
  state = { selectedRows: [], toggleCleared: false, data: tableDataItems };

  handleChange = state => {
    this.setState({ selectedRows: state.selectedRows });
  };

  handleRowClicked = row => {
    
    console.log(`${row.name} was clicked!`);
  }

  deleteAll = () => {
    const { selectedRows } = this.state;
    const rows = selectedRows.map(r => r.name);
    
    if (window.confirm(`Are you sure you want to delete:\r ${rows}?`)) {
      this.setState(state => ({ toggleCleared: !state.toggleCleared, data: differenceBy(state.data, state.selectedRows, 'name') }));
    }
  }

  render() {
    const { data, toggleCleared } = this.state;

    return (
      <Card style={{ height: '100%' }}>
        <DataTable
          title="Policies"
          columns={columns()}
          data={data}
          selectableRows
          highlightOnHover
          defaultSortField="name"
          actions={actions}
          contextActions={contextActions(this.deleteAll)}
          sortIcon={sortIcon}
          selectableRowsComponent={Checkbox}
          selectableRowsComponentProps={selectProps}
          onRowSelected={this.handleChange}
          clearSelectedRows={toggleCleared}
          onRowClicked={this.handleRowClicked}
          pagination
        />
      </Card>
    );
  }
}

storiesOf('Material UI', module)
  .add('Override Default Components', () => <MaterialTable />);
  
export default MaterialTable;