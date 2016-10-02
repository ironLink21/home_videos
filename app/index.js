'use strict';

import React, { Component }       from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import * as firebase              from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDr7HOBy0gpDG7RA4Xlgp8gSey8mDDdPnw",
  authDomain: "homemovies-15741.firebaseapp.com",
  databaseURL: "https://homemovies-15741.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "266886711745"
};
firebase.initializeApp(config);

export default class homeVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});