//Un componente es una "cosa" que muestra algo en el dispositivo
//Importo un libreria para ayudar a crear components
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Creo un component
const App = () => (
        //aca le paso el prop headerText al componente header
        //el nombre de este prop es libre, lo pongo yo
        //Tengo que crear un view xq JSX no permite retornar dos child, tienen que estar contenidos
        <View style={{ flex: 1 }}>
                <Header headerText={'Albums'} />
                <AlbumList />
        </View>
);

AppRegistry.registerComponent('albums', () => App);
