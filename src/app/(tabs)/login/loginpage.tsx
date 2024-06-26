import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { Stack, router } from 'expo-router';
import SubmitButton from '@/src/components/login/SubmitButton';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';
import { useState } from 'react';
import { UserData } from '@/src/providers/UserProvider';



export default function LoginPage() {
  const {user, login} = UserData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState(' ');
  const [emailBorderColor, setEmailBorderColor] = useState("#aaa");
  const [pwBorderColor, setPwBorderColor] = useState("#aaa");

  async function signin() {
    setLoading(true);
    const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if(email == '') {
      setErrorMessage("이메일을 입력해주세요!");
      setEmailBorderColor("#FF1744");
      setPwBorderColor("#aaa");
    } else if(password == '') {
      setErrorMessage("비밀번호를 입력해주세요!");
      setEmailBorderColor("#aaa");
      setPwBorderColor("#FF1744");
    } else if(!emailRegex.test(email)) {
      setErrorMessage("올바르지 않은 이메일 입니다!");
      setEmailBorderColor("#FF1744");
      setPwBorderColor("#aaa");
    } else if(!passwordRegex.test(password)) {
      setErrorMessage("유효하지 않은 비밀번호 입니다!");
      setEmailBorderColor("#aaa");
      setPwBorderColor("#FF1744");
    } else {
      const res = await login(email, password);
      console.log(res);
      console.log("Test");
      if(res) {
        setEmailBorderColor("#aaa");
        setPwBorderColor("#aaa");
        setErrorMessage(" ");
        //db접속 및 인증
        Alert.alert("성공적으로 로그인 되었습니다!");
        router.replace('/home');
      } else {
        setErrorMessage("이메일 또는 비밀번호가 일치하지 않습니다!");
        setEmailBorderColor("#FF1744");
        setPwBorderColor("#FF1744");
      }
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
      <View style={styles.imagecontainer}>
        <Text style={styles.sentence}>안녕하세요!</Text>
      </View>
      <View style={styles.buttonwrapper}>
          <TextInput style={[styles.textinputstyle, {borderColor: emailBorderColor}]}
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={"#aaa"}
          inputMode='email'
          autoComplete='email'
          autoCapitalize='none'
          placeholder="이메일을 입력해주세요."
          />
          <TextInput style={[styles.textinputstyle, {borderColor: pwBorderColor}]}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={"#aaa"}
          textContentType='password'
          autoCapitalize='none'
          placeholder="비밀번호를 입력해주세요."
          secureTextEntry
          />
        <SubmitButton text="로그인" disabled={loading} onPress={() => {signin();}} />
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    backgroundColor: 'white',
  },
  sentence: {
    fontSize: 30,
    marginTop: '5%',
    fontWeight: 'bold',
  },
  imagecontainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
  },
  buttonwrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
