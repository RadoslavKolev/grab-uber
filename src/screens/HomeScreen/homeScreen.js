/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import HomeMap from '../../components/HomeMap/homeMap';
import CovidMessage from '../../components/CovidMessage/covidMessage';
import HomeSearch from '../../components/HomeSearch/homeSearch';

const HomeScreen = (props) => {
  return (
    <View>
      {/* The Map */}
      <View style={{
        height: '50%',
        width: '100%',
      }}>
        <HomeMap />
      </View>

      {/* COVID Message */}
      <CovidMessage />

      {/* Button Components */}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
