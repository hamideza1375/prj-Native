import React from 'react'
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native'
import { AppRegistry } from 'react-native'


import PagerView from 'react-native-pager-view';


const App = () => {
  return (
    <PagerView style={[styles.pagerView, {justifyContent:"center"}]} initialPage={0}
    orientation={"horizontal"} scrollEnabled={true} layoutDirection="ltr"
    set
    >
    
      <View key="1">
        <Text 
        style={{position:"absolute",top:540,right:190,zIndex:3,
        transform: [{ rotate: "90deg" }],
        color:'green',fontSize:55,fontWeight:'600'}}>salam salam</Text>
        <Image source={require("./a1.jpg")} style={{ width:"100%",height:"99%"}}/>
      </View>

      <View key="2">
        <Text 
        style={{position:"absolute",top:540,right:190,zIndex:3,
        transform: [{ rotate: "90deg" }],
        color:'green',fontSize:55,fontWeight:'600'}}>salam salam</Text>
        <Image source={require("./a2.jpg")} style={{ width:"100%",height:"99%"}}/>
      </View>

      <View key="3">
        <Text 
        style={{position:"absolute",top:540,right:190,zIndex:3,
        transform: [{ rotate: "90deg" }],
        color:'green',fontSize:55,fontWeight:'600'}}>salam salam</Text>
        <Image source={require("./a4.jpeg")} style={{ width:"100%",height:"99%"}}/>
      </View>

    </PagerView>
  );
};


const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    flexDirection:'row'
  },
});



AppRegistry.registerComponent('prj', () => App)
