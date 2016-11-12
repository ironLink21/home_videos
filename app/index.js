'use strict';

import React, { Component }                     from 'react';
import { AppRegistry, StyleSheet, Text, View }  from 'react-native';
import * as firebase                            from 'firebase';
import MyStatusBar                              from './js/common/statusBar';
import Movie                                    from './js/movie/movie';
import Login                                    from './js/login/login';

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
    this.state = { authenticated: false };
  }

  render() {
    var homePage = (this.state.authenticated) ? <Movie /> : <Login />;

    return (
      <View style={styles.container}>
          <MyStatusBar styles={ {backgroundColor: "teal", height: 20 } } />
          { homePage }
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