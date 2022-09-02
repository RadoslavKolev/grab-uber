/* eslint-disable react/self-closing-comp */
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './placeRow';
import { useNavigation } from '@react-navigation/native';

const DestinationSearch = (props) => {
  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };

  const GOOGLE_MAPS_APIKEY = 'AIzaSyCJYRRFXU3JGkSshd9tz5ws_gdo7XvC7aM';
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <GooglePlacesAutocomplete
          placeholder="Where from?"
          textInputProps={{
            placeholderTextColor: '#a1a1a1',
          }}
          fetchDetails={true}
          returnKeyType={'search'}
          minLength={2}
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            // console.log(data, details);
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel="Current Location"
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
          textInputProps={{
            placeholderTextColor: '#a1a1a1',
            textColor: '#a1a1a1',
          }}
          fetchDetails={true}
          returnKeyType={'search'}
          minLength={2}
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            // console.log(data, details);
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
