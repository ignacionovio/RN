import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import NavBar from './NavBar'
import Input from './Input'
import Items from './Items'

class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavBar/>
                <Input/>
                <Items/>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6E3CE'
    }
})

export default Index;