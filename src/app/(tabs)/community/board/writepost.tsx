import { View, FlatList, StyleSheet, TextInput, Pressable, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
export default function WritePost() {

  const write = async() => {

  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TextInput
        placeholder='제목'
        placeholderTextColor={"#aaa"}
        style={styles.inputtitle}
        multiline
        numberOfLines={1}
        blurOnSubmit={true}
        />
        <View style={styles.inputcontentview}>
          <TextInput
            placeholder='내용을 작성해 주세요.'
            placeholderTextColor={"#aaa"}
            style={styles.inputcontent}
            multiline />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
