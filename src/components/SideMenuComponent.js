import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {ScrollView,TouchableOpacity,Platform} from 'react-native'
import {NavigationActions} from 'react-navigation';
import {Container,Header,Content,CardItem,Text,Right,Left,Thumbnail,Title,Body} from 'native-base'

import jsonMenu from '../configs/jsonSideMenu';

class SideMenuComponent extends Component {
    navigateToScreen = (route,params,key) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
            params : params,
            key: Math.random () * 10000
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.closeDrawer()
    }

    state = jsonMenu;

    renderMenu(){
        return(
            <ScrollView>
                {
                    this.state.menu.map((item,index) => (
                        <TouchableOpacity onPress={this.navigateToScreen('MenuScreen',{path : item.url,title : item.name})} key={item.id}>
                            <CardItem>
                                <Left>
                                    <Thumbnail square small source={require('../icons/icon-list.png')} style={{width:20,height:20}}/>
                                    <Text>{item.name}</Text>
                                </Left>
                                <Right>
                                    <Thumbnail square small source={require('../icons/arrow-forward.png')} style={{width:20,height:20}}/>
                                </Right>
                            </CardItem>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        )
    }
    renderLeft(){
        if(Platform.OS !== 'ios'){
            return(
                <Left/>
            )
        }
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor : '#9DCAEF'}}>
                    {this.renderLeft()}
                    <Body>
                        <Title style={{color:'white'}}>Danh mục</Title>
                    </Body>
                </Header>
                <Content>
                    {this.renderMenu()}
                </Content>
            </Container>
        )
    }
}

SideMenuComponent.propTypes = {
    navigation: PropTypes.object
};

export default SideMenuComponent;