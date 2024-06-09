import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, Pressable, Alert, BackHandler, TextInput } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Trails from '@/assets/testdata/trailList';
import { NaverMapMarkerOverlay, NaverMapPathOverlay, NaverMapView } from '@mj-studio/react-native-naver-map';
import { UserData } from '@/src/providers/UserProvider';
import { Stack, router, useLocalSearchParams, useNavigation } from 'expo-router';
import * as Location from 'expo-location';
import coord1 from '@/assets/testdata/trailListLoc';
import { useScreenOption } from '@/src/providers/ScreenProvider';
import SubmitButton from '@/src/components/login/SubmitButton';

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
  const {resRoute, runningTime, distance} = useLocalSearchParams();
  const clist: Coordinate[] = (typeof resRoute == 'string' ? JSON.parse(resRoute) : []);

  const calculateBoundingBox = (coordinates: Coordinate[]) => {
    const lats = coordinates.map(coord => coord.latitude);
    const lons = coordinates.map(coord => coord.longitude);
    
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLon = Math.min(...lons);
    const maxLon = Math.max(...lons);

    return {
      minLat,
      maxLat,
      minLon,
      maxLon,
      latDelta: maxLat - minLat,
      lonDelta: maxLon - minLon
    };
  };

  const boundingBox = calculateBoundingBox(clist);
  const latDelta = boundingBox.latDelta * 1.5; // Adjusted delta with 1.5 factor
  const lonDelta = boundingBox.lonDelta * 1.5; // Adjusted delta with 1.5 factor
  const midLat = boundingBox.minLat + latDelta / 2;
  const midLon = boundingBox.minLon + lonDelta / 2;

  const region = {
    latitude: midLat - latDelta / 1.5, // Adjust for center
    longitude: midLon - lonDelta / 1.5, // Adjust for center
    latitudeDelta: latDelta,
    longitudeDelta: lonDelta
  };

  const navigation = useNavigation();
  const { setTabBarVisible } = useScreenOption();

  useLayoutEffect(() => {
    setTabBarVisible(false);
    return () => {
      setTabBarVisible(true);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{headerShown: false}} />
    <Text style={styles.endtext}>산책 종료</Text>
    <View style={styles.trailmapContainer}>
      <NaverMapView
        style={styles.trailmap}
        region={region}
        symbolScale={1}
        isShowLocationButton={false}
        isShowZoomControls={false}
        isScrollGesturesEnabled={false}
        isZoomGesturesEnabled={false}
        isTiltGesturesEnabled={false}
        isRotateGesturesEnabled={false}
      >
        {clist.length > 1 && (
          <NaverMapPathOverlay
            coords={clist}
            width={5}
            color="red"
          />
        )}
        {clist.length > 0 && (
          <NaverMapMarkerOverlay
            latitude={clist[0].latitude}
            longitude={clist[0].longitude}
            anchor={{x: 0.5, y: 1}}
          />
        )}
      </NaverMapView>
      {/* 투명한 더미 View */}
    </View>
    <Text style={styles.congtext}>고생하셨습니다!</Text>
    <Text style={styles.tinfotext}>산책 시간: {runningTime}</Text>
    <Text style={styles.tinfotext}>산책 거리: {distance}km</Text>
    <View style={styles.buttonwrapper}>
    <SubmitButton text={"확인"} onPress={()=>{router.replace('/home');}} /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  congtext: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 30,
  },
  endtext: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 30,
  },
  tinfotext: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
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
  buttonwrapper: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
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
  trailmapContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  trailmap: {
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    aspectRatio: 1.5,
  },
  transparentOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
});
