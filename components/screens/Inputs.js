import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Inputs extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Real Draw</Text>
                <Text>Select your input type</Text>

                <Button title="Take/Upload Photo"
                        onPress={() => this.props.navigation.navigate('TakePhoto')}/>
                <Button title="Whiteboard"
                        onPress={() => this.props.navigation.navigate('Whiteboard')}/>
                <Button title="Customized Input"
                        onPress={() => this.props.navigation.navigate('InputText')}/>
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