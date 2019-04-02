import React, { Component } from 'react'
import {Image,StyleSheet} from 'react-native'
import {Container} from 'native-base';

export default class SplashScreen extends Component {
    render() {
        
        return (
            <Container style={styles.container}>
                <Image source={require('../icons/logo.png')}/>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9DCAEF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white'
    }
})