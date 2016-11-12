'use strict';

import React, { Component }                     from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, Button }  from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {isEmail: false};

    this.handleLogin = this.handleLogin.bind(this);
    this.handleEmailOath = this.handleEmailOath.bind(this);
    this.handleGoogleOath = this.handleGoogleOath.bind(this);
  }

  handleLogin() {
    console.log('login clicked');
  }

  handleEmailOath() {
    this.setState({ isEmail: true });
  }

  handleGoogleOath() {
    console.log('google had been clicked');
  }

  render() {
    var emailLogin = <div>
      <TextInput 
        autoFocus={true}
        keyboardType={'email-address'}
        returnKeyType={'next'}
      />
      <TextInput 
        secureTextEntry={true}
        keyboardType={'default'}
      />
      <Button
        onPress={this.handleLogin}
        title="Login"
        color="#841584"
        accessibilityLabel="click to login"
      />
    </div>

    return (
      <View style={styles.container}>
        <Button
          onPress={this.handleEmailOath}
          title="Email Login"
          color="#841584"
          accessibilityLabel="Use email and password to login"
        />
        <Button
          onPress={this.handleGoogleOath}
          title="Google Login"
          color="#841584"
          accessibilityLabel="Use youre google account to login"
        />
        { emailLogin }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginSection: {
    // display: (this.state.isEmail) ? 'block': 'none' 
  }
});