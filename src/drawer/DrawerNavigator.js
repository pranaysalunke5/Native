// import {View, Text} from 'react-native';
// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import Main from './Main';
// import CustomDrawer from './CustomDrawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Screen1 from '../bottom/Screen1';

// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator drawerContent={props=><CustomDrawer {...props}/>}>
//       <Drawer.Screen name="Main" component={Main} options={{headerShown:true}} />
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigator;
 
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class DrawerNavigator extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent Hii </Text>
      </View>
    )
  }
}

export default DrawerNavigator
