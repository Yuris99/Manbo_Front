import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { Link, Stack, router } from 'expo-router';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SubmitButton from '@/src/components/login/SubmitButton';
import { UserData } from '@/src/providers/UserProvider';
import { useState } from 'react';

export default function ChangeLoc() {
  const {locate, setloc, user} = UserData();
  const [city, setCity] = useState(locate.city);
  const [town, setTown] = useState(locate.town);
  const [village, setVillage] = useState(locate.village);
  const [loading, setLoading] = useState(false);

  async function signin() {
    setLoading(true);
    await setloc(0, city);
    await setloc(1, town);
    await setloc(2, village);
    router.replace('/trail');
    setLoading(false);
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        title: '',
        headerLeft: () => (
          <HeaderBackButton />
        ),
      }}/>
      <MaterialCommunityIcons
        name={"crosshairs-gps"}
        color={"#aaa"}
        size={60}
        style={styles.icon}
      />
      <Text style={styles.sentence}>위치 정보를 설정해주세요</Text>
      <View style={styles.buttonwrapper}>
        <Link href={{
          pathname: '/trail/gpsSelector', 
          params: {selector: '0'}
          }} 
          style={styles.linkstyle} 
        asChild>
          <Pressable>
            <Text style={[styles.textboxstyle, {color: (city == '도/특별시/광역시' ? "#aaa" : 'black')}]}>{city}</Text>
          </Pressable>
        </Link>
        <Link href={{
          pathname: '/trail/gpsSelector',  
          params: {selector: '1', before1: city}
          }} 
          style={[styles.linkstyle, { display: city == '도/특별시/광역시' ? 'none' : 'flex' }]} 
        asChild>
          <Pressable>
        <Text style={[styles.textboxstyle, {color: (town == '시/군/구' ? "#aaa" : 'black')}]}>{town}</Text>
          </Pressable>
        </Link>
        <Link href={{
          pathname: '/trail/gpsSelector', 
          params: {selector: '2', before1: city, before2: town}
          }} 
          style={[styles.linkstyle, { display: town == '시/군/구' ? 'none' : 'flex' }]} 
        asChild>
          <Pressable>
        <Text style={[styles.textboxstyle, {color: (village == '읍/면/동' ? "#aaa" : 'black')}]}>{village}</Text>
          </Pressable>
        </Link>

        <View style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          display: village == '읍/면/동' ? 'none' : 'flex',
        }}>
          <SubmitButton text="저장" disabled={loading} onPress={signin} />
        </View>
      </View>
    </View>
  );
}


const paddingbot = Platform.OS == 'ios' ? 20 : 10;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  icon: {
    alignSelf: 'flex-start',
    padding: 20,
    paddingTop: 5,
    paddingBottom: 0,
  },
  sentence: {
    fontSize: 24,
    fontWeight: '500',
    marginVertical: paddingbot,
    margin: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  guide: {
    fontSize: 18,
    fontWeight: '500',
    margin: 10,
    marginLeft: 20,
    color: "#999",
    alignSelf: 'flex-start',
  },
  buttonwrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkstyle: {
    width: '90%',
    paddingHorizontal: 20,
    borderWidth: 1,
    height: 50,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#aaa',
    borderRadius: 30,
    justifyContent: 'center',
  }, 
  textboxstyle: {
    fontSize: 18,
    fontWeight: '500',
  }
});
