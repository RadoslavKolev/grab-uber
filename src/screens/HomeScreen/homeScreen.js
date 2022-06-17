import React from 'react';
import { View } from 'react-native';
import HomeMap from '../../components/HomeMap/homeMap';
import CovidMessage from '../../components/CovidMessage/covidMessage';
import HomeSearch from '../../components/HomeSearch/homeSearch';

const HomeScreen = (props) => {
  return (
    <View>
      {/* The Map */}
      <HomeMap />

      {/* COVID Message */}
      <CovidMessage />

      {/* Button Components */}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
