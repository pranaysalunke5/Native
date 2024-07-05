// import { View, Text } from 'react-native'
// import React from 'react'
// import DrawerNavigator from '../drawer/DrawerNavigator'

// const Parent = () => {
//   return (
//     <View style={{flex:1}}>
//       <DrawerNavigator/>
//     </View>
//   )
// }

// export default Parent

// import React from 'react';
// import { View, Text } from 'react-native';

// const Parent = ({ route }) => {
//   // Extract user data from navigation params
//   const { user } = route.params;

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Welcome {user.name}!</Text>
//       <Text>Email: {user.email}</Text>
//       <Text>Role: {user.role}</Text>
//       <Text>Designation: {user.designation}</Text>
//       {/* Additional user data display as needed */}
//     </View>
//   );
// };

// export default Parent;

// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Parent = ({ route }) => {
//   const navigation = useNavigation();
//   const { user } = route.params;

//   const handleLogout = async () => {
//     await AsyncStorage.removeItem('token');
//     navigation.navigate('Login'); // assuming the login screen is named 'Login'
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome, {user.name}!</Text>
//       <Button title="Log Out" onPress={handleLogout} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
// });

// export default Parent;


import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Parent = ({route}) => {
  const navigation = useNavigation();
  const {user} = route.params;

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [clockInEntries, setClockInEntries] = useState([]);
  const [clockOutTimes, setClockOutTimes] = useState([]);
  const [elapsedTime, setElapsedTime] = useState([]);
  const [isClockedIn, setIsClockedIn] = useState(false);

  const updateDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    setCurrentDate(date);
    setCurrentTime(time);
  };

  useEffect(() => {
    updateDateTime();
    const interval = setInterval(() => {
      updateDateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  const handleClockIn = () => {
    const now = new Date();
    const entry = {
      time: now.toLocaleTimeString(),
      date: now.toLocaleDateString(),
    };
    setClockInEntries([...clockInEntries, entry]);
    setElapsedTime([...elapsedTime, 0]);
    setIsClockedIn(true);
  };

  const handleClockOut = () => {
    const now = new Date();
    setClockOutTimes([...clockOutTimes, now.toLocaleTimeString()]);
    setIsClockedIn(false);
  };

  useEffect(() => {
    if (isClockedIn) {
      const interval = setInterval(() => {
        setElapsedTime(prevElapsedTime =>
          prevElapsedTime.map((time, index) =>
            index === prevElapsedTime.length - 1 ? time + 1 : time,
          ),
        );
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isClockedIn]);

  const handleLogout = async () => {
    await
     AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  };

  const formatTime = seconds => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${mins < 10 ? '0' : ''}${mins}:${
      secs < 10 ? '0' : ''
    }${secs}`;
  };

  return (
    <View style={{height: '100%'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '37%',
          gap: 0,
        }}>
        <View style={styles.container}>
          <View
            style={{
              height: 300,
              backgroundColor: 'green',
              width: '100%',
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
            }}>
            <View style={styles.container1}>
              <View>
                <Text style={{fontSize: 26, color: 'white'}}>Morning</Text>
                <Text style={{fontSize: 28, color: 'white', fontWeight: '500'}}>
                  {user.name}
                </Text>
                <Text style={{fontSize: 22, color: 'white'}}>
                  {user.designation}
                </Text>
              </View>
              <TouchableOpacity onPress={handleLogout} style={{marginTop: 30}}>
                <Image
                  source={require('../assets/images/logout.png')}
                  style={styles.logoutIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.container2}>
              <View style={styles.container3}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: 10,
                  }}>
                  <Text style={{fontSize: 16, color: '#333'}}>
                    Mark Your Attendance
                  </Text>
                  <Text style={{fontSize: 16, color: '#333'}}>
                    Date: {currentDate}
                  </Text>
                </View>
                <View style={{width: '100%', alignItems: 'center'}}>
                  <Text
                    style={{fontSize: 24, color: '#333', fontWeight: '500'}}>
                    {currentTime}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={isClockedIn ? handleClockOut : handleClockIn}>
                  <Text style={styles.buttonText}>
                    {isClockedIn ? 'Clock Out' : 'Clock In'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={{maxHeight: '60%'}}>
        <View style={{flexDirection: 'column', padding: 10}}>
          {clockInEntries.map((entry, index) => (
            <View
              key={index}
              style={{
                backgroundColor: 'white',
                width: '100%',
                borderRadius: 5,
                marginBottom: 10,
                padding: 10,
                shadowColor: 'black',
                shadowOpacity: 0.8,
                elevation: 6,
                backgroundColor: '#fff',
                shadowRadius: 15,
                shadowOffset: {width: 56, height: 13},
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    marginBottom: 5,
                    fontSize: 18,
                    fontWeight: 500,
                    color: '#333',
                  }}>
                  Clock In Date: {entry.date}
                </Text>
                {isClockedIn && index === clockInEntries.length - 1 && (
                  <Text style={{fontSize: 18, fontWeight: 500, color: '#333'}}>
                    Time: {formatTime(elapsedTime[index])}
                  </Text>
                )}
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: '#333',
                  marginBottom: 5,
                }}>
                Clock In Time: {entry.time}
              </Text>

              {clockOutTimes[index] && (
                <>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 500,
                      color: '#333',
                      marginBottom: 5,
                    }}>
                    Clock Out Time: {clockOutTimes[index]}
                  </Text>
                  <Text style={{fontSize: 18, fontWeight: 500, color: '#333'}}>
                    Elapsed Time: {formatTime(elapsedTime[index])}
                  </Text>
                </>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  container2: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container3: {
    backgroundColor: 'white',
    width: 350,
    alignItems: 'center',
    height: 150,
    borderRadius: 10,
  },
  logoutIcon: {
    height: 60,
    width: 60,
  },
  button: {
    backgroundColor: 'transparent', // Transparent background to show only text
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'green', // Green border color
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 15,
    width: '90%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green', // Green text color
  },
});

export default Parent;

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Parent = ({ route }) => {
//   const navigation = useNavigation();
//   const { user } = route.params;

//   const [currentDate, setCurrentDate] = useState('');
//   const [currentTime, setCurrentTime] = useState('');
//   const [clockInEntries, setClockInEntries] = useState([]);
//   const [clockOutTimes, setClockOutTimes] = useState([]);
//   const [elapsedTime, setElapsedTime] = useState([]);
//   const [isClockedIn, setIsClockedIn] = useState(false);
//   const [intervalId, setIntervalId] = useState(null); // State to store interval ID

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const storedEntries = await AsyncStorage.getItem('clockInEntries');
//         const storedOutTimes = await AsyncStorage.getItem('clockOutTimes');
//         const storedElapsedTimes = await AsyncStorage.getItem('elapsedTime');

//         if (storedEntries) {
//           setClockInEntries(JSON.parse(storedEntries));
//         }
//         if (storedOutTimes) {
//           setClockOutTimes(JSON.parse(storedOutTimes));
//         }
//         if (storedElapsedTimes) {
//           setElapsedTime(JSON.parse(storedElapsedTimes));
//         }
//       } catch (error) {
//         console.error('Error loading data from AsyncStorage:', error);
//       }
//     };

//     loadData();
//   }, []);

//   useEffect(() => {
//     const saveData = async () => {
//       try {
//         await AsyncStorage.setItem('clockInEntries', JSON.stringify(clockInEntries));
//         await AsyncStorage.setItem('clockOutTimes', JSON.stringify(clockOutTimes));
//         await AsyncStorage.setItem('elapsedTime', JSON.stringify(elapsedTime));
//       } catch (error) {
//         console.error('Error saving data to AsyncStorage:', error);
//       }
//     };

//     saveData();
//   }, [clockInEntries, clockOutTimes, elapsedTime]);

//   const updateDateTime = () => {
//     const now = new Date();
//     const date = now.toLocaleDateString();
//     const time = now.toLocaleTimeString();

//     setCurrentDate(date);
//     setCurrentTime(time);
//   };

//   useEffect(() => {
//     updateDateTime();
//     const interval = setInterval(updateDateTime, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleClockIn = () => {
//     const now = new Date();
//     const entry = {
//       time: now.toLocaleTimeString(),
//       date: now.toLocaleDateString(),
//     };
//     setClockInEntries([...clockInEntries, entry]);
//     setIsClockedIn(true);

//     // Start counting elapsed time
//     setElapsedTime([...elapsedTime, 0]);

//     // Interval to update elapsed time every second
//     const id = setInterval(() => {
//       setElapsedTime(prevElapsedTime =>
//         prevElapsedTime.map((time, index) =>
//           index === prevElapsedTime.length - 1 ? time + 1 : time,
//         ),
//       );
//     }, 1000);
//     setIntervalId(id); // Store interval ID in state
//   };

//   const handleClockOut = () => {
//     const now = new Date();

//     // Update clockOutTimes and elapsedTime for the last entry
//     const updatedClockOutTimes = [...clockOutTimes, now.toLocaleTimeString()];
//     setClockOutTimes(updatedClockOutTimes);

//     const updatedElapsedTime = [...elapsedTime];
//     if (updatedElapsedTime.length > 0) {
//       updatedElapsedTime[updatedElapsedTime.length - 1]++; // Increment the last entry's elapsed time
//     }
//     setElapsedTime(updatedElapsedTime);

//     setIsClockedIn(false);

//     // Clear interval when clocking out
//     clearInterval(intervalId);
//     setIntervalId(null); // Reset interval ID in state
//   };

//   const handleLogout = async () => {
//     await AsyncStorage.removeItem('token');
//     navigation.navigate('Login');
//   };

//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
//     return `${hours}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   return (
//     <View style={{ height: '100%' }}>
//       <View
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           height: '37%',
//           gap: 0,
//         }}>
//         <View style={styles.container}>
//           <View
//             style={{
//               height: 300,
//               backgroundColor: 'green',
//               width: '100%',
//               borderBottomEndRadius: 20,
//               borderBottomStartRadius: 20,
//             }}>
//             <View style={styles.container1}>
//               <View>
//                 <Text style={{ fontSize: 26, color: 'white' }}>Morning</Text>
//                 <Text style={{ fontSize: 28, color: 'white', fontWeight: '500' }}>
//                   {user.name}
//                 </Text>
//                 <Text style={{ fontSize: 22, color: 'white' }}>
//                   {user.designation}
//                 </Text>
//               </View>
//               <TouchableOpacity onPress={handleLogout} style={{ marginTop: 30 }}>
//                 <Image
//                   source={require('../assets/images/logout.png')}
//                   style={styles.logoutIcon}
//                 />
//               </TouchableOpacity>
//             </View>
//             <View style={styles.container2}>
//               <View style={styles.container3}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     width: '100%',
//                     padding: 10,
//                   }}>
//                   <Text style={{ fontSize: 16, color: '#333' }}>
//                     Mark Your Attendance
//                   </Text>
//                   <Text style={{ fontSize: 16, color: '#333' }}>
//                     Date: {currentDate}
//                   </Text>
//                 </View>
//                 <View style={{ width: '100%', alignItems: 'center' }}>
//                   <Text
//                     style={{ fontSize: 24, color: '#333', fontWeight: '500' }}>
//                     {currentTime}
//                   </Text>
//                 </View>
//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={isClockedIn ? handleClockOut : handleClockIn}>
//                   <Text style={styles.buttonText}>
//                     {isClockedIn ? 'Clock Out' : 'Clock In'}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//       <ScrollView style={{ maxHeight: '60%' }}>
//   <View style={{ flexDirection: 'column', padding: 10 }}>
//     {clockInEntries.slice().reverse().map((entry, index) => (
//       <View
//         key={index}
//         style={{
//           backgroundColor: 'white',
//           width: '100%',
//           borderRadius: 5,
//           marginBottom: 10,
//           padding: 10,
//           shadowColor: 'black',
//           shadowOpacity: 0.8,
//           elevation: 6,
//           backgroundColor: '#fff',
//           shadowRadius: 15,
//           shadowOffset: { width: 56, height: 13 },
//         }}>
//         <View
//           style={{
//             flexDirection: 'row',
//             width: '100%',
//             justifyContent: 'space-between',
//           }}>
//           <Text
//             style={{
//               fontSize: 16,
//               marginBottom: 5,
//               fontSize: 18,
//               fontWeight: 500,
//               color: '#333',
//             }}>
//             Clock In Date: {entry.date}
//           </Text>
//           {isClockedIn && index === 0 && (
//             <Text style={{ fontSize: 18, fontWeight: 500, color: '#333' }}>
//               Time: {formatTime(elapsedTime[index])}
//             </Text>
//           )}
//         </View>
//         <Text
//           style={{
//             fontSize: 18,
//             fontWeight: 500,
//             color: '#333',
//             marginBottom: 5,
//           }}>
//           Clock In Time: {entry.time}
//         </Text>

//         {clockOutTimes[index] && (
//           <>
//             <Text
//               style={{
//                 fontSize: 18,
//                 fontWeight: 500,
//                 color: '#333',
//                 marginBottom: 5,
//               }}>
//               Clock Out Time: {clockOutTimes[index]}
//             </Text>
//             <Text style={{ fontSize: 18, fontWeight: 500, color: '#333' }}>
//               Total Time: {formatTime(elapsedTime[index])}
//             </Text>
//           </>
//         )}
//       </View>
//     ))}
//   </View>
// </ScrollView>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//   },
//   container1: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 15,
//   },
//   container2: {
//     width: '100%',
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   container3: {
//     backgroundColor: 'white',
//     width: 350,
//     alignItems: 'center',
//     height: 150,
//     borderRadius: 10,
//   },
//   logoutIcon: {
//     height: 60,
//     width: 60,
//   },
//   button: {
//     backgroundColor: 'transparent', // Transparent background to show only text
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: 'green', // Green border color
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     marginTop: 15,
//     width: '90%',
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'green', // Green text color
//   },
// });

// export default Parent;

