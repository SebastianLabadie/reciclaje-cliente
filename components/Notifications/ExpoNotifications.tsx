import React, { useEffect, useState } from 'react'
import {View,StyleSheet,Text, Platform} from 'react-native'
import * as Notifications from 'expo-notifications'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';




async function registerForPushNotificationsAsync(dispatch:any) {
  let token;
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }
  token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log(token);
  dispatch({type:'SET_EXPO_TOKEN',payload:token})


  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

//este es el reciver
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});


  

function ExpoNotifications() {
  //estados para notificaciones
  const [expoPushToken, setExpoPushToken] = useState<any>('');
  const [notification, setNotification] = useState<any>(false);
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();

  const dispatch = useDispatch()
  

  useEffect(() => {
    registerForPushNotificationsAsync(dispatch).then(token => setExpoPushToken(token));

    // este evento se lanza al recivir una notificacion con la app en foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // este evento se lanza con cualquier interaccion al apretar la notificacion (funciona en foregrounded, backgrounded, o killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(res => {
      console.log('apreto en la notificacion',res);
      setNotification(res)
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [])


  console.log("la noti",notification)


    return (
        <>
        </>
    )
}


const styles = StyleSheet.create({
    
})
export default ExpoNotifications