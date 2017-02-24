'use strict';

import React, {Component}       from 'react';
import { StyleSheet, View }     from 'react-native';
import {bindActionCreators}     from 'redux';
import * as application         from '../actions/application';
import { connect }              from 'react-redux';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import AddNewMovie                   from './AddMovie';



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
            <Container> 
            
                <Content>
                       
                          <AddNewMovie/>
                        
                 </Content>
            </Container>
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
