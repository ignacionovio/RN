//aca no destructuro, tengo que importar react completo y ademas component
//tiene que ver con el jsx que se interpreta abajo.. no entendi bien
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//class components deben tener el render y devolder algun jsx
class AlbumList extends Component {
    state = { albums: [] };
    
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }
    
    //Como estoy referenciando una variable de JS en JSX, va entre {}
    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    //debugger;

    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView> 
        );
    }
}

export default AlbumList; 
