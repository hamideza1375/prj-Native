import React, { useState, useEffect, useRef } from 'react'
import { AppRegistry, StyleSheet, View, Text, TextInput, Button } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { reverse, geocode } from './services/courseService';


// import MapViewDirections from 'react-native-maps-directions';
// import GetLocation from 'react-native-get-location'
// import Geocoder from 'react-native-geocoder';

// const origin = { latitude: 36.2241741428924, longitude: 57.66111965136432 }
// const GOOGLE_MAPS_APIKEY = 'AIzaSyCl6wrK36ULvId7A8IeIfRGTYA92sZZBrU';


export default App = () => {


   const [markers, setmarkers] = useState({
      latitude: 36.224174234928924,
      longitude: 57.69491965736432,
      latitudeDelta: 0.004,
      longitudeDelta: 0.000800,
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
               // console.log(data[0].latitude, data[0].longitude);
               setmarkers(
                  {
                     latitude: data[0].latitude,
                     longitude: data[0].longitude,
                     latitudeDelta: 0.004,
                     longitudeDelta: 0.000800,
                  })
               setSearch2(false)
            })
            .catch((err) => console.log(err))

   }, [search2])





   // useEffect(() => {
   //    search2 &&
   //       Geocoder.geocodeAddress(`سبزوار ${search1}`)
   //          .then(res => {
   //             console.log('positionlatlat', res[0].position.lat);
   //             console.log('positionlnglng', res[0].position.lng);
   //             setmarkers(
   //                {
   //                   latitude: res[0].position.lat,
   //                   longitude: res[0].position.lng,
   //                   latitudeDelta: 0.004,
   //                   longitudeDelta: 0.000800,
   //                })
   //             setSearch2(false)
   //          })
   //          .catch(err => console.log(err))
   // }, [search2])

   //!



   const uy = (e) => {
      setmarkers({
         ...e.nativeEvent.coordinate, latitudeDelta: 0.004,
         longitudeDelta: 0.000800
      });
   }



   useEffect(() => {
      reverse(markers)
         .then(({ data }) => {
            // console.log(data[0])
            setStreetName(data[0].streetName)
            setFormattedAddress(data[0].formattedAddress)

         })
         .catch((err) => console.log(err))
   }, [markers])




   // useEffect(() => {
   //    Geocoder.geocodePosition({ lat: markers.latitude, lng: markers.longitude })
   //       .then(res => {
   //          setFormattedAddress(res[0].formattedAddress)
   //       })
   //       .catch(err => console.log(err))
   // }, [markers])









   //!



   // useEffect(() => {

   //    GetLocation.getCurrentPosition({
   //       enableHighAccuracy: false,
   //       timeout: 15000,
   //    })
   //       .then(location => {
   //          console.log('locationlocationlocation',location);
   //       })
   //       .catch(error => {
   //          const { code, message } = error;
   //          console.warn(code, message);
   //       })

   // }, [markers])




   // useEffect(() => {   

   // Geocoder.geocodePosition({ lat: 36.224174234928924, lng: 57.69491965736432 })
   //    .then(res => console.log("citycitycitycitycity", res))
   //    .catch(err => console.log(err))

   // Geocoder.geocodeAddress('سبزوار')
   //    .then(res => {
   //       console.log('------------------------------------------');
   //       console.log("lat:lnglat:lnglat:lnglat:lnglat:lng", res)})
   //    .catch(err => console.log(err))

   // }, [markers])




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


            {/* 
            <Marker
               coordinate={origin} /> */}


            <Marker
               draggable={true}
               coordinate={markers}
               onDragEnd={(e) => { uy(e); setShow(true) }}
               onDragStart={() => { setShow(false) }}
               onSelect={(e) => { setShow(!show) }}
               image={require("./assets/marker1.png")}
            />


            {/* <MapViewDirections
               origin={origin}
               destination={markers}
               apikey={GOOGLE_MAPS_APIKEY}
               strokeWidth={3}
               strokeColor="hotpink"
            /> */}


         </MapView>

         {show && <View style={{ flex: .1, backgroundColor: "#fff", width: "100%", marginHorizontal: "auto", padding: 15 }}>
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

