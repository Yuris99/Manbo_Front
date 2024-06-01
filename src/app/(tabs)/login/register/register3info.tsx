import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { Stack, router } from 'expo-router';
import SubmitButton from '@/src/components/login/SubmitButton';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { UserData } from '@/src/providers/UserProvider';

const genders: string[] = ['남자', '여자', '기타'];

const now = dayjs();

export default function registerPage3Info() {
  //getUserData in provider
  const {locate, setloc} = UserData();

  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState(' ');
  const [nameBorderColor, setnameBorderColor] = useState("#aaa");
  const [birthBorderColor, setBirthBorderColor] = useState("#aaa");

  const checkbirth = () => {
    if(!(dayjs(birth.substring(0,4)+'/'+birth.substring(7,9)+'/'+birth.substring(12,14), "YYYY/MM/DD").format("YYYY/MM/DD") === birth.substring(0,4)+'/'+birth.substring(7,9)+'/'+birth.substring(12,14))) return false;
    if((now.subtract(14, 'year')).diff(dayjs(birth.substring(0,4)+'/'+birth.substring(7,9)+'/'+birth.substring(12,14), "YYYY/MM/DD", 'date')) <= 0) return false;
    return true;
  };

  async function signin() {
    setLoading(true);
    if(name == '') {
      setErrorMessage("닉네임을 입력해주세요!");
      setnameBorderColor("#FF1744");
      setBirthBorderColor("#aaa");
    } else if(birth.length == 0) {
      setErrorMessage("생년월일을 입력해주세요!");
      setnameBorderColor("#aaa");
      setBirthBorderColor("#FF1744");
    } else if(birth.length != 14 || !checkbirth()) {
      setErrorMessage("생년월일을 정확히 입력해주세요!");
      setnameBorderColor("#aaa");
      setBirthBorderColor("#FF1744");
    } else if(gender == '' || gender == '기타') {
      setErrorMessage("성별을 선택해주세요!");
      setnameBorderColor("#aaa");
      setBirthBorderColor("#aaa");
    }
    else {
      //db접속 및 인증
      setErrorMessage(" ");
      setnameBorderColor("#aaa");
      setBirthBorderColor("#aaa");
      await setloc(0, '도/특별시/광역시');
      await setloc(1, '시/군/구');
      await setloc(2, '읍/면/동');
      console.log(locate);
      router.push("/login/register/register4gps");

    }
    setLoading(false);
  }

  const inputbirth = (text: string) => {
    
    if(text.length == 4 || text.length == 9) setBirth(text+' / ');
    else if(text.length == 5 || text.length == 6) setBirth(text.substring(0, 3));
    else if(text.length == 10 || text.length == 11) setBirth(text.substring(0, 8));
    else setBirth(text);
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
        name={"card-account-details-outline"}
        color={"#aaa"}
        size={60}
        style={styles.icon}
      />
      <Text style={styles.sentence}>기본 정보를 입력해주세요</Text>
      <View style={styles.buttonwrapper}>
          <TextInput style={[styles.textinputstyle, {borderColor: nameBorderColor}]}
          value={name}
          onChangeText={setName}
          textContentType='name'
          placeholder="닉네임"
          />
          <TextInput style={[styles.textinputstyle, {borderColor: birthBorderColor}]}
          value={birth}
          onChangeText={birth => inputbirth(birth)}
          textContentType='birthdate'
          inputMode='numeric'
          placeholder="생년월일 (YYYY/MM/DD)"
          selection={{start: birth.length, end: birth.length}}
          selectTextOnFocus={false}
          maxLength={14}
          caretHidden={true}
          />
          <View style={styles.genderselector}>
            {genders.map((gend) => (
              <Pressable onPress={() => { setGender(gend); }} style={gender == gend ? styles.genderbox_s : styles.genderbox} key={gend}>
              <Text style={gender == gend ? styles.gendertext_s : styles.gendertext}>{gend}</Text></Pressable>            
            ))}
          </View>
          
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
  genderselector: {
    width: '90%',
    marginTop: 10,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  genderbox: {
    width: '32%',
    height: '100%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: "#aaa",
  },
  gendertext: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: "#aaa",
  },
  genderbox_s: {
    width: '32%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#C8E6C9',
  },
  gendertext_s: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
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
