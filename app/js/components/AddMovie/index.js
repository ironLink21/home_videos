 import React, { Component } from 'react';
 import { AppRegistry, StyleSheet, Modal, Image, Platform, ScrollView } from 'react-native';
 import { Spinner, Text, View, Content, Container, Header, Title, Icon, Button, InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem, H3, H1, H2,h4, Badge, Textarea } from 'native-base';
 import { Col, Row, Grid }                               from "react-native-easy-grid";
 import BarOfSearch from "../NavBar/"

 export default class AddNewMovie extends Component  {
                constructor(props) {
                        super(props);
                        this.state = {
                            Search:'',
                            isModalVisible: false,
                            selectedItem: undefined,
                            results: {}
                        }
                    }


setModalVisible( isModalVisible, selectedItem ) {
                this.setState({
                    isModalVisible,
                    selectedItem
                });}
              


    search() {
        // Set loading to true when the search starts to display a Spinner
        this.setState({
            loading: true
        });

        var searchURL = 'https://api.themoviedb.org/3/search/multi?api_key=04ac5e20700da696a4b482b8e3d1c26e&language=en-US&query='+ this.props.AddNewMovie;
        fetch(searchURL)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    results: responseJson.results,
                    loading: false
                });
            })
            .catch((error) => {

                this.setState({
                    loading: false
                });

                console.error(error);
        });
    }


    render() {


const itemSearchDisplay = ( this.state.loading ) ? <Spinner /> : <List dataArray={this.state.results} renderRow={(item)  =>
                                                                
                                                                    <ListItem button onPress={()=>this.setModalVisible(true, item)} scrollEnabled={ true }  >
                                                                        <Col size={1} >
                                                                            <Thumbnail square height={90} width={60} source={{uri:'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+item.poster_path}} />
                                                                        </Col>
                                                                        <Col size={3} >
                                                                            <Text>Name: <Text style={{fontWeight: '600', color: '#46ee4b'}}>{item.title}{item.name}</Text></Text>
                                                                            <Text style={{color:'#007594'}}>{item.release_date}{item.first_air_date}</Text>    
                                                                            <Text note>Type: <Text note style={{marginTop: 5}}>{ item.media_type }</Text></Text> 
                                                                        </Col>
                                                                    </ListItem>
                                                                } />; 


const itemDisplayModal = <Modal
                            animationType="slide"
                            visible={this.state.isModalVisible}
                            onRequestClose={() => this.setModalVisible(false, null)} 
                            >
                                    {!this.state.selectedItem ? <View /> : 
                                                                        <Card style={{paddingTop: 30}}>
                                                                            <ScrollView>
                                                                            <CardItem>
                                                                                <Image style={styles.negativeMargin} style={styles.modalImage} source={{uri:'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+ this.state.selectedItem.poster_path}}  />
                                                                                <Input disabled value={this.state.selectedItem.title} value={this.state.selectedItem.name} />
                                                                            </CardItem>
                                                                                
                                                                            <CardItem>
                                                                                <H3 header>
                                                                                    Year:
                                                                                </H3>
                                                                                <Input value={this.state.selectedItem.release_date} value={this.state.selectedItem.first_air_date} />
                                                                            </CardItem> 

                                                                            <CardItem>
                                                                                <H3 header>
                                                                                    Summary:
                                                                                </H3>
                                                                                    <Input multiline style={{height: 150}} value={this.state.selectedItem.overview} />
                                                                            </CardItem> 
                                                                           
                                                                            <CardItem>
                                                                            <Button block success style={{alignSelf: 'flex-end'}} onPress={() => {
                                                                                        this.setModalVisible(!this.state.isModalVisible, this.state.selectedItem)
                                                                                    }}>
                                                                                    Go Back
                                                                                </Button>
                                                                            </CardItem>
                                                                                </ScrollView>
                                                                          </Card>  
                                    }
                     </Modal>;                                                                                 

        return (
                <Container>
                    <Content>
                        <BarOfSearch search={this.search.bind(this)} setSearch={this.state.search}/>
                        { itemSearchDisplay }
                        { itemDisplayModal }
                        
                    </Content>
                </Container>





            
         );
     }
 }







const styles = StyleSheet.create({
    header : {
        marginLeft: -5,
        marginTop: 5,
        marginBottom: (Platform.OS==='ios') ? -7 : 0,
        lineHeight: 24,
        color: '#5357b6'
    },
    modalImage: {
        resizeMode: 'contain',
        height: 200
    },
    bold: {
        fontWeight: '600'
    },
    negativeMargin: {
        marginTop: 20,
        // marginBottom: -10,
        marginLeft: 10,
    }
});

