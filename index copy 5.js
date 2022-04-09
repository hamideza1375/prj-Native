import React, { useEffect } from 'react'
import { AppRegistry, Button, PermissionsAndroid, Text, View } from 'react-native';

import WifiManager from "react-native-wifi-reborn";


const App = () => {


  return (
    <View>

      <View style={{height:66,width:177}}>
        <Button title="tru" onPress={() => { console.log(WifiManager) }} />
      </View>

      <View style={{ margin: 10 }} />

      <View style={{height:66,width:177}}>
        <Button title="fls" onPress={() => { WifiManager.setEnabled(false) }} />
      </View>

    </View>
  )
}


AppRegistry.registerComponent('prj', () => App)
