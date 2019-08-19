import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Nombre"
                        placeholder="Jorge"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Telefono"
                        placeholder="5411-5555-5555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>
                {/* <CardSection style={{ flexDirection: 'column' }}>*/}
                <CardSection>
                    <Text style={styles.pickerTextStye}> Dia </Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Lunes" value="Lunes" />
                        <Picker.Item label="Martes" value="Martes" />
                        <Picker.Item label="Miércoles" value="Miércoles" />
                        <Picker.Item label="Jueves" value="Jueves" />
                        <Picker.Item label="Viernes" value="Viernes" />
                        <Picker.Item label="Sábado" value="Sábado" />
                        <Picker.Item label="Domingo" value="Domingo" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
