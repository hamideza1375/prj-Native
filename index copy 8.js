// import React, { useState } from 'react'
// import { AppRegistry, StyleSheet, View, Text } from 'react-native'
// import MapView, { Callout, Marker } from 'react-native-maps';
// import RNLocation from 'react-native-location';



// const App = () => {

//   const [state1, setState1] = useState({
//     latitude: 36.226,
//     longitude: 57.6912,
//     latitudeDelta: 0.005,
//     longitudeDelta: 0.00800,
//   })


//   RNLocation.configure({
//     distanceFilter: 100
//   })


//   const onRegionChange = (region) => {
//     setState1(region);
//   }



//   return (
//     <View style={styles.container}>
//       <MapView
//         // mapType='satellite'
//         // showsUserLocation={true}
//         onRegionChange={onRegionChange}
//         showsUserLocation={true}
//         style={styles.map}
//         region={state1}
//       >

//         <Marker
//           onDragEnd={(e) => {
//             console.log(state1);
//           }}
//           draggable={true}
//           coordinate={{
//             latitude: 36.226,
//             longitude: 57.6912,
//           }}
//           image={require("./assets/marker1.png")}
//           title="test title"
//           description="test description"
//         >


//         </Marker>
//       </MapView>
//     </View >

//   );

// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     height: '100%',
//     width: '100%',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });


// AppRegistry.registerComponent('prj', () => App)














import React, { useState } from 'react'
import { AppRegistry, StyleSheet, View, Text } from 'react-native'
import MapView, { Callout, LocalTile, Marker } from 'react-native-maps';
import RNLocation from 'react-native-location';



const App = () => {

  const [state1, setState1] = useState({
    latitude: 36.226,
    longitude: 57.6912,
    latitudeDelta: 0.005,
    longitudeDelta: 0.00800,
  })


  const [markers, setmarkers] = useState({
    latitude: 36.224174234928924,
    longitude: 57.69491965736432,
    latitudeDelta: 0.005,
    longitudeDelta: 0.00800,
  })

   
  



  RNLocation.configure({
    distanceFilter: 100
  })




  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={markers}
      // mapType='hybrid'
      showsUserLocation={true}
      >



        <Marker
          draggable={true}
          coordinate={markers}
          title={'marker.title'}
          onDragEnd={(e) => { setmarkers(e.nativeEvent.coordinate); console.log(e.nativeEvent.coordinate); }}
        />




      </MapView>
    </View >

  );

}




const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


AppRegistry.registerComponent('prj', () => App)












 