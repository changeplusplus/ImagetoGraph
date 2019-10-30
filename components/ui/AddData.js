import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class AddData extends Component {
    render() {
        return (
            < View style = {styles.container}>
                <Button title={this.props.buttonName} onCLick={this.props.buttonFunction}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});