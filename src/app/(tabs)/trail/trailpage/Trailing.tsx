import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, Pressable, Alert, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Trails from '@/assets/testdata/trailList';
import { NaverMapPathOverlay, NaverMapView, NaverMapViewProps, NaverMapViewRef } from '@mj-studio/react-native-naver-map';
import { UserData } from '@/src/providers/UserProvider';
import { Stack, router, useNavigation } from 'expo-router';
import * as Location from 'expo-location';
import { useScreenOption } from '@/src/providers/ScreenProvider';
import { uploadTrailAndRoute } from '@/src/lib/TrailDB';

const { width } = Dimensions.get('window');

type TimeLeft = {
  minutes: number;
  seconds: number;
};

type Coordinate = {
  latitude: number;
  longitude: number;
};

export default function MapScreen() {
  const { coordinate, getCoordinate, user } = UserData();
  const [isTrailing, setIsTrailing] = useState(false);
  const [loading, setLoading] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ minutes: 0, seconds: 0 });
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [buttonText, setButtonText] = useState('산책 시작');
  const [data, setData] = useState(Trails);
  const [locationList, setLocationList] = useState<Coordinate[]>([]);
  const [distance, setDistance] = useState(0); // 거리 추가
  const [steps, setSteps] = useState(0); // 걸음 수 추가
  const mapref = useRef<NaverMapViewRef>(null);

  
  const navigation = useNavigation();
  const { setTabBarVisible } = useScreenOption();

  useLayoutEffect(() => {
    setTabBarVisible(false);
    return () => {
      setTabBarVisible(true);
    };
  }, [navigation]);


  const showExitConfirmation = () => {
    Alert.alert(
      '산책 종료',
      '정말 나가시겠습니까?\n지금 나가시면 산책 기록이 모두 삭제됩니다.',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '확인',
          onPress: () => router.back(),
        },
      ],
      { cancelable: false }
    );
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (isTrailing) showExitConfirmation();
        else router.back();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [isTrailing])
  );

  useEffect(() => {
    const fetchData = async () => {
      mapref.current?.setLocationTrackingMode("Face");
      try {
        getCoordinate();
      } catch (error) {
        console.error('Error reading JSON file:', error);
      }
    };

    fetchData();
  }, []);

  const calculateTimeLeft = (elapsedTime: number): TimeLeft => {
    const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);

    return { minutes, seconds };
  };

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const haversineDistance = (coord1: Coordinate, coord2: Coordinate): number => {
    const toRad = (x: number) => (x * Math.PI) / 180;
    const R = 6371e3; // metres
    const φ1 = toRad(coord1.latitude);
    const φ2 = toRad(coord2.latitude);
    const Δφ = toRad(coord2.latitude - coord1.latitude);
    const Δλ = toRad(coord2.longitude - coord1.longitude);

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // in metres
  };

  const trailingtimer = async () => {
    startTimeRef.current = Date.now();
    setTimeLeft({ minutes: 0, seconds: 0 });
    const intid = setInterval(async () => {
      if (startTimeRef.current) {
        const elapsedTime = Date.now() - startTimeRef.current;
        setTimeLeft(calculateTimeLeft(elapsedTime));
        // Fetch location every 3 seconds
        if (elapsedTime % 3000 < 1000) {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
          }

          let location = await Location.getCurrentPositionAsync({});
          setLocationList((prev) => {
            const newLocation = { latitude: location.coords.latitude, longitude: location.coords.longitude };
            if (prev.length > 0) {
              const lastLocation = prev[prev.length - 1];
              const dist = haversineDistance(lastLocation, newLocation);
              setDistance((d) => d + dist);
              setSteps((s) => s + Math.floor(dist / 1.2));
            }
            return [...prev, newLocation];
          });
        }
      }
    }, 1000);
    setIntervalId(intid);
  };


  const stopTimer = async () => {
    setLoading(true);
    if (intervalId != null) clearInterval(intervalId);
    const enddate = new Date(0);
    enddate.setMinutes(timeLeft.minutes);
    enddate.setSeconds(timeLeft.seconds);
    await uploadTrailAndRoute(user.email, locationList, distance, enddate);
    router.replace({pathname: `/trail/trailpage/TrailingRes`, params: {resList: JSON.stringify(locationList), runningTime:formatTime(timeLeft.minutes, timeLeft.seconds), distance:((distance / 1000).toFixed(2)).toString()  }})
    setTimeLeft({ minutes: 0, seconds: 0 });
    setLocationList([]);
    setDistance(0);
    setSteps(0);
    startTimeRef.current = null;
    setLoading(false);
  };

  const changeState = async () => {
    setLoading(true);
    if (isTrailing) {
      setIsTrailing(false);
      stopTimer();
      setButtonText('산책 시작');
    } else {
      for (let i = 3; i > 0; i--) {
        setButtonText(i.toString());
        await delay(1000);
      }
      setButtonText('산책 종료');
      trailingtimer();
      setIsTrailing(true);
    }
    setLoading(false);
  };

  const formatTime = (minutes: number, seconds: number): string => {
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen 
        options={{
        }}
      />
      <NaverMapView
        ref={mapref}
        style={{ flex: 1 }}
        region={{
          latitude: coordinate.latitude - coordinate.latitudeDelta/2,
          longitude: coordinate.longitude - coordinate.longitudeDelta/2,
          latitudeDelta: coordinate.latitudeDelta,
          longitudeDelta: coordinate.longitudeDelta,
        }}
        isShowZoomControls={false}
        isScrollGesturesEnabled={false}  // Disable scrolling
        isZoomGesturesEnabled={false}    // Disable zooming
        isTiltGesturesEnabled={false}    // Disable tilting
        isRotateGesturesEnabled={false}  // Disable rotating
      >
        {locationList.length > 1 && (
          <NaverMapPathOverlay
            coords={locationList}
            width={5}
            color="red"
          />
        )}
      </NaverMapView>
      <View style={styles.listContainer}>
        <View style={styles.trailingdata}>
          <Text style={styles.trilingtextot}>{steps} 보</Text>
          <Text style={styles.trilingtexttime}>{formatTime(timeLeft.minutes, timeLeft.seconds)}</Text>
          <Text style={styles.trilingtextot}>{(distance / 1000).toFixed(2)} km</Text>
        </View>
        <Pressable
          style={isTrailing ? styles.viewTextbuttonend : styles.viewTextbutton}
          disabled={loading}
          onPress={changeState}
        >
          <Text style={styles.viewTextbuttontext}>{buttonText}</Text>
        </Pressable>
      </View>
      {/**디버깅용
      <View>
        <Text>Recorded Locations:</Text>
          {locationList.slice(-2).map((location, index) => (
            <Text key={index}>
              {location.latitude}, {location.longitude}
            </Text>
          ))}
      </View>
     */}
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
    marginBottom: 30,
  },
  viewTextbuttonend: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: '#FF5722dd',
    padding: 10,
    marginBottom: 30,
  },
  viewTextbuttontext: {
    fontSize: 32,
  },
});
