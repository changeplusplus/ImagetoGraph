import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Heading from "./Heading";

export default class Title extends Component {
    render() {
        return (
            < View style = {{ flex: 2, justifyContent: "center", alignItems: "center"}}>
                <Heading text = {this.props.htext} subtext = {this.props.shtext}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});