import { Image, Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { Link, Stack } from 'expo-router';
import SubmitButton from '@/src/components/login/SubmitButton';

export default function FirstLoginPage() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        headerShown: false,
      }}/>
      <View style={styles.imagecontainer}>
        <Image 
          source={require('@assets/images/LOGO.png')} 
          style={styles.image}
          resizeMode='contain'  
        />
        <Text style={styles.sentence}>만남과 걸음의 보람</Text>
      </View>
      <View style={styles.buttonwrapper}>
        <Link href="/login/register/registerMain" style={{width: '100%'}} asChild>
        <SubmitButton text="시작하기" />
        </Link>
        <Link href="/login/loginpage" style={{width: '100%'}} asChild>
          <SubmitButton text="로그인" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '50%',
    height: '50%',
  },
  sentence: {
    fontSize: 30,
    marginTop: 50,
    fontWeight: 'bold',
    letterSpacing: 8, 
  },
  imagecontainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  buttonwrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
