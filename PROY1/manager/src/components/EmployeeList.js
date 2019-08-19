import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
      this.props.employeesFetch();
    }
    
    renderRow(employee) {
      return <ListItem employee={employee} />;
    }

    render() {
        //console.log(this.props.employees);
      return (
        <FlatList
          data={this.props.employees}
          renderItem={this.renderRow}
          keyExtractor={employee => employee.uid}
        />
      );
    }
  }
   
const mapStateToProps = state => {
    //console.log(state);
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, key: uid };
    });
    
    return { employees }; 
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
