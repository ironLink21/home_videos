'use strict';

import React, { Component }                             from 'react';
import { StyleSheet, Text, View, TextInput, Button }    from 'react-native';
import renderIf                                         from '../common/renderIf';
import { Container, Content, Icon, CardItem, Card, Thumbnail, Title} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class SearchBar extends Component {


  render() {
    return (
        <Container>
            <Content>
                <Grid>
                  <Col>
                    <Card> 
                        <CardItem>  
                        
                         <Row>                    
                            <Col size={1}>
                                <Thumbnail square style={{ height: 90, width:60, bottom:6,justifyContent: 'center',}} source={require('/Users/weston/Documents/home_videos/app/Image/movie.jpeg')} />
                            </Col>
                            <Col size={2} style={{justifyContent: 'center', left:10,}}>
                                <Row size={3}>
                                  <Text style={{ fontSize: 25, color: '#DD5044',justifyContent: 'center',}}>Movie Title</Text>
                                </Row>
                                <Row size={1}>
                                 <Text style={{ fontSize: 15, color: '#DD5044',}}>2016</Text>
                                </Row>
                            </Col>
                            <Col size={1}> 
                                 <Icon name="ios-more" style={{ fontSize: 50, color: '#DD5044', top:15, left:50,}} />
                            </Col>
                            <Col size={1}>
                                <Icon name="ios-add" style={{ fontSize: 50, color: '#DD5044', top:15,left:40,}} />
                            </Col>
                         </Row> 
                         
                        </CardItem>
                    </Card> 
                 </Col>
                </Grid>
            </Content>
        </Container>
    );
  }
}