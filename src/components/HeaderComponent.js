import React, { Component } from 'react'
import {TouchableOpacity,StyleSheet,Platform,StatusBar} from 'react-native';
import {Header,Left,Right,Thumbnail,Body,Title } from 'native-base';

export default class HeaderComponent extends Component {

    showStatusBar(){
        if(Platform.OS === 'ios'){
            return(
                <StatusBar backgroundColor="#FE8028" barStyle="light-content"/>
            )
        }
    }

    render() {
        return (
            <Header style={css.headerStyle}>
                {this.showStatusBar()}
                <Left style={{ flexDirection: 'row',flex : 1}}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Thumbnail square small source={require('../icons/menu-icon.png')} />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Title style={css.titleStyle}>{this.props.title}</Title>
                </Body>
                <Right></Right>
            </Header>
        )
    }
}

const css = StyleSheet.create({
    headerStyle : {
        backgroundColor : "#FE8028"
    },
    titleStyle : {
        color : "white"
    }
})
