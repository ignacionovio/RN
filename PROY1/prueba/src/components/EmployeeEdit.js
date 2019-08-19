import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee.item, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.item.key });
        //console.log();
    }

    onTextPress() {
        const { phone, shift } = this.props;
        const body = ('Tu siguiente turno es el ' + shift) ;
        console.log(body);
        Communications.textWithoutEncoding (phone, body);
    }

    onAccept() {
        const uid = this.props.employee.item.key;
        
        this.props.employeeDelete({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Guardar
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Enviar Mensaje
                    </Button>
                </CardSection>

                <CardSection>
                <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Eliminar empleado
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Desea eliminar al empleado?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    //console.log(state);
    //console.log(state.employeeForm.item.name);

    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeUpdate,
    employeeSave,
    employeeDelete
})(EmployeeEdit);
