'use strict';

import React, { Component }                             from 'react';
import { StyleSheet, Text, View, TextInput, Button }    from 'react-native';
import renderIf                                         from '../common/renderIf';
import { Container, Content, Icon, CardItem, Card, Thumbnail, Title, List, ListItem} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class AddMovieResults extends Component {

    search() {   
    // Set loading to true when the search starts to display a Spinner        
    this.setState({            
        loading: true          
    });

    var that = this;        
        imdb.getReq({ name: this.state.search }, function(err, things) {movie = things;})         
    .then((response) => response.json())            
    .then((responseJson) => {      
        // Store the results in the state variable results and set loading to                 
         // false to remove the spinner and display the list of repositories                
          that.setState({                    
        results: responseJson,                    
        loading: false                
    });
    return responseJson.Search;            
}) 
    .catch((error) => {
        that.setState({                    
        loading: false                 
    });
        console.error(error);        
    });    
}


  render() {
    return (
                    <Card scrollEnabled={true}> 
                        <CardItem button >  
                         <Row>                    
                            <Col size={1}>
                                <Thumbnail square style={{ height: 90, width:60, bottom:6,justifyContent: 'center',}} source={require('/Users/weston/Documents/home_videos/app/Image/movie.jpeg')} />
                            </Col>
                            <Col size={3} style={{justifyContent: 'center', left:10,}}>
                                <Row size={3}>
                                  <Text style={{ fontSize: 25, color: '#DD5044',justifyContent: 'center',}}>Movie Title</Text>
                                </Row>
                                <Row size={1}>
                                 <Text style={{ fontSize: 15, color: '#DD5044',}}>2016</Text>
                                </Row>
                            </Col>
                        </Row>
                        </CardItem>
                    </Card> 
    );
  }
}