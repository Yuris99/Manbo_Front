import { Trail } from '@/src/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Pressable, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import * as ImagePicker from 'expo-image-picker';

export default function WriteRecommand() {
  return CreateRoomIOS();
}

function CreateRoomIOS() {
  const [title, setTitle] = useState("");
  const [trail, setTrail] = useState<Trail | null>(null);
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");  
  const [image, setImage] = useState(null);

  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const ImageViewOrNot = () => {
    if(image == null) {
      return (

        <Pressable style={styles.selecttrail} onPress={()=>{pickImage()}}>
        <Text style={styles.selecttrailtext}>사진 선택</Text>
          <MaterialCommunityIcons 
              name="arrow-right" 
              color={"#000000"} 
              size={30}
          />
      </Pressable>
      )
    } else {
          
        return (<Pressable style={styles.selectimage} onPress={()=>{pickImage()}}>
          <Image source={{uri: image}}
          style={styles.image}
          />
      </Pressable>)
    }
  }

  
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
      {/** 이미지 선택 */}
      <ImageViewOrNot />
      {/** 내용 입력 */}
      <View style={styles.inputcontentview}>
        <TextInput 
          placeholder='산책로에 대한 설명을 자세하게 적어 주세요!' 
          value={content}
          onChangeText={(text) => setContent(text)}
          style={styles.inputcontent} 
          placeholderTextColor={"#aaa"}
          multiline />
      </View>
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
    borderWidth: 1,
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
  image: {
    height: '100%',
    aspectRatio: 1,
  },
  selectimage: {
    backgroundColor: 'white',
    marginTop: 10,
    borderColor: '#aaaaaa',
    height: '20%',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 30,
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