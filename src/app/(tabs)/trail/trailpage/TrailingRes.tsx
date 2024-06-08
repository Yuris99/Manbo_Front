import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, Pressable, Alert, BackHandler, TextInput } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Trails from '@/assets/testdata/trailList';
import { NaverMapView } from '@mj-studio/react-native-naver-map';
import { UserData } from '@/src/providers/UserProvider';
import { router, useLocalSearchParams } from 'expo-router';
import * as Location from 'expo-location';

const { width } = Dimensions.get('window');

type TimeLeft = {
  minutes: number;
  seconds: number;
};

type Coordinate = {
  latitude: number;
  longitude: number;
};

type TrailingResProp = {
  resList: string;
}

export default function MapScreen({} : TrailingResProp) {
  const {resList} = useLocalSearchParams();
  console.log(resList);
  const resultDataset: Coordinate[] = (typeof resList == 'string' ? JSON.parse(resList) : []);

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        value={resultDataset.map(loc => `${loc.latitude}, ${loc.longitude}`).join('\n')}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    height: '30%',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  trailingdata: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  trilingtexttime: {
    fontSize: 48,
    width: '40%',
    textAlign: 'center',
  },
  trilingtextot: {
    fontSize: 18,
    textAlign: 'center',
    width: '30%',
  },
  viewTextbutton: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: '#9BC34Add',
    padding: 10,
  },
  viewTextbuttonend: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: '#FF5722dd',
    padding: 10,
  },
  viewTextbuttontext: {
    fontSize: 32,
  },
});
