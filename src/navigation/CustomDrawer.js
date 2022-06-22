/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    // Under the notch
    <DrawerContentScrollView {...props}>
      <View style={{
        backgroundColor: '#212121',
        padding: 15,
      }}>
        {/* User Information */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <View style={{
            backgroundColor: '#cacaca',
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 10,
          }} />

          <View>
            <Text style={{
              color: '#ffffff',
              fontSize: 24,
            }}>Radoslav Kolev</Text>
            <Text style={{
              color: 'lightgrey',
            }}>5.00 *</Text>
          </View>
        </View>

        {/* Messages */}
        <View style={{
          borderTopWidth: 1,
          borderTopColor: '#919191',
          borderBottomWidth: 1,
          borderBottomColor: '#919191',
          paddingVertical: 5,
          marginVertical: 10,
        }}>
          <Pressable onPress={() => {console.warn('Messages!');}}>
            <Text style={{color: '#dddddd', paddingVertical: 5}}>Messages</Text>
          </Pressable>
        </View>

        {/* Do more */}
        <Pressable onPress={() => {console.warn('Do More!');}}>
          <Text style={{color: '#dddddd', paddingVertical: 5}}>Do more with your account</Text>
        </Pressable>

        {/* Make money */}
        <Pressable onPress={() => {console.warn('Make Money!');}}>
          <Text style={{color: '#ffffff', paddingVertical: 5}}>Make money driving</Text>
        </Pressable>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
