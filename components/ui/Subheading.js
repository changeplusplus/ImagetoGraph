import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Subheading extends Component {
    render() {
        return (
            < View style = {{ flex: 0, alignItems: "center"}}>
        < Text > {this.props.text} < /Text>
        < /View>
    );
    }
}
