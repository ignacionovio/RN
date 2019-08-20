import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighLight
} from 'react-native'

import DatePicker from 'react-native-datepicker'

let hoy = new Date();

class Input extends Component {

    render() {
        return (
            <View>
                <TextInput
                    placeholder="Titulo"
                    style={styles.inputstyle}
                >

                </TextInput>
                <DatePicker
                    mode='datetime'
                    placeholder='Seleccione fecha'
                    confirmBtnText= 'Ok'
                    cancelBtnText='Cancelar'
                    format="YYYY-MM-DD HH:mm"
                    minDate= {hoy}
                    maxDate='2050-12-31'
                    // onDateChange={(date) => {this.setState({date: date})}}
                >

                </DatePicker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputstyle: {

    }

})

export default Input;