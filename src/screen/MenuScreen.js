import React, { Component } from 'react'
import {Container,Body,Text,Button} from 'native-base';
import HeaderComponent from '../components/HeaderComponent' 

export default class MenuScreen extends Component {
  render() {
    return (
        <Container>
            <HeaderComponent {...this.props} title="Danh mục"/>
            <Body>
                <Button onPress={() => this.props.navigation.goBack()} >
                    <Text>Go back home</Text>
                </Button>
            </Body>
        </Container>
    )
  }
}
