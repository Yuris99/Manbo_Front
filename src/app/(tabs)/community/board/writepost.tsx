import AssignWriteComponent from '@/src/components/community/AssignWriteComponent';
import { writeFreeData } from '@/src/lib/CommunityDB';
import { UserData } from '@/src/providers/UserProvider';
import { Stack, router } from 'expo-router';
import { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput, Pressable, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
export default function WritePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {user} = UserData();

  const write = async() => {
    if(await writeFreeData(user.email, title, content)) {
      router.back();
    } else {
      console.log("not upload");
    }
  };

  return (
    <View style={{width:'100%', height:'100%'}}>
    <Stack.Screen options={{
    headerRight: () => (
      <Pressable onPress={()=>{write();}}>
        <AssignWriteComponent />
      </Pressable>
    ),
    }}/>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TextInput
        placeholder='제목'
        placeholderTextColor={"#aaa"}
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.inputtitle}
        multiline
        numberOfLines={1}
        blurOnSubmit={true}
        />
        <View style={styles.inputcontentview}>
          <TextInput
            placeholder='내용을 작성해 주세요.'
            value={content}
            onChangeText={(text) => setContent(text)}
            placeholderTextColor={"#aaa"}
            style={styles.inputcontent}
            multiline />
        </View>
      </View>
    </TouchableWithoutFeedback>
    </View>
  );
}

const titlesize = Platform.OS == 'ios' ? 24 : 18;
const contentsize = Platform.OS == 'ios' ? 18 : 15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  infotext: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    fontSize: 24,
  },
  inputtitle: {
    backgroundColor: 'white',
    width: '90%',
    borderWidth: 1,
    borderColor: '#aaaaaa',
    borderRadius: 20,
    height: 70,
    fontSize: titlesize,
    padding: 20,
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
  inputcontent: {
    fontSize: contentsize,
    textAlignVertical: 'top',
  },
});
