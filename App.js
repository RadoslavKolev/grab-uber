/* eslint-disable react-native/no-inline-styles */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { StatusBar, View, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import RootNavigator from './src/navigation/Root';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

navigator.geolocation = require('@react-native-community/geolocation');

function App() {
  // Function to request location permission for Android
  // Geolocation.requestAuthorization() doesn't work on Android
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Take a Ride Location Permission',
          message:
            'Take a Ride needs access to your location ' +
            'so the uber driver can find you easily.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log(granted);
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Runs only once, when the component mounts
  useEffect(() => {
    if (Platform.OS === 'android') {
      requestLocationPermission();
    } else {
      // if iOS:
      // this method doesn't work on Android
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <RootNavigator />
    </View>
  );
}

export default withAuthenticator(App);
