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
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState(' ');
  const [emailBorderColor, setEmailBorderColor] = useState("#aaa");

  async function signin() {
    setLoading(true);
    const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    if(email == '') {
      setErrorMessage("이메일을 입력해주세요!");
      setEmailBorderColor("#FF1744");
    }  else if(!emailRegex.test(email)) {
      setErrorMessage("유효하지 않은 이메일 입니다!");
      setEmailBorderColor("#FF1744");
    } else {
      setEmailBorderColor("#aaa");
      //db접속 및 인증

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
        name={"email"}
        color={"#aaa"}
        size={60}
        style={styles.icon}
      />
      <Text style={styles.sentence}>이메일을 입력해주세요.</Text>
      <View style={styles.buttonwrapper}>
          <TextInput style={[styles.textinputstyle, {borderColor: emailBorderColor}]}
          value={email}
          onChangeText={setEmail}
          inputMode='email'
          autoComplete='email'
          autoCapitalize='none'
          placeholder="example@example.com"
          />
        <SubmitButton text="로그인" disabled={loading} onPress={signin} />
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
