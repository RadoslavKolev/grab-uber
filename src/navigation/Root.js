import React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/homeScreen';
import DestinationSearch from '../screens/DestinationSearch/destinationSearch';
import SearchResults from '../screens/SearchResults/searchResults';

const Stack = createStackNavigator();

const Root = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
