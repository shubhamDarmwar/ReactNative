import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import {Header} from './src/components/hamburger/index'
import Drawer from 'react-native-drawer'

const toggleDrawer = () => {
  console.log(state.drawerOpen);
  
  if (state.drawerOpen) {
    state.drawerOpen = false
  } else {
    state.drawerOpen = true
  }
  
};
function closeDrawer() {
  state.drawerOpen = false
}

let state ={ drawerOpen : true}
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
    
    <SafeAreaView>
      <Drawer
      open = {state.drawerOpen}
      type = 'static'
      tapToClose={true}
      openDrawerOffset={0.5}
      closedDrawerOffset={0}
      content=  {<Button title = "press" onPress = {toggleDrawer}/>}//{<View style = {styles.sideMenu}></View>}
      // styles={}
      tweenHandler={Drawer.tweenPresets.parallax}
      tweenEasing={"easeInOutQuad"}
      tweenDuration={400}
      onClose={closeDrawer}
      />
      <Header title= "Home" toggleDrawer = {toggleDrawer}/>
      
    </SafeAreaView>
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideMenu : {
    flex : 1,
    backgroundColor : "#add"
  }
});
