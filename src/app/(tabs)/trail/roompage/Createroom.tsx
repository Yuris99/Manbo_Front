import { Trail } from '@/src/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Pressable, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default function CreateRoom() {
  return Platform.OS == 'ios' ? CreateRoomIOS() : CreateRoomAndroid();
}

function CreateRoomIOS() {
  const [title, setTitle] = useState("");
  const [trail, setTrail] = useState<Trail | null>(null);
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [numofmember, setNumofmember] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View 
      style={styles.container}>
      {/**제목 입력 */}
      <TextInput 
        placeholder='제목' 
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.inputtitle} 
        numberOfLines={1} 
        placeholderTextColor={"#aaa"}
        blurOnSubmit={true}
      />
      {/** 산책로 선택 */}
      <Pressable style={styles.selecttrail}>
        <Text style={styles.selecttrailtext}>산책로 선택</Text>
          <MaterialCommunityIcons 
              name="arrow-right" 
              color={"#000000"} 
              size={30}
          />
      </Pressable>
      {/**시간 */}
      <View style={styles.selectmaximum}>
        <View style={styles.timeview}>
          <TextInput 
            placeholder='06' 
            value={month}
            onChangeText={(text) => setMonth(text)}
            style={styles.timebox}
            keyboardType='numeric'
            placeholderTextColor={"#aaa"}
            scrollEnabled={false}
            blurOnSubmit />
          <Text style={styles.selectmaximumtext}>월</Text>
          <TextInput 
            placeholder='30' 
            value={date}
            onChangeText={(text) => setDate(text)}
            style={styles.timebox}
            keyboardType='numeric'
            placeholderTextColor={"#aaa"}
            scrollEnabled={false}
            blurOnSubmit />
          <Text style={styles.selectmaximumtext}>일</Text>
          <TextInput 
            placeholder='12' 
            value={hour}
            onChangeText={(text) => setHour(text)}
            style={styles.timebox}
            keyboardType='numeric'
            placeholderTextColor={"#aaa"}
            scrollEnabled={false}
            blurOnSubmit />
          <Text style={styles.selectmaximumtext}>시</Text>
          <TextInput 
            placeholder='00' 
            value={minute}
            onChangeText={(text) => setMinute(text)}
            style={styles.timebox}
            keyboardType='numeric'
            placeholderTextColor={"#aaa"}
            scrollEnabled={false}
            blurOnSubmit />
          <Text style={styles.selectmaximumtext}>분</Text>
        </View>
      </View>
      {/** 최대 인원 */}
      <View style={styles.selectmaximum}>
        <Text style={styles.selectmaximumtext}>모임 인원: </Text>
        <View style={styles.selectorview}>
          <TextInput 
            placeholder='최대 8' 
            value={numofmember}
            onChangeText={(text) => setNumofmember(text)}
            style={styles.selectorbox}
            keyboardType='numeric'
            placeholderTextColor={"#aaa"}
            scrollEnabled={false}
            blurOnSubmit />
          <Text style={styles.selectmaximumtext}>명</Text>
        </View>
      </View>
      {/** 내용 입력 */}
      <View style={styles.inputcontentview}>
        <TextInput 
          placeholder='모임에 대한 설명을 자세하게 적어 주세요!' 
          value={content}
          onChangeText={(text) => setContent(text)}
          style={styles.inputcontent} 
          placeholderTextColor={"#aaa"}
          multiline />
      </View>
      {/** 태그 입력 */}
      <KeyboardAvoidingView
        behavior='padding'
        keyboardVerticalOffset={120}
        style={{width: "100%", alignItems: 'center'}}
      >
      <TextInput 
        placeholder='#숭실대생_환영' 
        value={tag}
        onChangeText={(text) => setTag(text)}
        placeholderTextColor={"#aaa"}
        style={styles.inputtag}  />
      </KeyboardAvoidingView>
    </View>
    </TouchableWithoutFeedback>
  );
};
function CreateRoomAndroid() {
  const [title, setTitle] = useState("");
  const [trail, setTrail] = useState<Trail | null>(null);
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [numofmember, setNumofmember] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View 
      style={styles.container}>
      {/**제목 입력 */}
      <TextInput 
        placeholder='제목' 
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.inputtitle} 
        numberOfLines={1}               
        blurOnSubmit={true}
      />
      {/** 산책로 선택 */}
      <Pressable style={styles.selecttrail}>
        <Text style={styles.selecttrailtext}>{trail == null ? "산책로 선택" : trail.name}</Text>
          <MaterialCommunityIcons 
              name="arrow-right" 
              color={"#000000"} 
              size={30}
          />
      </Pressable>
      {/**시간 */}
      <View style={styles.selectmaximum}>
        <View style={styles.timeview}>
          <TextInput 
            placeholder='06' 
            value={month}
            onChangeText={(text) => setMonth(text)}
            style={styles.timebox}
            keyboardType='numeric'
            scrollEnabled={false}
            blurOnSubmit />
          <Text style={styles.selectmaximumtext}>월</Text>
          <TextInput 
            placeholder='30' 
            value={date}
            onChangeText={(text) => setDate(text)}
            style={styles.timebox}
            keyboardType='numeric'
            scrollEnabled={false}
            blurOnSubmit />
          <Text style={styles.selectmaximumtext}>일</Text>
          <TextInput 
            placeholder='12' 
            value={hour}
            onChangeText={(text) => setHour(text)}
            style={styles.timebox}
            keyboardType='numeric'
            scrollEnabled={false}
            blurOnSubmit />
          <Text style={styles.selectmaximumtext}>시</Text>
          <TextInput 
            placeholder='00' 
            value={minute}
            onChangeText={(text) => setMinute(text)}
            style={styles.timebox}
            keyboardType='numeric'
            scrollEnabled={false}
            blurOnSubmit />
          <Text style={styles.selectmaximumtext}>분</Text>
        </View>
      </View>
      {/** 최대 인원 */}
      <View style={styles.selectmaximum}>
        <Text style={styles.selectmaximumtext}>모임 인원: </Text>
        <View style={styles.selectorview}>
          <TextInput 
            placeholder='최대 8' 
            value={numofmember}
            onChangeText={(text) => setNumofmember(text)}
            style={styles.selectorbox}
            keyboardType='numeric'
            scrollEnabled={false}
            blurOnSubmit />
          <Text style={styles.selectmaximumtext}>명</Text>
        </View>
      </View>
      {/** 내용 입력 */}
      <View style={styles.inputcontentview}>
        <TextInput 
          placeholder='모임에 대한 설명을 자세하게 적어 주세요!' 
          value={content}
          onChangeText={(text) => setContent(text)}
          style={styles.inputcontent} 
          multiline />
      </View>
      {/** 태그 입력 */}
      <KeyboardAvoidingView
        behavior='padding'
        keyboardVerticalOffset={100}
        style={{width: "100%", alignItems: 'center'}}
      >
      <TextInput 
        placeholder='#숭실대생_환영' 
        value={tag}
        onChangeText={(text) => setTag(text)}
        style={styles.inputtag}  />
      </KeyboardAvoidingView>
    </View>
    </TouchableWithoutFeedback>
  );
};

const titlesize = Platform.OS == 'ios' ? 25 : 20;
const contentsize = Platform.OS == 'ios' ? 15 : 15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  inputtitle: {
    backgroundColor: 'white',
    marginTop: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#aaaaaa',
    borderRadius: 20,
    height: '10%',
    fontSize: titlesize,
    padding: 20,
    textAlignVertical: 'top',
    minHeight: '10%',
  },
  selecttrail: {
    backgroundColor: 'white',
    marginTop: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#aaaaaa',
    borderRadius: 20,
    height: '7%',
    minHeight: '7%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  selecttrailtext: {
    color: '#aaaaaa',
    fontSize: 20,
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
  timeview: {
    borderColor: '#aaaaaa',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
  timebox: {
    borderColor: '#aaaaaa',
    borderRadius: 12,
    borderWidth: 1,
    width: '12%',
    height: 40,
    padding: 10,
    textAlign: 'center',
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