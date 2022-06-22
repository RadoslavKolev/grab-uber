/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, Dimensions } from 'react-native';
import RouteMap from '../../components/RouteMap/routeMap';
import UberTypes from '../../components/UberTypes/uberTypes';
import { useRoute } from '@react-navigation/native';

const SearchResults = (props) => {
  // Receiving data from DestinationSearch
  const route = useRoute();
  console.log(route.params);

  return (
    <View style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <View style={{height: Dimensions.get('window'). height - 400}}>
        <RouteMap />
      </View>

      <View style={{ height: 400, width: 406, backgroundColor: '#ffffff' }}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;
