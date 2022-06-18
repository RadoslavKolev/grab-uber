/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCJYRRFXU3JGkSshd9tz5ws_gdo7XvC7aM';

const RouteMap = (props) => {
  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };
  const destination = {
    latitude: 28.490627,
    longitude: -16.273045,
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 43.2141,
        longitude: 27.9147,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="black"
      />
      <Marker
        coordinate={origin}
        title={'Origin'}
      />
      <Marker
        coordinate={destination}
        title={'Destination'}
      />
    </MapView>
  );
};

export default RouteMap;
