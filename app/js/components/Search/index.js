'use strict';

import React, { Component }                             from 'react';
import { StyleSheet, Text, View, TextInput, Button }    from 'react-native';
import renderIf                                         from '../common/renderIf';
import { Container, Header, Title, Content, Icon, CardItem, Card, Input, InputGroup} from 'native-base';
import AddMovieResults  from './AddMovieResults'


export default class SearchBar extends Component {


  render() {
    return (
        <Container>
            <Header>
                <Title> Add Movie</Title>
            </Header>
            <Content>
                <Card> 
                    <CardItem searchBar rounded>                      
                        <InputGroup>
                            <Icon name="ios-search" />
                            <Input placeholder="Search" />
                        </InputGroup>
                    </CardItem>
                </Card> 
                  <AddMovieResults/>
            </Content>
        </Container>
    );
  }
}