import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native'

import DatePicker from 'react-native-datepicker'

const hoy = new Date();

class Input extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Titulo"
                    style={styles.inputStyle}
                    onChangeText={(text) => this.props.onChangeTitle(text)}
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
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                          marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    // onDateChange={(date) => this.props.onChangeDate(date)}
                >
                </DatePicker>
                <TouchableHighlight style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Guardar</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        marginBottom: 5,
        height: 40,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ccc',
        fontSize: 18
    },
    container: {
        marginTop: 5
    },
    buttonStyle: {
        backgroundColor: '#FFBB33',
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 5
    },
    buttonText: {
        textAlign: 'center'
    }
})

export default Input;