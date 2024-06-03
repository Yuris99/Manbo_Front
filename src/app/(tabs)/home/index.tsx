import { Platform, Pressable, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { Stack, useFocusEffect, useNavigation } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeSentences, { Saying } from '@/assets/data/HomeSentences';
import { NaverMapMarkerOverlay, NaverMapView, Region } from '@mj-studio/react-native-naver-map';
import MaskedView from '@react-native-masked-view/masked-view';
import { UserData } from '@/src/providers/UserProvider';
import { requestForegroundPermissionsAsync, requestPermissionsAsync } from 'expo-location';
import { useCallback, useEffect, useState } from 'react';

const iconsize = 30;

export default function homePage() {
  const {coordinate, getCoordinate} = UserData();
  const saying: Saying = HomeSentences[Math.floor(Math.random() * (HomeSentences.length-1))];
  //테스트
  const username = "홍지훈";
  useFocusEffect(
    useCallback(() => {
      const getuserpos = async() => {
        await getCoordinate();
      };
      getuserpos();

    }, [])
  );
  console.log("test: " + coordinate.latitude + "  " + coordinate.longitude);


  return (
    <SafeAreaView style={[styles.container]}>
    {/**헤더 */}
      <Stack.Screen options={{
        title: '',
        headerShadowVisible: false,
        headerLeft: () => (
          <Text style={styles.headertext}>{username}님, 반갑습니다!</Text>
        ),
      }} />
      {/**명언 */}
      <View style={styles.sentenceWrapper}>
        <Text style={styles.title} adjustsFontSizeToFit={true} numberOfLines={1}>{saying.sentence}</Text>
        <Text style={styles.subtitle}>- {saying.spoke} -</Text>
      </View>
      {/**지도 */}
      <View style={styles.mapContainer}>
        <MaskedView style={styles.mapmask} maskElement={
          <View style={{
            backgroundColor: 'black',
            borderRadius: 32,
            flex: 1,
          }}>
          </View>
        }>
          <NaverMapView
            style={styles.titlemap}
            symbolScale={0}
            isShowLocationButton={false}
            isShowZoomControls={false}
            initialRegion={coordinate}
            region={{latitude: coordinate.latitude-0.001, longitude: coordinate.longitude-0.002, latitudeDelta: coordinate.latitudeDelta, longitudeDelta: coordinate.longitudeDelta}}
          >
          </NaverMapView>
        </MaskedView>
      </View>
      {/**모임 */}
      <Pressable onPress={()=>{}}>
        <Text>test</Text>
      </Pressable>
      {/**산책기록 */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  sentenceWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: 30,
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    padding: 20,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
  },
  mapmask: {
    width: '100%',
    height: '100%',
    borderRadius: 32,
  },
  mapContainer: {
    marginTop: 30,
    width: '85%',
    height: '30%',
  },
  titlemap: {
    width: '100%',
    flex: 1,
  },
  headertext: {
    fontSize: 20,
    fontWeight: '500',
  },
});
