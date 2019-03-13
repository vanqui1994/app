import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {ScrollView,TouchableOpacity,View} from 'react-native'
import {NavigationActions} from 'react-navigation';
import {Container,Header,Content,Card,CardItem,Text,Right,Left,Thumbnail} from 'native-base'

import jsonMenu from '../configs/jsonSideMenu';

class SideMenuComponent extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    state = jsonMenu;

    renderMenu(){
        return(
            <ScrollView>
                {
                    this.state.menu.map((item,index) => (
                        <Card key={item.id}>
                            <TouchableOpacity onPress={this.navigateToScreen('MenuScreen')}>
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
                            {
                                item.children.map((itemChild,indexChild) => (
                                    <View style={{paddingLeft:10}} key={itemChild.id}>
                                        <TouchableOpacity onPress={this.navigateToScreen('MenuScreen')} >
                                            <CardItem>
                                                <Left>
                                                    <Thumbnail square small source={require('../icons/icon-list-child.png')} style={{width:20,height:20}}/>
                                                    <Text>{itemChild.name}</Text>
                                                </Left>
                                                <Right>
                                                    <Thumbnail square small source={require('../icons/arrow-forward.png')} style={{width:20,height:20}}/>
                                                </Right>
                                            </CardItem>
                                        </TouchableOpacity>
                                    </View>
                                ))
                            }
                        </Card>
                    ))
                }
            </ScrollView>
        )
    }


    render() {
        return (
            <Container>
                <Header style={{backgroundColor : "#FE8028"}}></Header>
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