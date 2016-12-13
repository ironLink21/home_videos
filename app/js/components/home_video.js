'use strict';

import React, {Component}       from 'react';
import { StyleSheet, View }     from 'react-native';
import {bindActionCreators}     from 'redux';
import * as application         from '../actions/application';
import { connect }              from 'react-redux';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

import Login                    from './Login';

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

class HomeVideo extends Component {
  constructor(props) {
    super(props);

    this.handleGoogleOath = this.handleGoogleOath.bind(this);
    this.handleEmailLogin = this.handleEmailLogin.bind(this);
  }

  handleGoogleOath() {
    console.log('google had been clicked');
  }

  handleEmailLogin(email, password) {
    console.log('login clicked');
    this.props.emailOath(email, password);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <View style={styles.container}>
            <Container> 
                <Header>
                    <Title>Home Videos</Title>
                </Header>

                <Content>

                       
                          <Login
                              handleGoogleOath={()=>this.handleGoogleOath}
                              handleEmailLogin={()=>this.handleEmailLogin}
                            />
                        
                 </Content>

                <Footer>
                    <FooterTab>
                         
                    </FooterTab>
                </Footer>
            </Container>
      </View>
    );
  }
}

export default connect(state => ({
    state: {}
  }),
  (dispatch) => ({
    actions: bindActionCreators(application, dispatch)
  })
)(HomeVideo);
