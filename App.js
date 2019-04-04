import React, { Component } from 'react';
import { createDrawerNavigator,createAppContainer } from 'react-navigation'
import {Container} from 'native-base';
import {Dimensions} from 'react-native'

import HomeScreen from './src/screen/HomeScreen';
import MenuScreen from './src/screen/MenuScreen';
import DetailScreen from './src/screen/DetailScreen';
import SplashScreen from './src/screen/SplashScreen';
import SideMenu from './src/components/SideMenuComponent';

const {height,width} = Dimensions.get('window');
const MyDrawerNavigator = createDrawerNavigator(
	{
		'HomeScreen':HomeScreen,
		'MenuScreen':MenuScreen,
		'DetailScreen':DetailScreen
	},
	{
		initialRouteName: "HomeScreen",
		drawerWidth: width / 1.7,
		contentComponent: props => <SideMenu {...props} activeTintColor="red"/>,
		contentOptions: {
			inactiveTintColor: "#0dc45c",
			activeTintColor: 'red'
		},
    }
);
 
const Home = createAppContainer(MyDrawerNavigator);

class App extends Component{
	constructor(props){
		super(props);
		this.state = { currentScreen : 'Splash' }
		setTimeout(() => {
			this.setState({ currentScreen : 'Home' })
		},2000)
	}

    render(){
		const {currentScreen} = this.state;
		let mainScreen = currentScreen === 'Splash' ? <SplashScreen/> : <Home/>;
		return(
			<Container>
				{mainScreen}
			</Container>
		);
    }
}

export default App;