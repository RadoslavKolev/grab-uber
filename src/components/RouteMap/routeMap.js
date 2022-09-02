/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

import React, { useRef, useCallback } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCJYRRFXU3JGkSshd9tz5ws_gdo7XvC7aM';

const RouteMap = ({ origin, destination }) => {
  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  const mapRef = useRef(null);

  // Rerun if the origin or destination changes
  const onMapReadyHandler = useCallback(() => {
    mapRef.current.fitToCoordinates([originLoc, destinationLoc], {
      animated: true,
      edgePadding: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      },
    });
  }, [mapRef]);

  return (
    <MapView
      ref={mapRef}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: originLoc.latitude,
        longitude: originLoc.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      style={{
        height: '100%',
        width: '100%',
        minHeight: '40%',
      }}
      onMapReady={onMapReadyHandler}
      onMapLoaded={onMapReadyHandler}
    >
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="black"
      />
      <Marker
        coordinate={originLoc}
        title={'Origin'}
        description={origin.description}
        identifier="origin"
      />
      <Marker
        coordinate={destinationLoc}
        title={'Destination'}
        description={destination.description}
        identifier="destination"
      />
    </MapView>
  );
};

export default RouteMap;
