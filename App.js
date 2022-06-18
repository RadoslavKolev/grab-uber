/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useEffect} from 'react';
 import { StatusBar, View, PermissionsAndroid, Platform } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/homeScreen';
import DestinationSearch from './src/screens/DestinationSearch/destinationSearch';
import SearchResults from './src/screens/SearchResults/searchResults';
import Geolocation from '@react-native-community/geolocation';

navigator.geolocation = require('@react-native-community/geolocation');
console.log(navigator.geolocation);

export default function App() {
  // Function to request location permission for Android
  // Geolocation.requestAuthorization() doesn't work on Android
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'GrabUber Location Permission',
          message:
            'GrabUber needs access to your location ' +
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
    <View>
      <StatusBar style="auto" />
      {/* <HomeScreen /> */}
      <DestinationSearch />
      {/* <SearchResults /> */}
    </View>
  );
}
