import React, {Component} from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

class NavBar extends Component {
    render() {
        return (
            <View style={styles.content}>
                <TouchableOpacity style={styles.containerButton}
                onPress={null}
                >
                <Text>Nuevo</Text>
                </TouchableOpacity>
                <Text style={styles.textCenter}>Gastos</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 5,
        paddingBottom: 10,
        backgroundColor: '#FE9A2E',
        flexDirection: 'row'
    },
    containerButton: {
        position: 'absolute',
        top: 10,
        zIndex: 1,
        left: 8,
        fontWeight: 'bold'
    },
    textCenter: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
    
})

export default NavBar;