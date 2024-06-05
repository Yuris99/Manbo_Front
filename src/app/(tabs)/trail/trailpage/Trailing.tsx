// app/map.tsx
import React from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, Image, Pressable } from 'react-native';
import * as fs from 'expo-file-system';
import { useState, useEffect } from 'react';
import { Trail } from '@/src/types';
import Trails from '@/assets/testdata/trailList';
import { NaverMapMarkerOverlay, NaverMapView } from '@mj-studio/react-native-naver-map';
import { UserData } from '@/src/providers/UserProvider';
import TrailIndexTrail from '@/src/components/trail/TrailIndextrail';

const { width } = Dimensions.get('window');

export default function MapScreen() {
  const {coordinate, getCoordinate} = UserData();
  const [isTrailing, setIsTrailing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [labtime, setLabtime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [buttonText, setButtonText] = useState("산책 시작");
  const [data, setData] = useState<Trail[]>([]);

  useEffect(() => {
    const fetchData = async () => {
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
  async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function trailingtimer() {
    setStartTime(Date.now());
    console.log(formatTime(startTime));
    const intid = setInterval(() => {
      setLabtime((Date.now()-startTime));
      console.log(formatTime(labtime));
    }, 1000);
    setIntervalId(intid);
  }
  async function stopTimer() {
    if(intervalId != null)
      clearInterval(intervalId);
    setLabtime(0);
  }
  async function changeState() {
    setLoading(true);
    if(isTrailing) {
      setIsTrailing(false);
      await stopTimer();
      setButtonText("산책 시작");

    } else {
      setButtonText("3");
      console.log("3");
      await delay(1000);
      setButtonText("2");
      console.log("2");
      await delay(1000);
      setButtonText("1");
      console.log("1");
      await delay(1000);
      //start record
      console.log("start");
      trailingtimer();
      setButtonText("산책 종료");
      setIsTrailing(true);
    }


    setLoading(false);
  }
  function formatTime(ms: number): string {
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);

    return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <View style={{ flex: 1 }}>
      <NaverMapView
        style={{ flex: 1, }}
        region={{
          latitude: coordinate.latitude-coordinate.latitudeDelta,
          longitude: coordinate.longitude-coordinate.longitudeDelta,
          latitudeDelta: coordinate.latitudeDelta*2,
          longitudeDelta: coordinate.longitudeDelta*2,
        }}
        isShowLocationButton={false}
        
        isShowZoomControls={false}
      >
      </NaverMapView>
      <View style={styles.listContainer}>
        <View style={styles.trailingdata}>
          <Text style={styles.trilingtextot}>0보</Text>
          <Text style={styles.trilingtexttime}>{formatTime(labtime)}</Text>
          <Text style={styles.trilingtextot}>0.00km</Text>
        </View>
        <Pressable style={isTrailing ? styles.viewTextbuttonend : styles.viewTextbutton} disabled={loading} onPress={() => {changeState()}}>
          <Text style={styles.viewTextbuttontext}>{buttonText}</Text>
          </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    height: '30%',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
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
  description: {
    fontSize: 14,
    color: 'gray',
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