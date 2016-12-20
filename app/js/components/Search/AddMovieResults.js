'use strict';

import React, { Component }                             from 'react';
import { StyleSheet, Text, View, TextInput, Button }    from 'react-native';
import renderIf                                         from '../common/renderIf';
import imdb                                             from 'imdb-api';
import { Container, Content, Icon, CardItem, Card, Thumbnail, Title, List, ListItem} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class AddMovieResults extends Component {

    search() {   
    // Set loading to true when the search starts to display a Spinner        
    this.setState({            
        loading: true          
    });

    var movie = this;        
        imdb.get(this.state.search)       
    .then((response) => response.json())            
    .then((responseJson) => {      
        // Store the results in the state variable results and set loading to                 
         // false to remove the spinner and display the list of repositories                
          movie.setState({                    
        results: responseJson,                    
        loading: false                
    });
    return responseJson.Search;            
}) 
    .catch((error) => {
        movie.setState({                    
        loading: false                 
    });
        console.error(error);        
    });    
}


  render() {
    return (

                    <Card scrollEnabled={true}> 
                        <CardItem button >  

                           <List dataArray={this.state.results.items} renderRow={(item) =>               
                                <ListItem button >
                                <Row> 

                                  <Col size={1}>
                                    <Thumbnail square style={{ height: 90, width:60, bottom:6,justifyContent: 'center',}} source={{uri: item.poster}} /> 
                                  </Col>  

                                  <Col size={3}>
                                    
                                    <Row size={3}> 
                                    <Text style={{ fontSize: 25, color: '#DD5044',justifyContent: 'center',}}>{item.title}</Text>      
                                    </Row>

                                    <Row size={1}>
                                    <Text style={{ fontSize: 15, color: '#DD5044',}}>{item._year_data}</Text>    
                                   </Row>
                                   
                                   </Col>
                                  </Row>  
                                </ListItem>                            
                            } />
                        </CardItem>
                    </Card> 
    );
  }
}