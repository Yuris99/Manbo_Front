import { View, FlatList, StyleSheet, TextInput, Pressable, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
export default function NoticeBoard() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TextInput
        placeholder='제목을 입력하세요'
        style={styles.inputtitle}
        multiline
        numberOfLines={2}
        blurOnSubmit={true}
        />
        <Text>
          제목은 3글자 이상 작성하여주세요.
        </Text>
        <View style={styles.inputcontentview}>
          <TextInput
            placeholder='커뮤니티 이용규칙을 준수하여 작성하여주세요'
            style={styles.inputcontent}
            multiline />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const titlesize = Platform.OS == 'ios' ? 25 : 20;
const contentsize = Platform.OS == 'ios' ? 18 : 15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputtitle: {
    backgroundColor: 'white',
    marginTop: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#aaaaaa',
    borderRadius: 20,
    height: '15%',
    fontSize: titlesize,
    padding: 20,
    textAlignVertical: 'top',
    minHeight: '10%',
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
