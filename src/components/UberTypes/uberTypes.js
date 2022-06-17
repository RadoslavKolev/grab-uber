/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import UberTypeRows from '../UberTypeRows/uberTypeRows';
import typesData from '../../assets/data/types';

const UberTypes = (props) => {
  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View>
      {typesData.map(
        (type) => <UberTypeRows
         key={type.id}
         type={type} />
      )}
      {/* Button */}
      <Pressable
        onPress={confirm}
        style={{
          width: '100%',
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}
      >
        <Text style={{
          color: 'white',
          fontWeight: 'bold',
        }}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
