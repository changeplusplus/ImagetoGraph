import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Subheading from './Subheading'

export default class Heading extends Component {
    render() { return (
            < View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
    <Text style={{fontSize: 40}}> {this.props.text} < /Text>
        < Text > {this.props.subtext} < /Text>
        < /View>
    );
    }
}