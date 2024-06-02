import Users from '@/assets/testdata/users';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, FlatList, StyleSheet, TextInput, Pressable, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default function CreateRoom() {
  return SetupProfile();
}

function SetupProfile() {
  const userdata = Users[0];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View 
      style={styles.container}>
      {/**이메일 입력 (수정 불가) */}
      <Text style={styles.textstyle}>Email</Text>
      <TextInput 
        placeholder={userdata.email}
        style={styles.inputTextBox} 
        editable={false}
        blurOnSubmit={true}
      />
      {/** 닉네임 */}
      <Text style={styles.textstyle}>닉네임</Text>
      <TextInput 
        value={userdata.username}
        style={styles.inputTextBox} 
        blurOnSubmit={true}
      />
    </View>
    </TouchableWithoutFeedback>
  );
};

const titlesize = Platform.OS == 'ios' ? 25 : 20;
const contentsize = Platform.OS == 'ios' ? 18 : 15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 30,
  },
  inputTextBox: {
    backgroundColor: 'white',
    width: '90%',
    borderBottomWidth: 1,
    borderColor: '#aaaaaa',
    color: 'black',
    borderRadius: 20,
    fontSize: titlesize,
    padding: 10,
    margin: 10,
    marginTop: 0,
    paddingHorizontal: 20,
    textAlignVertical: 'top',
  },
  textstyle: {
    fontSize: 18,
    color: '#aaa',
    textAlign: 'left',
    width: '90%',
    margin: 10,
    paddingHorizontal: 20,
    marginBottom: 0,
  },
  selectmaximum: {
    marginTop: 10,
    width: '90%',
    borderColor: '#aaaaaa',
    height: '6%',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  selectmaximumtext: {
    color: 'black',
    fontSize: titlesize,
    marginHorizontal: 10,
  },
  selectorview: {
    borderColor: '#aaaaaa',
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  selectorbox: {
    borderColor: '#aaaaaa',
    borderRadius: 12,
    borderWidth: 1,
    width: '50%',
    height: 40,
    padding: 10,
    textAlign: 'right',
    fontSize: contentsize,
  },
  inputcontent: {
    fontSize: contentsize,
    textAlignVertical: 'top',
  },
  inputcontentview: {
    backgroundColor: 'white',
    width: '90%',
    borderWidth: 1,
    borderColor: '#aaaaaa',
    borderRadius: 20,
    marginTop: 10,
    padding: 20,
    flex: 1,
  },
  inputtag: {
    backgroundColor: 'white',
    marginVertical: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#aaaaaa',
    borderRadius: 20,
    height: '7%',
    minHeight: '7%',
    padding: 10,
    paddingHorizontal: 20,
    fontSize: contentsize,
  },
});