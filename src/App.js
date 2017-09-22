import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase'
import Login from './Login'
import Loader from './Loader'
import PeopleList from './PeopleList'

class App extends Component {
  constructor(){
    super();
    this.state ={
      loggedIn: null
    }
  }

  componentWillMount(){
    firebase.initializeApp({
     
   });

   firebase.auth().onAuthStateChanged((user) =>{
     if (user) {
       this.setState({ loggedIn: true })
     } else {
       this.setState({ loggedIn: false})
     }
   });
  }

    renderInitialView() {
     switch (this.state.loggedIn) {
       case true:
         return <PeopleList />;
       case false:
         return <Login />;
       default:
         return <Loader size="large" />;
     }
    }

  render() {
    return (
      <View style={styles.container}>
          {this.renderInitialView}
        {/* <Loader /> */}
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default App
