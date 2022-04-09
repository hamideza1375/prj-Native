import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { AppRegistry } from 'react-native'

import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view'


class App extends React.Component {
  render() {
    return (

        <LinearGradient start={{ x: 1.5, y: .5 }} end={{ x: 0, y: 0 }}
         colors={['blue', 'red']} style={{ flex:1}}>
         


         <MaskedView style={{ flex: 1, flexDirection: 'row', height: '100%' }} 
         maskElement={
         <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 60}}> Basic Mask </Text>
          </View>
        }>
        <Image source={require("./a1.png")} style={{width:"100%", height:"100%"}}/>
      </MaskedView>
      
         

        </LinearGradient>
    )
  }
}



AppRegistry.registerComponent('prj', () => App)
