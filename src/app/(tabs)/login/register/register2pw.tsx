import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { Stack, router } from 'expo-router';
import SubmitButton from '@/src/components/login/SubmitButton';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UserData } from '@/src/providers/UserProvider';



export default function registerPage2Password() {
  const {user, setuser} = UserData();
  const [password, setPassword] = useState('');
  const [passwordc, setPasswordc] = useState('');
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState(' ');
  const [pwBorderColor, setPwBorderColor] = useState("#aaa");
  const [pwcBorderColor, setPwcBorderColor] = useState("#aaa");

  async function signin() {
    setLoading(true);
    const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    if(password == '') {
      setErrorMessage("비밀번호를 입력해주세요!");
      setPwcBorderColor("#aaa");
      setPwBorderColor("#FF1744");
    } else if(!passwordRegex.test(password)) {
      setErrorMessage("비밀번호 양식을 확인해주세요!");
      setPwcBorderColor("#aaa");
      setPwBorderColor("#FF1744");
    } else if(passwordc == '') {
      setErrorMessage("비밀번호를 한번 더 입력해주세요!");
      setPwBorderColor("#aaa");
      setPwcBorderColor("#FF1744");
    } else if(password != passwordc) {
      setErrorMessage("비밀번호가 일치하지 않습니다!");
      setPwBorderColor("#aaa");
      setPwcBorderColor("#FF1744");
    } else {
      //db접속 및 인증
      setErrorMessage(" ");
      setPwBorderColor("#aaa");
      setPwcBorderColor("#aaa");
      setuser({id: -1, username: "", email: user.email, pw: password, gender: '', age: -1, islogin: false});
      router.push("/login/register/register3info");
    }
    setLoading(false);
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
        name={"key"}
        color={"#aaa"}
        size={60}
        style={styles.icon}
      />
      <Text style={styles.sentence}>비밀번호를 입력해주세요</Text>
      <Text style={styles.guide}>영문+숫자+특수문자 8자리 이상</Text>
      <View style={styles.buttonwrapper}>
          <TextInput style={[styles.textinputstyle, {borderColor: pwBorderColor}]}
          value={password}
          onChangeText={setPassword}
          textContentType='password'
          autoCapitalize='none'
          placeholder="비밀번호"
          secureTextEntry
          />
          <TextInput style={[styles.textinputstyle, {borderColor: pwcBorderColor}]}
          value={passwordc}
          onChangeText={setPasswordc}
          textContentType='password'
          autoCapitalize='none'
          placeholder="비밀번호 확인"
          secureTextEntry
          />
        <SubmitButton text="다음" disabled={loading} onPress={signin} />
        <Text style={{
          width: '90%',
          alignSelf: 'center',
          textAlign: 'center',
          color: '#FF1744' ,
          marginTop: -10,
        }}>
          {errorMessage}
        </Text>
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
    margin: 20,
    marginVertical: paddingbot,
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
  textinputstyle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    paddingHorizontal: 20,
    borderWidth: 1,
    width: '90%',
    height: 50,
    margin: 10,
    marginBottom: Platform.OS == 'ios' ? 10 : 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
});
