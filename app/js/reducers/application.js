"use strict";

import * as types     from '../actions/actionTypes';
import * as firebase  from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDr7HOBy0gpDG7RA4Xlgp8gSey8mDDdPnw",
    authDomain: "homemovies-15741.firebaseapp.com",
    databaseURL: "https://homemovies-15741.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "266886711745"
};

const initialState = {firebase: firebase.initializeApp(config), loginType: "", email: "", password: "", firebaseToken: "", search:""};

export default (state = initialState, action) => {

  switch(action.type){
    case types.EMAILLOGIN:
      firebase.auth().signInWithEmailAndPassword(action.email, action.password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
      });

      return {
        ...state,
        loginType: "email",
        email: action.email,
        password: action.password
      };
    case types.GOOGLEOATH:
      return {
        ...state,
        loginType: "google"
      };
      case types.addMoveSearch:
      return {
        ...state,
        search: ""
      };
    
    default:
      return state;
  }
};