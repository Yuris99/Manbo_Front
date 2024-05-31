import { Alert, Image, Keyboard, KeyboardAvoidingView, Pressable, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { Link, Stack, router } from 'expo-router';
import SubmitButton from '@/src/components/login/SubmitButton';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UserData } from '@/src/provider/UserProvider';

export default function registerPage3Info() {
  const {user} = UserData();
  const [loading, setLoading] = useState(false);

  async function signin() {
    router.replace("/home")
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <Stack.Screen options={{
        title: '',
      }}/>
      <Text style={styles.sentence}>회원가입이 완료되었습니다!</Text>
      <Text style={styles.sentence2}>환영합니다 {user?.username}님!</Text>
          <SubmitButton text="시작하기!" disabled={loading} onPress={signin} />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '30%',
  },
  sentence: {
    fontSize: 24,
    fontWeight: '500',
    margin: 20,
    marginBottom: 10,
    alignSelf: 'center',
  },
  sentence2: {
    fontSize: 30,
    fontWeight: '500',
    margin: 20,
    marginBottom: 10,
    alignSelf: 'center',
  },
  textboxstyle: {
    fontSize: 18,
    fontWeight: '500',
  }
});
