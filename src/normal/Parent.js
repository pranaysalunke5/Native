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
// import { View, Text } from 'react-native';

// const Parent = ({ route }) => {
//   const { user } = route.params;

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Welcome {user.name}!</Text>
//       <Text>Email: {user.email}</Text>
//       <Text>Role: {user.role}</Text>
//       <Text>Designation: {user.designation}</Text>
//     </View>
//   );
// };

// export default Parent;

import React from 'react';
import { View, Text } from 'react-native';

const Parent = ({ route }) => {
  const { user } = route.params || {};

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user ? (
        <>
          <Text>Welcome {user.name}!</Text>
          <Text>Email: {user.email}</Text>
          <Text>Role: {user.role}</Text>
          <Text>Designation: {user.designation}</Text>
        </>
      ) : (
        <Text>No user data found.</Text>
      )}
    </View>
  );
};

export default Parent;



