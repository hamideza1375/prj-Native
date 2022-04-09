import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, AppRegistry } from 'react-native';

import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification, { Importance } from "react-native-push-notification";



const App = () => {







  PushNotification.configure({
   onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });





  PushNotification.createChannel(
    {
      channelId: "2",
      channelName: "My channel",
      playSound: true,
      importance: Importance.HIGH,
      vibrate: true,
    },
    (created) => console.log(`createChannel returned '${created}'`)
  );







  const sur = () => {
    PushNotification.localNotificationSchedule({
      channelId: "2",
      title: "23",
      message: "ygy",
      id: '123',

      date: new Date(Date.now() + 8* 1000),
      allowWhileIdle: false,
      repeatTime: 1,

    })
    setTimeout(() => {

      PushNotificationIOS.removeDeliveredNotifications(["123"])
      PushNotification.cancelLocalNotification('122');

      PushNotificationIOS.removeAllDeliveredNotifications();
      PushNotification.cancelAllLocalNotifications()

  }, 3000);
    }





  return (
    <View>
      <TouchableOpacity style={{ margin: 50, height: 64, backgroundColor: 'red' }}
        onPress={sur}>
        <Text>click</Text>
      </TouchableOpacity>
    </View>
  )
}





AppRegistry.registerComponent('myFood', () => App)
AppRegistry.registerComponent('prj', () => App)












