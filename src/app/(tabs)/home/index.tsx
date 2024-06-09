import { Platform, Pressable, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { Link, Stack, router, useFocusEffect, useNavigation } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeSentences, { Saying } from '@/assets/data/HomeSentences';
import { NaverMapMarkerOverlay, NaverMapView, NaverMapViewRef, Region } from '@mj-studio/react-native-naver-map';
import MaskedView from '@react-native-masked-view/masked-view';
import { UserData } from '@/src/providers/UserProvider';
import { requestForegroundPermissionsAsync, requestPermissionsAsync } from 'expo-location';
import { useCallback, useEffect, useRef, useState } from 'react';

const iconsize = 30;

export default function homePage() {
  const {user, coordinate, getCoordinate} = UserData();
  const mapref = useRef<NaverMapViewRef>(null);
  const saying: Saying = HomeSentences[Math.floor(Math.random() * (HomeSentences.length-1))];
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
          <Text style={styles.headertext}>{user.username}님, 반갑습니다!</Text>
        ),
      }} />
      <Link href={"/community/board/notice"} asChild>
      <Pressable style={styles.iconTextContainer}>
          <View style={styles.topButton01}>
            <MaterialCommunityIcons name="information" size={24} color="black" />
            <Text style={styles.noticetitle}>만보 정식출시 안내</Text>
          </View>
      </Pressable>
      </Link>
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
            ref={mapref}
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
      {/**버튼 */}    
      <View style={styles.buttonwrapper}>
      <Pressable style={styles.meetingButton} onPress={()=>{router.replace("/community")}}>
          <MaterialCommunityIcons style={{alignSelf: 'flex-start', paddingHorizontal: 10,}}
            name="forum"
            size={32}
            color="black"
          />
          <Text style={styles.meetingText}>
            커뮤니티
            </Text>
            <MaterialCommunityIcons style={{alignSelf: 'flex-end', paddingHorizontal: 10,}}
            name="arrow-right"
            size={32}
            color="black"
          />
        </Pressable>
      <Pressable style={styles.meetingButton} onPress={()=>{router.replace("/trail")}}>
          <MaterialCommunityIcons style={{alignSelf: 'flex-start', paddingHorizontal: 10,}}
            name="forest"
            size={32}
            color="black"
          />
          <Text style={styles.meetingText}>
            산책하기
            </Text>
          <MaterialCommunityIcons style={{alignSelf: 'flex-end', paddingHorizontal: 10,}}
            name="arrow-right"
            size={32}
            color="black"
          />
        </Pressable>
      </View>    
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
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topButton01: {
    width: "90%",
    height: 50,
    backgroundColor: "#ffadad",
    borderRadius: 15,
    flexDirection: 'row', // 아이콘과 텍스트를 가로로 배치
    alignItems: 'center', // 세로 정렬
    paddingHorizontal: 10, // 수평 패딩 추가
    margin: 10,
    marginVertical: 30,
  },
  sentenceWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: 10,
    height: 100,
    borderRadius: 20,
    width: '90%',
    borderColor: '#aaa',
    borderTopWidth: 3,
    borderBottomWidth: 3,
    paddingVertical: 12,
  },
  noticetitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    padding: 0,
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
    flex: 1,
  },
  titlemap: {
    width: '100%',
    flex: 1,
  },
  headertext: {
    fontSize: 20,
    fontWeight: '500',
  },
  buttonwrapper: {
    height: '30%',
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  meetingButton: {
    width: '45%',
    height: '100%',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth:1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  meetingText: {
    fontSize: 24,
    color: '#000',
    marginVertical: 20,
  },
});
