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
    constructor(props){
        super(props)

        this.state =  {
            title: '',
            date: ''
        }

        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
    }

    onChangeTitle(title){
        this.setState({title})
    }

    onDateChange(date){
        this.setState({date})
    }

    render() {
        return (
            <View style={styles.container}>
                <NavBar/>
                <Input
                    onChangeTitle={this.onChangeTitle}
                    onDateChange={this.onDateChange}
                />
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