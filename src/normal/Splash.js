// import {View, Text} from 'react-native';
// import React, {useEffect} from 'react';

// const Splash = ({navigation}) => {
//   useEffect(() => {
//     setTimeout(() => {
//       navigation.navigate('Parent');
//     }, 2000);
//   }, []);
//   return (
//     <View>
//       <Text>Splash  Screen</Text>
//     </View>
//   );
// };

// export default Splash;

// import React, { useState } from 'react';
// import {
// View,
// Text,
// TextInput,
// TouchableOpacity,
// Image,
// StyleSheet,
// } from 'react-native';

// const Splash = () => {
//   const [hidePassword, setHidePassword] = useState(true);

//   const togglePasswordVisibility = () => {
//     setHidePassword(!hidePassword);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Image
//           source={require('../assets/images/logo.png')}
//           style={styles.logo}
//           resizeMode="contain"
//         />
//         <Text style={styles.title}>Log In</Text>
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>email</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="email"
//           autoCapitalize="none"
//           keyboardType="email-address"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Password</Text>
//         <View style={styles.passwordWrapper}>
//           <TextInput
//             style={styles.input2}
//             placeholder="Password"
//             secureTextEntry={hidePassword}
//           />
//           <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon2}>
//             <Image
//               source={hidePassword ? require('../assets/images/visibilityoff.png') : require('../assets/images/visibility.png')}
//               style={styles.eyeIconImage}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <TouchableOpacity style={styles.loginButton}>
//         <Text style={styles.buttonText}>Sign In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     padding: 20,
//     paddingBottom: 60,
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   logo: {
//     width: 230,
//     height: 100,
//   },
//   title: {
//     fontSize: 34,
//     color: 'black',
//     marginTop: 10,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input2: {
//     height: 50,
//     backgroundColor: '#f2f2f2',
//     padding: 10,
//     borderRadius: 8,
//     fontSize: 16,
//     color: '#333',
//     width:'100%'
//   },
//   eyeIconImage: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     tintColor: '#333',

//   },
//   eyeIcon2: {

//     position:'absolute',
//     right:12

//   },
//   label: {
//     fontSize: 16,
//     color: 'black',
//     marginBottom: 5,
//   },
//   input: {
//     height: 50,
//     backgroundColor: '#f2f2f2',
//     padding: 10,
//     borderRadius: 8,
//     fontSize: 16,
//     color: '#333',
//   },
//   passwordWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//     paddingBottom: 5,
//     position:'relative',

//   },

//   loginButton: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'transparent',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//     borderWidth: 2,
//     borderColor: 'green',
//   },
//   buttonText: {
//     color: 'green',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default Splash;

// import React, { useState } from 'react';
// import {  View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet, } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Import Navigation hook from React Navigation

// const LoginScreen = () => {
//   const navigation = useNavigation();
//   const [email, setUsername] = useState('prathmesh1@gmail.com');
//   const [password, setPassword] = useState('');
//   const [hidePassword, setHidePassword] = useState(true); // State to toggle password visibility

//   const togglePasswordVisibility = () => {
//     setHidePassword(!hidePassword);
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('https://freedygoservices.in/api/userSignin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         navigation.navigate('Parent');
//       } else {
//         Alert.alert('Login Failed', 'email or password incorrect');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       Alert.alert('Error', 'An error occurred while logging in');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Image
//           source={require('../assets/images/logo.png')}
//           style={styles.logo}
//           resizeMode="contain"
//         />
//         <Text style={styles.title}>Log In</Text>
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>email</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="email"
//           autoCapitalize="none"
//           keyboardType="email-address"
//           value={email}
//           onChangeText={setUsername}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Password</Text>
//         <View style={styles.passwordWrapper}>
//           <TextInput
//             style={styles.input2}
//             placeholder="Password"
//             secureTextEntry={hidePassword}
//             value={password}
//             onChangeText={setPassword}
//           />
//           <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon2}>
//             <Image
//               source={hidePassword ? require('../assets/images/visibilityoff.png') : require('../assets/images/visibility.png')}
//               style={styles.eyeIconImage}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Sign In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      justifyContent: 'center',
//      alignItems: 'center',
//      backgroundColor: '#ffffff',
//      padding: 20,
//      paddingBottom: 60,
//    },
//    logoContainer: {
//      alignItems: 'center',
//      marginBottom: 20,
//    },
//    logo: {
//      width: 230,
//      height: 100,
//    },
//    title: {
//      fontSize: 34,
//      color: 'black',
//      marginTop: 10,
//    },
//    inputContainer: {
//      width: '100%',
//      marginBottom: 20,
//    },
//    input2: {
//      height: 50,
//      backgroundColor: '#f2f2f2',
//      padding: 10,
//      borderRadius: 8,
//      fontSize: 16,
//      color: '#333',
//      width:'100%'
//    },
//    eyeIconImage: {
//      width: 20,
//      height: 20,
//      resizeMode: 'contain',
//      tintColor: '#333',
//    },
//    eyeIcon2: {
//      position:'absolute',
//      right:12
//    },
//    label: {
//      fontSize: 16,
//      color: 'black',
//      marginBottom: 5,
//    },
//    input: {
//      height: 50,
//      backgroundColor: '#f2f2f2',
//      padding: 10,
//      borderRadius: 8,
//      fontSize: 16,
//      color: '#333',
//    },
//    passwordWrapper: {
//      flexDirection: 'row',
//      alignItems: 'center',
//      borderBottomWidth: 1,
//      borderColor: '#ccc',
//      paddingBottom: 5,
//      position:'relative'
//    },
//    loginButton: {
//      width: '100%',
//      height: 50,
//      backgroundColor: 'transparent',
//      justifyContent: 'center',
//      alignItems: 'center',
//      borderRadius: 8,
//      borderWidth: 2,
//      borderColor: 'green',
//    },
//    buttonText: {
//      color: 'green',
//      fontSize: 18,
//      fontWeight: 'bold',
//    },
//  });

// export default LoginScreen;

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
// } from 'react-native';
// import axios from 'axios';
// import {useNavigation} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Alert } from 'react-native';


// const LoginScreen = () => {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState('prathmesh1@gmail.com');
//   const [password, setPassword] = useState('');
//   const [hidePassword, setHidePassword] = useState(true);

//   const togglePasswordVisibility = () => {
//     setHidePassword(!hidePassword);
//   };

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert('Login Failed', 'Please enter both email and password.');
//       return;
//     }

//     try {
//       const response = await axios.post('https://freedygoservices.in/api/userSignin', {
//         email,
//         password,
//       });

//       if (response.data.success) {
//         const { token, user } = response.data.data;

//         await AsyncStorage.setItem('token', token);

//         navigation.navigate('Parent', { user }); 
//       } else {
//         Alert.alert('Login Failed', 'Invalid email or password');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error.response || error.message || error);
//       Alert.alert('Error', 'An error occurred while logging in');
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Image
//           source={require('../assets/images/logo.png')}
//           style={styles.logo}
//           resizeMode="contain"
//         />
//         <Text style={styles.title}>Log In</Text>
//       </View>
 
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           autoCapitalize="none"
//           keyboardType="email-address"
//           value={email}
//           onChangeText={setEmail}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Password</Text>
//         <View style={styles.passwordWrapper}>
//           <TextInput
//             style={styles.input2}
//             placeholder="Password"
//             secureTextEntry={hidePassword}
//             value={password}
//             onChangeText={setPassword}
//           />
//           <TouchableOpacity
//             onPress={togglePasswordVisibility}
//             style={styles.eyeIcon2}>
//             <Image
//               source={
//                 hidePassword
//                   ? require('../assets/images/visibilityoff.png')
//                   : require('../assets/images/visibility.png')
//               }
//               style={styles.eyeIconImage}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Sign In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     padding: 20,
//     paddingBottom: 60,
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   logo: {
//     width: 230,
//     height: 100,
//   },
//   title: {
//     fontSize: 34,
//     color: 'black',
//     marginTop: 10,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input2: {
//     height: 50,
//     backgroundColor: '#f2f2f2',
//     padding: 10,
//     borderRadius: 8,
//     fontSize: 16,
//     color: '#333',
//     width: '100%',
//   },
//   eyeIconImage: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     tintColor: '#333',
//   },
//   eyeIcon2: {
//     position: 'absolute',
//     right: 12,
//   },
//   label: {
//     fontSize: 16,
//     color: 'black',
//     marginBottom: 5,
//   },
//   input: {
//     height: 50,
//     backgroundColor: '#f2f2f2',
//     padding: 10,
//     borderRadius: 8,
//     fontSize: 16,
//     color: '#333',
//   },
//   passwordWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//     paddingBottom: 5,
//     position: 'relative',
//   },
//   loginButton: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'transparent',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//     borderWidth: 2,
//     borderColor: 'green',
//   },
//   buttonText: {
//     color: 'green',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('prathmesh1@gmail.com');
  const [password, setPassword] = useState('FGO001');
  const [hidePassword, setHidePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Login Failed', 'Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post('https://freedygoservices.in/api/userSignin', {
        email,
        password,
      }); 

      if (response.data.success) {
        const { token, user } = response.data.data;

        await AsyncStorage.setItem('token', token);
        Alert.alert('Login Successful', 'You have successfully logged in.');

        navigation.navigate('Parent', { user }); 
      } else {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error.response || error.message || error);
      Alert.alert('Error', 'An error occurred while logging in');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Log In</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.input2}
            placeholder="Password"
            secureTextEntry={hidePassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon2}>
            <Image
              source={
                hidePassword
                  ? require('../assets/images/visibilityoff.png')
                  : require('../assets/images/visibility.png')
              }
              style={styles.eyeIconImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    paddingBottom: 60,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 230,
    height: 100,
  },
  title: {
    fontSize: 34,
    color: 'black',
    marginTop: 10,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input2: {
    height: 50,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    width: '100%',
  },
  eyeIconImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#333',
  },
  eyeIcon2: {
    position: 'absolute',
    right: 12,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  input: {
    height: 50,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 5,
    position: 'relative',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'green',
  },
  buttonText: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
