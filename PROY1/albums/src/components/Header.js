//3 Same steps of creating a component
//Import libraries form making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = (props) => {
    //Props es un elemento JS, que contiene propiedades, en este caso
    //estoy recibiendo de index el prop.headerText que va a ser el titulo del header
    const { textStyle } = styles;
     
    return (
        //es lo mismo el style.viewStyles que el textStyle solo, 
        //depende de si lo declare arriba o no..
        <View style={styles.viewStyle}>
          <Text style={textStyle}> {props.headerText} </Text>{/*Aca va el prop que llega de index*/}
        </View> 
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};


//make the component available to other parts of the app
export default Header; 
