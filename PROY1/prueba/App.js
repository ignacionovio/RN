import React, { Component } from 'react';
//import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router'

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDYNcMz327xWdn08nZgR_3bkCFUeG7bfqM',
            authDomain: 'manager-39b2b.firebaseapp.com',
            databaseURL: 'https://manager-39b2b.firebaseio.com',
            projectId: 'manager-39b2b',
            storageBucket: '',
            messagingSenderId: '220684782858',
            appId: '1:220684782858:web:853f71732a8c30a2'
          };
          firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}> 
                <Router />
            </Provider>
        );
    }
}

export default App;
