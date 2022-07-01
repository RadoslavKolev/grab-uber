/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';
import RouteMap from '../../components/RouteMap/routeMap';
import UberTypes from '../../components/UberTypes/uberTypes';
import { createOrder } from '../../graphql/mutations';

const SearchResults = (props) => {
  const typeState = useState(null);

  // Receiving data from DestinationSearch
  const route = useRoute();
  const {originPlace, destinationPlace} = route.params;

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) {
      return;
    }

    // Submit to the server
    try {
      // Getting the userId from Congito
      const userInfo = await Auth.currentAuthenticatedUser();

      const date = new Date();

      // Data to send
      const input = {
        createdAt: date.toISOString(),
        type: type,
        originLatitude: originPlace.details.geometry.location.lat,
        originLongitude: originPlace.details.geometry.location.lng,
        destinationLatitude: destinationPlace.details.geometry.location.lat,
        destinationLongitude: destinationPlace.details.geometry.location.lng,
        userId: userInfo.attributes.sub,
        carId: '1',  // Initially cannot be empty (required)
      };

      const response = await API.graphql(
        graphqlOperation(
          createOrder, {
            input: input,
          }
        )
      );

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <View style={{height: Dimensions.get('window'). height - 400}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{ height: 400, width: 406, backgroundColor: '#ffffff' }}>
        <UberTypes
          typeState={typeState}
          onSubmit={onSubmit}
        />
      </View>
    </View>
  );
};

export default SearchResults;
