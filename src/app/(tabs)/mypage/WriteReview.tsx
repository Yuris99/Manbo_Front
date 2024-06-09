import { Trail } from '@/src/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Pressable, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default function WriteReivew() {
  const {tid} = useLocalSearchParams();
  const [score, setScore] = useState(0);
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");

  const editReview = (sc: number) => {
    setScore(sc);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View 
      style={styles.container}>
      {/**별점 */}
      <View style={styles.starcon}>
        <Pressable style={styles.star} onPress={()=>{editReview(2)}}><MaterialCommunityIcons 
        name="star"
        size={52}
        color={score < 2 ? '#ddd' : 'gold'} /></Pressable>
        <Pressable style={styles.star} onPress={()=>{editReview(4)}}><MaterialCommunityIcons 
        name="star"
        size={52}
        color={score < 4 ? '#ddd' : 'gold'}  /></Pressable>
        <Pressable style={styles.star} onPress={()=>{editReview(6)}}><MaterialCommunityIcons 
        name="star"
        size={52}
        color={score < 6 ? '#ddd' : 'gold'}  /></Pressable>
        <Pressable style={styles.star} onPress={()=>{editReview(8)}}><MaterialCommunityIcons 
        name="star"
        size={52}
        color={score < 8 ? '#ddd' : 'gold'}  /></Pressable>
        <Pressable style={styles.star} onPress={()=>{editReview(10)}}><MaterialCommunityIcons 
        name="star"
        size={52}
        color={score < 10 ? '#ddd' : 'gold'}  /></Pressable>
      </View>
      {/** 내용 입력 */}
      <View style={styles.inputcontentview}>
        <TextInput 
          placeholder='산책로는 어떠셨나요? 리뷰를 남겨주세요!' 
          value={content}
          onChangeText={(text) => setContent(text)}
          style={styles.inputcontent} 
          placeholderTextColor={"#aaa"}
          multiline />
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}
const titlesize = Platform.OS == 'ios' ? 25 : 20;
const contentsize = Platform.OS == 'ios' ? 15 : 15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    borderWidth: 1,
  },
  starcon: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    width: '80%',
    flexDirection: 'row',
  },
  star: {
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
    height: '70%',
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