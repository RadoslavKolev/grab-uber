/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Text, View} from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={{
       height: 400,
       backgroundColor: '#a0abff',
       justifyContent: 'center',
       alignItems: 'center',
    }}>
      <Text>I am a Map</Text>
    </View>
  );
};

export default HomeScreen;
