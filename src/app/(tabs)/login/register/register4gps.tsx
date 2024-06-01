import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { Link, Stack, router } from 'expo-router';
import SubmitButton from '@/src/components/login/SubmitButton';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UserData } from '@/src/provider/UserProvider';

export default function registerPage3Info() {
  const {locate, setloc} = UserData();
  const [loading, setLoading] = useState(false);

  async function signin() {
    setLoading(true);
    setLoading(false);
    router.replace("/login/register/registerComplete");
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
          pathname: '/login/register/gpsSelector', 
          params: {selector: '0'}
          }} 
          style={styles.linkstyle} 
        asChild>
          <Pressable>
            <Text style={[styles.textboxstyle, {color: (locate.city == '도/특별시/광역시' ? "#aaa" : 'black')}]}>{locate.city}</Text>
          </Pressable>
        </Link>
        <Link href={{
          pathname: '/login/register/gpsSelector', 
          params: {selector: '1', before1: locate.city}
          }} 
          style={[styles.linkstyle, { display: locate.city == '도/특별시/광역시' ? 'none' : 'flex' }]} 
        asChild>
          <Pressable>
        <Text style={[styles.textboxstyle, {color: (locate.town == '시/군/구' ? "#aaa" : 'black')}]}>{locate.town}</Text>
          </Pressable>
        </Link>
        <Link href={{
          pathname: '/login/register/gpsSelector', 
          params: {selector: '2', before1: locate.city, before2: locate.town}
          }} 
          style={[styles.linkstyle, { display: locate.town == '시/군/구' ? 'none' : 'flex' }]} 
        asChild>
          <Pressable>
        <Text style={[styles.textboxstyle, {color: (locate.village == '읍/면/동' ? "#aaa" : 'black')}]}>{locate.village}</Text>
          </Pressable>
        </Link>

        <View style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          display: locate.village == '읍/면/동' ? 'none' : 'flex',
        }}>
          <SubmitButton text="회원가입" disabled={loading} onPress={signin} />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const paddingbot = Platform.OS == 'ios' ? 20 : 10;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
