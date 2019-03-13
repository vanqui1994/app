import React, { Component } from 'react';
import { createDrawerNavigator,createAppContainer } from 'react-navigation'
import {Container} from 'native-base';

import HomeScreen from './src/screen/HomeScreen';
import MenuScreen from './src/screen/MenuScreen';
import SplashScreen from './src/screen/SplashScreen';


const MyDrawerNavigator = createDrawerNavigator({
	'Trang chủ':{ 
		screen: HomeScreen,
	},
	'Danh mục': {
		screen: MenuScreen,
	},
 });
 
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