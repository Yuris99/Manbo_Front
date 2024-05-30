import RoomList from '@/assets/testdata/roomData';
import Trails from '@/assets/testdata/trailList';
import LeftRoomComponent from '@/src/components/trail/LeftRoomComponent';
import TrailIndexRoom from '@/src/components/trail/TrailIndexroom';
import { Room } from '@/src/types';
import { Stack, useLocalSearchParams } from 'expo-router';
import { View, FlatList, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default function RoomScreen() {
  const {roomid} = useLocalSearchParams();
  //테스트-방정보
  const room = RoomList[Number(roomid)];
  const trail = Trails[room.trail_id];
  return (
    <View style={styles.container}>
      {/**헤더 수정 */}
      <Stack.Screen options={{
        title: room.name,
        headerLeft: () => (
          <Pressable onPress={()=>{}}>
            <LeftRoomComponent />
          </Pressable>
        )
      }} />
      {/** 이미지, 제목 */}
      <View style={styles.headwrapper}>
        <Image source={{uri: trail.trailImgs[0]}} style={styles.image} />
        <View style={styles.titlewrapper}>
          <Text style={styles.title}>{room.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headwrapper: {
    position: 'absolute',
    width: '100%',
    height: '35%',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    padding: 20,
  },
  titlewrapper: {
    alignSelf: 'center',
    backgroundColor: '#00000099',
    borderRadius: 30,
    justifyContent: 'center',
    margin: 'auto',
  },
})
