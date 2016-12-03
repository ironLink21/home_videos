'use strict';

import React, { Component }                             from 'react';
import { StyleSheet, Text, View, TextInput, Button }    from 'react-native';
import renderIf                                         from '../common/renderIf';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: 400
  },
  loginSection: {
      width: 400
  }
});

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {isEmail: false, emailBtn: "Email Login"};

    this.handleEmailOath = this.handleEmailOath.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleEmailOath() {
      var isEmail;
      var emailBtn;

      if(this.state.isEmail){
          isEmail = false;
          emailBtn = "Email Login";
      } else {
          isEmail = true;
          emailBtn = "Cancel";
      }

    this.setState({ isEmail, emailBtn });
  }

  handleLogin(){
      this.props.handleEmailLogin(this.state.email, this.state.password);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.handleEmailOath}
          title={this.state.emailBtn}
          color="#0000ff"
          accessibilityLabel="Use email and password to login"
        />

        {renderIf(!this.state.isEmail)(
            <Button
                onPress={this.props.handleGoogleOath}
                title="Google Login"
                color="#00ff00"
                accessibilityLabel="Use youre google account to login"
            />
        )}

        {renderIf(this.state.isEmail)(
            <View style={styles.loginSection}>
                <TextInput 
                    autoFocus={true}
                    placeholder="Email"
                    keyboardType={'email-address'}
                    returnKeyType={'next'}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput 
                    secureTextEntry={true}
                    keyboardType={'default'}
                    placeholder="Password"
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <Button
                    onPress={this.handleLogin}
                    title="Login"
                    color="#0000ff"
                    accessibilityLabel="click to login"
                />
            </View>
        )}
        
      </View>
    );
  }
}