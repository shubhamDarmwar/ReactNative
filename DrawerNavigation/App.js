import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
// import { createDrawerNavigator } from '@react-navigation/drawer'
import { createDrawerNavigator } from 'react-navigation-drawer'
import HomeScreen  from './HomeScreen'
import SettingScreen from './SettingScreen'

// export default function App() {
//   return (
//     <MyApp />
//   );
// }

// class App extends React.Component{
//   render(){
//     return(
//       <MyApp />
//     )
//   }
// }

// export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



const MyApp = createDrawerNavigator({
  HomeScreen:{ 
    screen : HomeScreen
  },
  SettingScreen : {
    screen : SettingScreen
  }
})

const container1 = createAppContainer(MyApp);
export default container1;
// const Drawer = createDrawerNavigator();

// export default function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Setting" component={SettingScreen} />
//     </Drawer.Navigator>
//   );
// }