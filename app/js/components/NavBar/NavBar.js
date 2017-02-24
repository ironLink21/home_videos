'use strict';

import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import {Container, Content, View, Text, Header, Title, Icon, Button, List, ListItem, InputGroup, Input} from 'native-base';



export default class NavBar extends Component {


                  
  render() {
    return (

        <Header>
          <Button transparent><Icon name='ios-menu'/></Button>
          <Title>Home Video Catalog</Title>
          <Button transparent onPress={()=>this.props.setSearchVisible()}><Icon name='ios-search'/></Button>
        </Header>

    );}
}