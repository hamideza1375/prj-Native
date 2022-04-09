import React, { useState, useEffect, useRef } from 'react'
import { AppRegistry, StyleSheet, View, Text, TextInput, Button } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { reverse, geocode } from './services/courseService';
// import RNLocation from 'react-native-location';



const App = () => {


  const [markers, setmarkers] = useState({
    latitude: 36.224174234928924,
    longitude: 57.69491965736432,
    latitudeDelta: 0.005,
    longitudeDelta: 0.00800,
  })

  const [show, setShow] = useState(false)
  const [streetName, setStreetName] = useState()
  const [formattedAddress, setFormattedAddress] = useState()

  const [search1, setSearch1] = useState()
  const [search2, setSearch2] = useState(false)


  useEffect(() => {
    search2 &&
      geocode({ loc: `سبزوار ${search1}` })
        .then(({ data }) => {
          console.log(data[0]);
          // console.log(data[0].latitude, data[0].longitude);
          setmarkers(
            {
              latitude: data[0].latitude,
              longitude: data[0].longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.00800,
            })
          setSearch2(false)
        })
        .catch((err) => console.log(err))

  }, [search2])



  const uy = (e) => {
    setmarkers({ ...e.nativeEvent.coordinate, latitudeDelta: 0.005, longitudeDelta: 0.00800 });
  }



  useEffect(() => {
    reverse(markers)
      .then(({ data }) => {
        console.log(data[0].city)
        setFormattedAddress(data[0].formattedAddress)
        setStreetName(data[0].streetName)
      })
      .catch((err) => console.log(err))
  }, [markers])







  const onRegionChange = () => {
    setmarkers(markers);
  }



  return (
    <View style={styles.container}>
      <MapView
        onRegionChange={() => { onRegionChange(); setShow(false) }}
        region={markers}
        showsUserLocation={true}
        style={styles.map}
        onPress={() => setShow(!show)}
      >


        <Marker
          draggable={true}
          coordinate={markers}
          onDragEnd={(e) => { uy(e); setShow(true) }}
          onSelect={(e) => { setShow(!show) }}
          image={require("./assets/marker1.png")}
        />

      </MapView>

      {!show && <View style={{ flex: .1, backgroundColor: "#fff", width: "100%", marginHorizontal: "auto", padding: 15 }}>
        <View style={{
          marginTop: 7, borderRadius: 5, width: "80%", height: 45, backgroundColor: "#3229"
          , alignSelf: 'center', borderColor: 'silver', borderWidth: 2, justifyContent: "center", alignContent: "center", alignItems: "center"
        }}>

          <TextInput
            style={{ color: "#fff" }}
            onChangeText={setSearch1}
            value={search1}
            placeholder="useless placeholder"
            keyboardType="default"
            placeholderTextColor={'silver'}
          />
          <View />
          <View>
            <Button title="clk" onPress={() => { setSearch2(true); setShow(true) }} />

          </View>

        </View>
      </View>}


      {show && <View style={{ flex: .17, backgroundColor: "#fff", width: "100%", marginHorizontal: "auto", padding: 15 }}>

        <Text style={{ textAlign: "right", }}>{streetName}</Text>
        {(streetName != undefined) ? <Text style={{ margin: 3 }} /> : null}
        <Text style={{ textAlign: "right", }}>{formattedAddress}</Text>
      </View>}

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











