import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CovidMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary.</Text>
      <Text style={styles.text}>Help flatten the curve. If you have to travel, please exercise caution for your safety and the safety of our community.</Text>
      <Text style={styles.learnMore}>Learn more -&gt;</Text>
    </View>
  );
};

export default CovidMessage;
