/* eslint-disable react-native/no-inline-styles */

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, Alert } from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { useRoute, useNavigation } from '@react-navigation/native';
import RouteMap from '../../components/RouteMap/routeMap';
import UberTypes from '../../components/UberTypes/uberTypes';
import { createOrder } from '../../graphql/mutations';

const SearchResults = (props) => {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCJYRRFXU3JGkSshd9tz5ws_gdo7XvC7aM';

  const typeState = useState(null);
  const ref = useRef();

  // Receiving data from DestinationSearch
  const route = useRoute();
  const navigation = useNavigation();
  const {originPlace, destinationPlace} = route.params;

  useEffect(() => {
    const getTravelTime = async () => {
      await fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${originPlace.data.description}&destinations=${destinationPlace.data.description}&key=${GOOGLE_MAPS_APIKEY}`
      )
      .then(res => res.json())
      .then(data => {
        ref.current = data.rows[0].elements[0];
      });
    };

    getTravelTime();
  }, [originPlace, destinationPlace, GOOGLE_MAPS_APIKEY]);

  const travelTime = () => {
    return ref.current?.duration.text;
  };

  const travelDistance = () => {
    return ref.current?.distance.text;
  };

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

      Alert.alert(
        'Order Confirmed',
        'Your Driver is on the way',
        [{
          text: 'Go Home',
          onPress: () => navigation.navigate('HomeScreen'),
        }]
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <View style={{height: Dimensions.get('window'). height - 500}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View ref={ref} style={{
        height: 70,
        width: 406,
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{
          color: '#000',
          fontSize: 17,
          fontWeight: 'bold',
          marginTop: 20,
        }}>Distance - {travelDistance()}</Text>
        <Text style={{
          color: '#000',
          fontSize: 17,
          fontWeight: 'bold',
          marginVertical: 15,
        }}>Travel Time - {travelTime()}</Text>
      </View>

      <View style={{
        height: 430,
        width: 406,
        backgroundColor: '#ffffff',
      }}>
        <UberTypes
          typeState={typeState}
          onSubmit={onSubmit}
        />
      </View>
    </View>
  );
};

export default SearchResults;
