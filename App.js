import React from 'react'
import { View, Text, Button } from 'react-native'
import { OpenMapDirections } from 'react-native-navigation-directions';


export default class App extends React.Component {
 _callShowDirections = () => {
    const startPoint = {
      longitude: 36.224174234928924,
      latitude: 57.69491965736432
    } 

    const endPoint = {
      longitude: 36.224174234828924,
      latitude: 57.69491965836432
    }

		const transportPlan = 'w';

    OpenMapDirections(startPoint, endPoint, transportPlan).then(res => {
      console.log(res)
    });
  }
  
  render() {
    return (
      <View style={{ marginTop: 44 }}>
        <Text>Show direction between two random points!</Text>
        <Button
        onPress={() => { this._callShowDirections() }}
        title="Open map"
        color="#841584"
      />
      </View>
    );
  }
}
