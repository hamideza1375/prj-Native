import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { AppRegistry } from 'react-native'

import MaskedView from '@react-native-community/masked-view'

class App extends React.Component {
  render() {
    return (
      <MaskedView style={{ flex: 1, flexDirection: 'row', height: '100%' }} maskElement=
        {
          <View style={{ backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 60,fontFamily:"FontAwesome"}}> Basic Mask </Text>
          </View>
        }
      >
        <Image source={require("./assets/a1.png")} style={{width:"100%", height:"100%"}}/>
       
  
      </MaskedView>
    )
  }
}

export default App
