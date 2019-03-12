import React, { Component } from 'react'
import {Container} from 'native-base';
import HeaderComponent from '../components/HeaderComponent' 

export default class HomeScreen extends Component {

    render() {
        return (
            <Container>
                <HeaderComponent {...this.props} title="Trang chủ"/>
            </Container>
        )
    }
}
