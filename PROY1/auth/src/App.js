import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB-9hWvB4F8LiFffX6VowK30LmYXE4IPV0',
      authDomain: 'auth-e705a.firebaseapp.com',
      databaseURL: 'https://auth-e705a.firebaseio.com',
      projectId: 'auth-e705a',
      storageBucket: 'auth-e705a.appspot.com',
      messagingSenderId: '1037364255036',
      appId: '1:1037364255036:web:ef16bcf7c9130e69'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
