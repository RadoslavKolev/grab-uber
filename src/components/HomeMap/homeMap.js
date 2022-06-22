/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import cars from '../../assets/data/cars';

const HomeMap = (props) => {
  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    } else if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    } else {
      return require('../../assets/images/top-UberXL.png');
    }
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
        minHeight: '50%',
        minWidth: '50%',
      }}
    >
      {/* Displaying cars on the map */}
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{
            latitude: car.latitude,
            longitude: car.longitude,
          }}
        >
          <Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            transform: [{
              rotate: `${car.heading}deg`,
            }],
          }}
          source={getImage(car.type)}
        />
        </Marker>
        ))}
    </MapView>
  );
};

export default HomeMap;
