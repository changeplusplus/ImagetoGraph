import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Heading from "./Heading";

export default class Title extends Component {
    render() {
        return (
            < View style = {{ flex: 2, justifyContent: "center", alignItems: "center"}}>
    <Heading text = {this.props.htext} subtext = {this.props.shtext}/>
        < /View>
    );
    }
}
