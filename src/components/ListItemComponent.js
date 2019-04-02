import React, { Component } from 'react'
import { Text,Image} from 'react-native'
import {Card, CardItem,Left, Body} from 'native-base';
import Moment from 'react-moment';

export default class ListItemComponent extends Component {
  render() {
    return (
        <Card>
            <CardItem>
            <Left>
                <Image source={require('../icons/icon-news.png')} style={{width:40,height:40}}/>
                <Body>
                    <Text style={{flexDirection: 'row',flex: 1,fontWeight: 'bold'}} numberOfLines={2}>{this.props.item.title}</Text>
                    <Text note><Moment unix element={Text} format="DD/MM/YYYY hh:mm">{this.props.item.time}</Moment></Text>
                </Body>
            </Left>
            </CardItem>
            <CardItem cardBody>
                <Image source={{uri: this.props.item.cover}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
        </Card>
    )
  }
}