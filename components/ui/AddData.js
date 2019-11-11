import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import
export default class AddData extends Component {

    handleFiles = files => {
        var reader = new FileReader();
        reader.onload = function(e) {
            // Use reader.result
            alert(reader.result)
        }
        reader.readAsText(files[0]);
    }

    render() {
        return (
            < View style = {styles.container}>
                <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                    <Button title={this.props.buttonName}/>
                </ReactFileReader>
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