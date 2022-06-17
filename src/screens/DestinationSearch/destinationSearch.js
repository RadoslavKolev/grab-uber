/* eslint-disable react/self-closing-comp */
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './placeRow';

const DestinationSearch = (props) => {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCJYRRFXU3JGkSshd9tz5ws_gdo7XvC7aM';
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);

  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <GooglePlacesAutocomplete
          placeholder="Where from?"
          fetchDetails={true}
          returnKeyType={'search'}
          minLength={2}
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          suppressDefaultStyles
          predefinedPlaces={[homePlace, workPlace]}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          styles={{
            textInput: styles.textInput,
            container: styles.autoCompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          fetchDetails={true}
          returnKeyType={'search'}
          minLength={2}
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          suppressDefaultStyles
          renderRow={(data) => <PlaceRow data={data} />}
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autoCompleteContainer,
              top: 70,
            },
            separator: styles.separator,
          }}
        />
        {/* Circle near Origin input */}
        <View style={styles.circle1}></View>

        {/* Line between circles */}
        <View style={styles.line}></View>

        {/* Circle near Destination input */}
        <View style={styles.circle2}></View>
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
