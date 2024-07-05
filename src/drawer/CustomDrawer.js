import {View, Text, TouchableOpacity,Button,StyleSheet} from 'react-native';
import React from 'react';
import DrawerNavigator from './DrawerNavigator';
import { useNavigation } from '@react-navigation/native';

// const navigateToHome = () => {
//   navigation.navigate('Screen1');
// };

const CustomDrawer = () => {
  
  const navigation = useNavigation()
  return (
    <View style={{flex: 1, backgroundColor: 'white',paddingVertical:30,flexDirection:'column',gap:10}}>
      <TouchableOpacity style={styles.button} >
        <Text style={{fontSize:16}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize:16}}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('About')}}>
        <Text style={{fontSize:16}} >About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button:{
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    alignItems: 'center',
  }
})

export default CustomDrawer;
