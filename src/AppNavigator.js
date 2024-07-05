// import { View, Text, StatusBar } from 'react-native'
// import React from 'react'
// import { createStackNavigator } from '@react-navigation/stack'
// import { NavigationContainer } from '@react-navigation/native';
// import Splash from './normal/Splash';
// import Parent from './normal/Parent';
// import About from './component/about';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//   <NavigationContainer>
//     {/* <StatusBar backgroundColor="yellow"/> */}
//   <Stack.Navigator>
//    <Stack.Screen
//     name="Splash"
//     component={Splash}
//     options={{headerShow:false}}
//    />
//    <Stack.Screen
//     name="Parent"
//     component={Parent}
//     options={{headerShow:false}}
//    />
//      <Stack.Screen
//     name="About"
//     component={About}
//     options={{headerShow:false}}
//    />
//   </Stack.Navigator>
//   </NavigationContainer>
//   )
// }

// export default AppNavigator

// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import Splash from './normal/Splash';
// import Parent from './normal/Parent';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Splash"
//           component={Splash}
//           options={{ headerShown: false }} 
//         />
//         <Stack.Screen
//           name="Parent"
//           component={Parent}
//           options={{ headerShown: false }} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;


// import React, { useState, useEffect } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import Splash from './normal/Splash';
// import Parent from './normal/Parent';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

//   useEffect(() => {
//     // Check authentication status or token existence here (e.g., AsyncStorage)
//     // For simplicity, assume isLoggedIn state is managed elsewhere and updated on successful login
//     // Example: AsyncStorage.getItem('token').then(token => setIsLoggedIn(!!token));
//     setIsLoggedIn(true); // Simulated isLoggedIn state for demonstration
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {!isLoggedIn ? (
//           <Stack.Screen
//             name="Splash"
//             component={Splash}
//             options={{ headerShown: false }}
//           />
//         ) : (
//           <Stack.Screen
//             name="Parent"
//             component={Parent}
//             options={{ headerShown: false }}
//           />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './normal/Splash';
import Parent from './normal/Parent';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;


