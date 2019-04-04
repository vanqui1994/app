import React, { Component } from 'react';
import {Image,StyleSheet,Dimensions,View} from 'react-native';
import { Container, Left,Right, Content, Spinner, CardItem, Text, Icon, Title,Body} from 'native-base';
import HeaderComponent from '../components/HeaderComponent' 
import axios from "axios";
import Moment from 'react-moment';
import _ from 'lodash'
import HTML from 'react-native-render-html'
import { IGNORED_TAGS } from 'react-native-render-html/src/HTMLUtils';
import Video from 'react-native-video';


  const tags = _.without(IGNORED_TAGS, 
    'table', 'caption', 'col', 'colgroup', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr','img','video','div'
)

const tableDefaultStyle = {
  flex: 1,
  justifyContent: 'center',
}

const tableColumnStyle = {
  ...tableDefaultStyle,
  flexDirection: 'column',
  alignItems: 'stretch'
}

const tableRowStyle = {
  ...tableDefaultStyle,
  flexDirection: 'row',
  alignItems: 'stretch'
}

const tdStyle = {
  	padding: 3
}

const thStyle = {
  ...tdStyle,
  backgroundColor: '#CCCCCC',
  alignItems: 'center',
}
const {height,width} = Dimensions.get('window');

const renderers = {
    table: (x, c) => <View style={tableColumnStyle} key={Math.random()}>{c}</View>,
    col: (x, c) => <View style={tableColumnStyle} key={Math.random()}>{c}</View>,
    colgroup: (x, c) => <View style={tableRowStyle} key={Math.random()}>{c}</View>,
    tbody: (x, c) => <View style={tableColumnStyle} key={Math.random()}>{c}</View>,
    tfoot: (x, c) => <View style={tableRowStyle} key={Math.random()}>{c}</View>,
    th: (x, c) => <View style={thStyle} key={Math.random()}>{c}</View>,
    thead: (x, c) => <View style={tableRowStyle} key={Math.random()}>{c}</View>,
    caption: (x, c) => <View style={tableColumnStyle} key={Math.random()}>{c}</View>,
    tr: (x, c) => <View style={tableRowStyle} key={Math.random()}>{c}</View>,
    td: (x, c) => <View style={tdStyle} key={Math.random()}>{c}</View>,
	img :(x,c) => <Image  key={Math.random()} source={{uri : x.src}} style={{width:width-20,height:450,flex:1}}/>,
	video :(x,c) => <Video paused={true} muted={false} resizeMode={"cover"} repeat={false} controls={true} style={css.video} key={Math.random()} source={{uri: x.src}} />,
	div : (x,c) => <Text key={Math.random()}></Text>
}
  
export default class DetailScreen extends Component {
	constructor (props) {
		super(props)
		const { navigation } = this.props;

        this.state = { 
			dataNews : [],
			isLoading : true,
			navigation : navigation,
			title : ''
		};
	}

	componentDidMount(){
		//this.ref.scrollView.scrollToOffset({ offset: 0,  animated: false })
		const {navigation} = this.state;
		const id = navigation.getParam('id', '');	
		const title = navigation.getParam('title', '');	
		this.setState({title : title});

		const path = `http://api.news.zing.vn/api/mobile/a${id}.json`
		this.getDataFromSever(path);
	}

	componentWillReceiveProps(nextProps){
		const id = nextProps.navigation.state.params.id;
		const title = nextProps.navigation.state.params.title;
		this.setState({title : title})

		const path = `http://api.news.zing.vn/api/mobile/a${id}.json`
		this.getDataFromSever(path);
	}

    getDataFromSever = async (path) => {
		let res = await axios.get(path);
		let { data } = await res.data;
		this.setState({ dataNews: data[0],isLoading : false });
	};

  	render() {
		return (
		<Container>
			<HeaderComponent {...this.props} title={this.state.title}/>
			{this.state.isLoading ? <Spinner color='#9DCAEF'/>: <Content>
				<CardItem cardBody>
					<Image source={{uri: this.state.dataNews.cover}} style={css.cardImage}/>
				</CardItem>
				<Content padder>
					<Text style={css.cardContentText} numberOfLines={4}>
						{this.state.dataNews.title}
					</Text>
					<CardItem>
						<Left>
							<Image source={require('../icons/icon-author.png')} style={css.imgAuthor}/>
							<Text>{this.state.dataNews.author}</Text>
						</Left>
						<Right>
							<Text note><Moment unix element={Text} format="DD/MM/YYYY hh:mm">{this.state.dataNews.time}</Moment></Text>
						</Right>
					</CardItem>
					<HTML html={this.state.dataNews.content} key={this.state.dataNews.time}  ignoredTags={tags} renderers={renderers}/>
				</Content>
			</Content>}
				
		</Container>
    );
  }
}


const css = StyleSheet.create({
	cardImage : {
		height: 200, 
		width: null, 
		flex: 1
	},
	cardContentText : {
		flexDirection: 'row',
		flex: 1,
		fontWeight: 'bold',
		fontSize:20
	},
	imgAuthor : {
		height: 30, 
		width: 30
	},
	video : {
		aspectRatio: 1,
		width: "100%"
	}
})