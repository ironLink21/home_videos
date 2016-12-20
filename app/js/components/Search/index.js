'use strict';

import React, { Component }                             from 'react';
import { StyleSheet, Text, View, TextInput, Button }    from 'react-native';
import renderIf                                         from '../common/renderIf';
import { Container, Header, Title, Content} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import AddMovieResults  from './AddMovieResults';
import SearchBar  from './SearchBar';


export default class AddNewMovie extends Component {



  render() {
    return (
        <Container scrollEnabled={false}>
            <Header>
                <Title> Add Movie</Title>
            </Header>
            <Content>
        <Grid>
            <Col>
                <SearchBar/>
                <AddMovieResults/>
            </Col>
        </Grid>
            </Content>
        </Container>
    );
  }
}