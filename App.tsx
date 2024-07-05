// import React from 'react';
// import {
//   Button,
//   TouchableOpacity,
//   FlatList,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Image,
//   TextInput,
// } from 'react-native';

// const App = (): React.JSX.Element => {
//   const data = [
//     {id: '1', image: require('./src/assets/images/fr.png')},
//     {id: '2', image: require('./src/assets/images/ve.jpg')},
//     {id: '3', image: require('./src/assets/images/ve.jpg')},
//     {id: '4', image: require('./src/assets/images/ve.jpg')},
//     {id: '5', image: require('./src/assets/images/ve.jpg')},
//     {id: '6', image: require('./src/assets/images/ve.jpg')},
//     {id: '7', image: require('./src/assets/images/ve.jpg')},
//     {id: '8', image: require('./src/assets/images/ve.jpg')},
//     {id: '9', image: require('./src/assets/images/fr.png')},
//     {id: '10', image: require('./src/assets/images/fr.png')},
//     {id: '11', image: require('./src/assets/images/fr.png')},
//     {id: '12', image: require('./src/assets/images/fr.png')},
//     {id: '13', image: require('./src/assets/images/fr.png')},
//     {id: '14', image: require('./src/assets/images/fr.png')},
//     {id: '15', image: require('./src/assets/images/ve.jpg')},
//     {id: '16', image: require('./src/assets/images/ve.jpg')},
//     {id: '17', image: require('./src/assets/images/ve.jpg')},
//     {id: '18', image: require('./src/assets/images/ve.jpg')},
//     {id: '19', image: require('./src/assets/images/ve.jpg')},
//     {id: '20', image: require('./src/assets/images/ve.jpg')},
//     {id: '21', image: require('./src/assets/images/ve.jpg')},
//     {id: '22', image: require('./src/assets/images/fr.png')},
//     {id: '23', image: require('./src/assets/images/fr.png')},
//     {id: '24', image: require('./src/assets/images/fr.png')},
//     {id: '25', image: require('./src/assets/images/fr.png')},
//     {id: '26', image: require('./src/assets/images/fr.png')},
//   ];

//   const renderCard = ({item}) => (
//     <View style={styles.card}>
//       <Image source={item.image} style={styles.cardImg} />
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <Image
//           source={require('./src/assets/images/logo.png')}
//           style={styles.image}
//         />
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Log In</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Search"
//           placeholderTextColor="#888"
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           <Image
//             source={require('./src/assets/images/ser.png')}
//             style={styles.searchIcon}
//           />
//         </TouchableOpacity>
//       </View>
//       <ScrollView>
//         <FlatList
//           data={data}
//           keyExtractor={item => item.id}
//           renderItem={renderCard}
//           numColumns={2} // Display two cards per row
//           contentContainerStyle={styles.cardsContainer}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 24,
//   },
//   image: {
//     height: 120,
//     width: 120,
//     resizeMode: 'contain',
//     backgroundColor: 'white',
//   },
//   button: {
    // paddingVertical: 8,
    // paddingHorizontal: 16,
    // borderWidth: 1,
    // borderColor: 'green',
    // borderRadius: 10,
    // alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 16,
//     color: 'green',
//   },
//   inputContainer: {
//     // flexDirection: 'row',
//     // alignItems: 'center',
//     // paddingHorizontal: 16,
//     // paddingVertical: 8,
//     // backgroundColor: '#f0f0f0',
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginHorizontal: 10,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: '#333',
//   },
//   searchButton: {
//     padding: 10,
//   },
//   searchIcon: {
//     width: 25,
//     height: 25,
//     resizeMode: 'contain',
//   },
//   cardsContainer: {
//     paddingHorizontal: 10,
//     paddingTop: 10,
//     paddingBottom: 20,
//     backgroundColor: 'white',
//   },
//   card: {
//     flex: 1,
//     margin: 5,
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   cardImg: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//   },
// });
// export default App;

import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'

const App = () => {
  return (
  
    <AppNavigator/>
  )
}

export default App
