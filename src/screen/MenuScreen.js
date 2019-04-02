import React, { Component } from 'react'
import {FlatList,RefreshControl} from 'react-native'
import HeaderComponent from '../components/HeaderComponent' 
import { Container, Spinner} from 'native-base';
import ListItemComponent from '../components/ListItemComponent'
import * as general from '../utils/general'


export default class MenuScreen extends Component {
	constructor (props) {
		super(props)
		const { navigation } = this.props;
			
        this.state = { 
			dataNews : [],
			isLoading : true,
			title : 'Danh mục',
			refreshing : false,
			page : 1,
			navigation : navigation
		};
	}


	componentWillMount(){
		const {page,navigation} = this.state;
		const path = navigation.getParam('path', '')+"?c20&p="+page;	
		const title =  navigation.getParam('title', 'Danh mục');	
		this.setState({title : title})
		this.getDataFromSever(path);
	}

	componentWillReceiveProps(nextProps){
		const path = nextProps.navigation.state.params.path;
		const title = nextProps.navigation.state.params.title;
		this.setState({title : title})

		this.getDataFromSever(path);
	}

	getDataFromSever = (path) => {
		general.getData(path).then((news) => {
			this.setState({ dataNews : news ,isLoading : false,refreshing:false})
		}).catch((error) => {
			this.setState({ dataNews : [] ,isLoading : true,refreshing:false})
		})
	}

	_onRefresh = () => {
		const {navigation } = this.props;
		const path = navigation.getParam('path', '')+"?c20&p=1";	
		const title =  navigation.getParam('title', 'Danh mục');	
		this.setState({title : title})	
		this.getDataFromSever(path);
	}

	render() {
		
		return (
			<Container>
				<HeaderComponent {...this.props} title={this.state.title}/>
				{this.state.isLoading ? <Spinner color='#9DCAEF'/>: null}
				<FlatList data={this.state.dataNews}
                renderItem={({item,index}) => {
                    return(
                        <ListItemComponent item={item} index={index} parentFlatList={this}/>
                    );
                }}
				keyExtractor={(item) => item.id }
				refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh}/>
                }
                />
			</Container>
		)
	}
}
