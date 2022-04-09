import React, { useEffect } from 'react'
import { AppRegistry, PermissionsAndroid, Text, View } from 'react-native';




const App = () => {




  useEffect(() => {


    const a = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location permission is required for WiFi connections',
          message:
            'This app needs location permission as this is required  ' +
            'to scan for wifi networks.',
          buttonNegative: 'DENY',
          buttonPositive: 'ALLOW',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log(granted)
      } else {
        console.log(PermissionsAndroid)
      }
    }

    a()

  }, [])






  return (
    <View>
      <Text>salam</Text>
    </View>
  )
}




AppRegistry.registerComponent('prj', () => App)
