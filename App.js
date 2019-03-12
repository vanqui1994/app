import React, { Component } from 'react';
import { createDrawerNavigator,createAppContainer } from 'react-navigation'
import {Container} from 'native-base';

import HomeScreen from './src/screen/HomeScreen';
import MenuScreen from './src/screen/MenuScreen';


const MyDrawerNavigator = createDrawerNavigator({
	'Trang chủ':{ 
		screen: HomeScreen,
	},
	'Danh mục': {
		screen: MenuScreen,
	},
 });
 
const MyApp = createAppContainer(MyDrawerNavigator);

class App extends React.Component{
    render(){
      return(
        <Container>
          <MyApp ></MyApp >
        </Container>
      );
    }
}//End of App class

export default App;