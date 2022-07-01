/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import UberTypeRows from '../UberTypeRows/uberTypeRows';
import typesData from '../../assets/data/types';

const UberTypes = ({ typeState }) => {
  const [selectedType, setSelectedType] = typeState;

  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View>
      {typesData.map(type =>
        <UberTypeRows
          key={type.id}
          type={type}
          isSelected={type.type === selectedType}
          onPress={() => setSelectedType(type.type)}
        />
      )}
      {/* Button */}
      <Pressable
        onPress={confirm}
        style={{
          width: '95%',
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
