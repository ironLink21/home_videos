 import React, { Component } from 'react';
 import { AppRegistry, StyleSheet, Modal, Image, Platform, ScrollView } from 'react-native';
 import { Spinner, Text, View, Content, Container, Header, Title, Button, Icon, InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem, H3, H1, H2, Badge } from 'native-base';
 import { Col, Row, Grid }                               from "react-native-easy-grid";

 export default class AddNewMovie extends Component  {
                constructor(props) {
                    super(props);
                    this.state = {
                        isModalVisible: false,
                        selectedItem: undefined,
                        results: {}
                    }}

setModalVisible( isModalVisible, selectedItem) {
                this.setState({
                    isModalVisible,
                    selectedItem
                });}

    search() {
        // Set loading to true when the search starts to display a Spinner
        this.setState({
            loading: true
        });

        var searchURL = 'https://api.themoviedb.org/3/search/multi?api_key=04ac5e20700da696a4b482b8e3d1c26e&language=en-US&query='+ this.state.search;
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
                                                                            <Text>Title: <Text style={{fontWeight: '600', color: '#46ee4b'}}>{item.title}{item.name}</Text></Text>
                                                                            <Text>Year: <Text style={{color:'#007594'}}>{item.release_date}{item.first_air_date}</Text></Text>    
                                                                            <Text note>Type: <Text note style={{marginTop: 5}}>{ item.media_type }</Text></Text>
                                                                        </Col>
                                                                    </ListItem>
                                                                } />; 


const itemDisplayModal = <Modal
                            animationType="slide"
                            visible={this.state.isModalVisible}
                            onRequestClose={() => this.setModalVisible(false, item)} 
                            >
                                    {!this.state.selectedItem ? <View /> : 
                                                                        <Card style={{paddingTop: 20}}>
                                                                        <CardItem cardBody style={{justifyContent: 'flex-start'}}>
                                                                                <Image style={styles.modalImage} source={{uri:'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+ this.state.selectedItem.poster_path}}  />
                                                                                <h4 style={styles.header}> {this.state.selectedItem.title}{this.state.selectedItem.name}
                                                                                </h4>

                                                                                <Text style={styles.negativeMargin} >
                                                                                Release Date: {this.state.selectedItem.release_date}{this.state.selectedItem.first_air_date}
                                                                                </Text>

                                                                                <Text style={styles.negativeMargin} >
                                                                                Summery: <Text style={styles.bold}>{this.state.selectedItem.overview}</Text>
                                                                                </Text>

                                                                                <Button danger style={{alignSelf: 'flex-end'}} onPress={() => {
                                                                                this.setModalVisible(!this.state.modalVisible, this.state.selectedItem)
                                                                                }}>
                                                                                    Go Back
                                                                                </Button>
                                                                                </CardItem>
                                    
                                                                          </Card>  
                                    }
                     </Modal>;                                                            

        return (
                <Container>
                    <Header searchBar rounded scrollEnabled={ false }>
                        <InputGroup>
                            <Icon name="ios-search" />
                            <Input placeholder="Search" value={this.state.search}  onChangeText={(text) => this.setState({search:text})} onSubmitEditing={()=>this.search()} />
                        </InputGroup>
                        <Button transparent onPress={()=>this.search()}>Search</Button>
                    </Header>
                    <Content scrollEnabled={ true }>
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
        marginBottom: -10
    }
});

