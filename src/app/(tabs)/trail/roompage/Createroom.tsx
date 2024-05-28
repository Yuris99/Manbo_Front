import RoomList from '@/assets/testdata/roomData';
import EditScreenInfo from '@/src/components/EditScreenInfo';
import TrailIndexRoom from '@/src/components/trail/TrailIndexroom';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, FlatList, StyleSheet, TextInput, Pressable, Text } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default function CreateRoom() {
  return (
    <View style={styles.container}>
      {/**제목 입력 */}
      <TextInput placeholder='제목' style={styles.inputtitle} multiline numberOfLines={2} blurOnSubmit={true}/>
      {/** 산책로 선택 */}
      <Pressable style={styles.selecttrail}>
        <Text style={styles.selecttrailtext}>산책로 선택</Text>
          <MaterialCommunityIcons 
              name="arrow-right" 
              color={"#000000"} 
              size={30}
          />
      </Pressable>
      {/** 최대 인원 */}
      <View style={styles.selectmaximum}>
        <Text style={styles.selectmaximumtext}>모집 인원: </Text>
        <View style={styles.selectorview}>
          <TextInput 
            placeholder='최대 8' 
            style={styles.selectorbox}
            keyboardType='numeric'
            blurOnSubmit />
          <Text style={styles.selectmaximumtext}>명</Text>
        </View>
      </View>
      {/** 내용 입력 */}
      <TextInput 
        placeholder='모임에 대한 설명을 자세하게 적어 주세요!' 
        style={styles.inputcontent} 
        multiline />
        {/** 태그 입력 */}
        <TextInput 
          placeholder='#숭실대생_환영' 
          style={styles.inputtag}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  inputtitle: {
    backgroundColor: 'white',
    marginTop: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#aaaaaa',
    borderRadius: 20,
    height: '15%',
    fontSize: 25,
    padding: 20,
    textAlignVertical: 'top',
  },
  selecttrail: {
    backgroundColor: 'white',
    marginTop: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#aaaaaa',
    borderRadius: 20,
    height: '7%',
    paddingHorizontal: 15,
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
    borderRadius: 20,
    height: '10%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  selectmaximumtext: {
    color: 'black',
    fontSize: 25,
    marginHorizontal: 10,
  },
  selectorview: {
    borderColor: '#aaaaaa',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  selectorbox: {
    borderColor: '#aaaaaa',
    borderRadius: 12,
    borderWidth: 1,
    width: '70%',
    padding: 10,
    textAlign: 'right',
    fontSize: 18,
  },
  inputcontent: {
    backgroundColor: 'white',
    marginTop: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#aaaaaa',
    borderRadius: 20,
    flex: 1,
    fontSize: 18,
    padding: 20,
    textAlignVertical: 'top',
  },
  inputtag: {
    backgroundColor: 'white',
    marginVertical: 10,
    width: '90%',
    borderWidth: 1,
    borderColor: '#aaaaaa',
    borderRadius: 20,
    height: '8%',
    padding: 10,
    fontSize: 18,
  },
});