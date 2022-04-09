import React, { useEffect } from 'react'
import { AppRegistry, Text, View, TouchableOpacity } from 'react-native';
import RNLocation from 'react-native-location';
import WifiManager from "react-native-wifi-reborn";


const App = () => {



  RNLocation.configure({
    distanceFilter: 100
  })

      
  // WifiManager.setEnabled(true)





  return (
    <View>
      <TouchableOpacity style={{ margin: 30, backgroundColor: 'red' }} >
        <Text >click</Text>
      </TouchableOpacity>
    </View>
  )
}


AppRegistry.registerComponent('prj', () => App)
