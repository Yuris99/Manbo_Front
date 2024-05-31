import { Alert, Image, Keyboard, KeyboardAvoidingView, Pressable, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { Stack } from 'expo-router';
import SubmitButton from '@/src/components/login/SubmitButton';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';
import InputContainer from '@/src/components/login/InputContainer';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function registerPage() {
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
      setPwBorderColor("#aaa");
      setPwcBorderColor("#aaa");

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
        name={"lock"}
        color={"#aaa"}
        size={60}
        style={styles.icon}
      />
      <Text style={styles.sentence}>비밀번호를 입력해주세요.</Text>
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
          color: '#FF1744' 
        }}>
          {errorMessage}
        </Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    alignSelf: 'flex-start',
    padding: 20,
    paddingBottom: 0,
  },
  sentence: {
    fontSize: 24,
    fontWeight: '500',
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
  textinputstyle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    paddingHorizontal: 20,
    borderWidth: 1,
    width: '90%',
    height: 50,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
});
