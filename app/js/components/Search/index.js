 import React, { Component } from 'react';
 import { AppRegistry, StyleSheet, Modal, Image, Platform, ScrollView } from 'react-native';
 import { Spinner, Text, View, Content, Container, Header, Title, Button, Icon, InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem, H3, H1, H2,h4, Badge } from 'native-base';
 import { Col, Row, Grid }                               from "react-native-easy-grid";

 export default class AddNewMovie extends Component  {
                constructor(props) {
                        super(props);
                        this.state = {
                            search: '',
                            isSearchVisible: true,
                            isModalVisible: false,
                            selectedItem: undefined,
                            results: {}
                        }
                    }


    clearSearch(search){
        this.setState({
            search,
        })
    }


setSearchVisible( isSearchVisible) {
                this.setState({
                    isSearchVisible,
                });}

setModalVisible( isModalVisible, selectedItem) {
                this.setState({
                    isModalVisible,
                    selectedItem
                });}

clear() {
        // clears Search bar
        this.setState({
            search:""
}
)};           


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

        const headerTitle = (this.state.isSearchVisible) ? <view/> : <Header>
                                                                        <Button transparent><Icon name="ios-menu"/></Button>
                                                                        <Title>Home Video Catalog</Title>
                                                                        <Button transparent onPress={()=>this.setSearchVisible(true)}><Icon name="ios-search"/></Button>
                                                                    </Header>;

        const barOfSearch = (!this.state.isSearchVisible ) ? <view/>: <Header searchBar rounded >
                                                                            <InputGroup>
                                                                                <Icon name="ios-search" />
                                                                                <Input placeholder="Search" value={this.state.search}  onChangeText={(text) => this.setState({search:text})} onSubmitEditing={()=>this.search()}/>
                                                                                <Button transparent onPress={()=>this.clearSearch(null)}><Icon name="ios-close"/></Button>
                                                                            </InputGroup>
                                                                            <Button transparent onPress={()=>this.setSearchVisible(false)}>Back</Button>
                                                                        </Header>;    


const header = <Header searchBar rounded>
                    <Button transparent onPress={()=>""}><Icon name="ios-menu"/></Button>
                        <InputGroup>
                            <Icon name="ios-search" />
                            <Input placeholder="Search for a Movie or TV show" value={this.state.search}  onChangeText={(text) => this.setState({search:text})} onSubmitEditing={()=>this.search()} />
                            <Button transparent onPress={()=>this.clear()}><Icon name="ios-close"/></Button>
                        </InputGroup>
                        <Button transparent onPress={()=>this.search()}>Go</Button>
                    </Header>
        

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
                                                                            <CardItem>
                                                                                <Image style={styles.modalImage} source={{uri:'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+ this.state.selectedItem.poster_path}}  />
                                                                                <H3 header style={styles.negativeMargin }>
                                                                                    {this.state.selectedItem.title}{this.state.selectedItem.name}
                                                                                </H3>
                                                                            </CardItem>
                                                                                
                                                                            <CardItem>
                                                                                <H3 header>
                                                                                    Year:
                                                                                </H3>
                                                                                <H3 style={styles.negativeMargin }>
                                                                                    <Text>
                                                                                        {this.state.selectedItem.release_date}{this.state.selectedItem.first_air_date}
                                                                                    </Text>
                                                                                </H3>
                                                                            </CardItem> 

                                                                            <CardItem>
                                                                                <H3 header>
                                                                                    Summary:
                                                                                </H3>
                                                                                
                                                                                    <H3 style={styles.negativeMargin }>
                                                                                        <Text>
                                                                                            {this.state.selectedItem.overview}
                                                                                        </Text>
                                                                                    </H3>
                                                                                
                                                                            </CardItem> 
                                                                           
                                                                            <CardItem>
                                                                            <Button danger style={{alignSelf: 'flex-end'}} onPress={() => {
                                                                                        this.setModalVisible(!this.state.isModalVisible, this.state.selectedItem)
                                                                                    }}>
                                                                                    Go Back
                                                                                </Button>
                                                                            </CardItem>
                                                                          </Card>  
                                    }
                     </Modal>;                                                                                 

        return (
                <Container scrollEnabled={ false }>
                        { headerTitle }
                        { barOfSearch }
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
        marginTop: 20,
        // marginBottom: -10,
        marginLeft: 10,
    }
});

