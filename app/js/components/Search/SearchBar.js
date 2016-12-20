'use strict';

import React, { Component }                             from 'react';
import { StyleSheet, Text, View, TextInput, Button }    from 'react-native';
import renderIf                                         from '../common/renderIf';
import { Container, Header, Title, Content, Icon, CardItem, Card, Input, InputGroup} from 'native-base';
import imdb                                             from 'imdb-api';




export default class SearchBar extends Component {


  render() {
    return (
                <Card> 
                    <CardItem searchBar rounded>                      
                        <InputGroup>
                            <Icon name="ios-search" />
                            <Input placeholder="Search" value={this.state.search} onChangeText={(text) => this.setState({search:text})} onSubmitEditing={()=>this.search()}/>
                        </InputGroup>
                        <Button transparent onPress={()=>this.search()}>Go</Button> 
                    </CardItem>
                </Card>
    );
  }
}