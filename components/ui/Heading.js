import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Heading extends Component {
    render() {
        return (
            <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
    <Text>{this.props.text}</Text>
        </View>
    );
    }
}