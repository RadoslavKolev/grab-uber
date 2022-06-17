/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/homeScreen';
import DestinationSearch from './src/screens/DestinationSearch/destinationSearch';
import SearchResults from './src/screens/SearchResults/searchResults';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      {/* <HomeScreen /> */}
      {/* <DestinationSearch /> */}
      <SearchResults />
    </View>
  );
}
