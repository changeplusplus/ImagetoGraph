import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TakePhoto extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Real Draw</Text>
                <Text>Take Photo</Text>
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