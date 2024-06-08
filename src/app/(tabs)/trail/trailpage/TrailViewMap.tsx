// app/map.tsx
import React, { useRef } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, Image } from 'react-native';
import * as fs from 'expo-file-system';
import { useState, useEffect } from 'react';
import { Trail } from '@/src/types';
import Trails from '@/assets/testdata/trailList';
import { NaverMapMarkerOverlay, NaverMapView, NaverMapViewRef } from '@mj-studio/react-native-naver-map';
import { UserData } from '@/src/providers/UserProvider';
import TrailIndexTrail from '@/src/components/trail/TrailIndextrail';

const { width } = Dimensions.get('window');

export default function MapScreen() {
  const {coordinate, getCoordinate} = UserData();
  const [data, setData] = useState<Trail[]>([]);
  const mapref = useRef<NaverMapViewRef>(null);

  useEffect(() => {
    const fetchData = async () => {
      mapref.current?.setLocationTrackingMode("Face");
      try {
        //여기서 get trail data
        const members: Trail[] = Trails;
        setData(members);
        getCoordinate();
      } catch (error) {
        console.error('Error reading JSON file:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <View style={{ flex: 1 }}>
      <NaverMapView
        ref={mapref}
        style={{ flex: 1, }}
        initialRegion={{
          latitude: coordinate.latitude-coordinate.latitudeDelta,
          longitude: coordinate.longitude-coordinate.longitudeDelta,
          latitudeDelta: coordinate.latitudeDelta*2,
          longitudeDelta: coordinate.longitudeDelta*2,
        }}
        isShowLocationButton={false}
        
        
        isShowZoomControls={false}
      >
        {data.map((item) => (
          <NaverMapMarkerOverlay
            key={item.id}
            latitude={item.startcoord.latitude}
            longitude={item.startcoord.longitude}
            anchor={{x: 0.5, y: 1}}
            caption={{
              text: item.name,
            }}
          />
        ))}
      </NaverMapView>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            gap: 10,
            margin: 10,
            marginHorizontal: 0,
          }}
          renderItem={({ item }) => (
            <TrailIndexTrail trail={item} look={1} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    position: 'absolute',
    bottom: 0,
    height: '30%',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    width: width * 0.8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});