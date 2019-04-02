import React, { Component } from 'react'
import {Header,Left,Right,Thumbnail,Body,Title,Container,Spinner,Content} from 'native-base';
import {TouchableOpacity,StyleSheet,Platform,StatusBar,FlatList} from 'react-native';
import ListItemComponent from '../components/ListItemComponent';
import * as general from '../utils/general';

export default class HomeScreen extends Component {
    constructor (props) {
        super(props)
        this.state = { 
			dataNews : [],
            isLoading : true,
            refreshing : false
		};
	}

    showStatusBar(){
        if(Platform.OS === 'ios'){
            return(
                <StatusBar backgroundColor="#9DCAEF" barStyle="light-content"/>
            )
        }
    }

    componentWillMount(){
        this.getDataFromSever();
    }

    getDataFromSever(){
        var path = 'http://api.news.zing.vn/api/mobile/home.json';
        general.getData(path).then((news) => {
			this.setState({ dataNews : news ,isLoading : false,refreshing:false})
		}).catch((error) => {
			this.setState({ dataNews : [] ,isLoading : false,refreshing:false})
		})
    }

    _onRefresh = () => {
        this.getDataFromSever();
    }

    render() {
        return (
            <Container>
                <Header style={css.headerStyle}>
                    {this.showStatusBar()}
                    <Left style={{ flexDirection: 'row',flex : 1}}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Thumbnail square small source={require('../icons/menu-icon.png')} />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Title style={css.titleStyle}>Trang chủ</Title>
                    </Body>
                    <Right></Right>
                </Header>
                {this.state.isLoading ? <Spinner color='#9DCAEF'/>: null}
                <FlatList data={this.state.dataNews}
                renderItem={({item,index}) => {
                    return(
                        <ListItemComponent item={item} index={index} parentFlatList={this}/>
                    );
                }}
                keyExtractor={(item) => item.id }
                refreshing={this.state.refreshing} onRefresh={this._onRefresh}
                />
				
            </Container>
        )
    }
}

const css = StyleSheet.create({
    headerStyle : {
        backgroundColor : "#9DCAEF"
    },
    titleStyle : {
        color : "white"
    }
})