import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Title from '../ui/Title';
import AddData from '../ui/AddData';

export default class Home extends React.Component {

    inputNav = () => {

    };

    render() {
        return (
            <View style={styles.container}>
                <Title htext = "RealDraw" shtext = "Vanderbilt University"/>
                <AddData buttonName = "Add Data" buttonfunction = 'null' />
                <Button title="Get Started!"
                        onPress={() => this.props.navigation.navigate('Inputs')}/>
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


