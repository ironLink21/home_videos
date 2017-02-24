'use strict';

import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import {Container, Content, View, Text, Header, Title, Icon, Button, List, ListItem, InputGroup, Input} from 'native-base';
import NavBar from'./NavBar'


export default class BarOfSearch extends Component {
                  constructor(props) {
                        super(props);
                        this.state = {
                            isSearchVisible: false,
                            search: '',
                        }
                    }

setSearchVisible( isSearchVisible ) {
                this.setState({
                    isSearchVisible:!this.state.isSearchVisible,
                });}

clear() {
        // clears Search bar
        this.setState({
            search:"",
}
)};                 

                  
  render() {

const barOfSearch = (!this.state.isSearchVisible) ? <View/> :<List>
                                                                <ListItem>
                                                                    <InputGroup>
                                                                        <Icon name='ios-search' />
                                                                        <Input placeholder="Search for a movie or tv show" value={this.props.addMovieSearch}  onChangeText={(text) => this.setState({search:text})} onSubmitEditing={()=>this.props.search()}/>
                                                                        <Button transparent onPress={()=>this.clear()}><Icon name='ios-close' /></Button>
                                                                    </InputGroup> 
                                                                </ListItem>
                                                                <Button block onPress={()=>this.props.search()}>Search</Button>
                                                            </List>

    return (
      <Container>
        <Content>
            <NavBar setSearchVisible={this.setSearchVisible.bind(this)}/>
            {barOfSearch}
        </Content>
      </Container>
    );}
}