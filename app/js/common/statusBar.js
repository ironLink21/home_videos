'use strict';

import React, { Component, Platform, TouchableHighlight, TouchableNativeFeedback }  from 'react';
import { View, StyleSheet, StatusBar, Button }                                      from 'react-native';

export default class MyStatusBar extends Component {
    constructor(props){
        super(props);

        this.openMenu = this.openMenu.bind(this);
    }

    openMenu() {
        console.log("I've been clicked");
    }

    render() {
        const propStyle = this.props.styles;
        const android = (propStyle.backgroundColor) ? propStyle.backgroundColor : "";
        const iOS = (this.props.iosType) ? this.props.iosType : "default";

        return (
            <View style={ propStyle }>
                <StatusBar  backgroundColor={ android } 
                            barStyle={ iOS } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        backgroundColor: "blue"
    }
})