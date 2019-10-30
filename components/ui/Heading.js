import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Subheading from './Subheading'

export default class Heading extends Component {
    render() { return (
        < View style = {styles.container}>
            <Text style={styles.heading}> {this.props.text} </Text>
            <Text> {this.props.subtext}  </Text>
        </View>
    );
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 25,
        fontWeight: "bold",
    },
});