import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { Room } from '@/src/types';
import { Link } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Trails from '@/assets/testdata/trailList';

type Roomdata = {
  room: Room | null;
}
//테스트용 데이터
const img = "https://austinactivekids.com/wp-content/uploads/2020/01/2FC59971-A3F5-4C07-BFF4-439E8D663D0E-1536x1536.jpg";
const startloc = Trails[0].startloc;

const WeekendKorean : string[] = ['일', '월', '화', '수', '목', '금', '토'];

const TrailTag = () => {
  return (
    <View style={{
      color: '#aaaaaa',
      backgroundColor: '#ffffff',
      alignSelf: 'flex-start',
      height: 20,
      justifyContent: 'center',
      paddingHorizontal: 10,
      borderRadius: 100,
      
    }}><Text style={{fontSize: 10}}>키워드</Text></View>
  );
};


const TrailIndexRoom = ({room} : Roomdata) => {
  //방이 없을 때
  if(room == null) {
    return (
      <Link href={`@app/trail/roompage/createRoom`} asChild>
        <Pressable style={styles.container}>
          <View style={[styles.viewunable]}>
            <Text style={{fontSize: 30, color: '#333333'}}>모집중인 모임이 없어요!</Text>
            <Text style={{fontSize: 20, color: '#666666', marginTop: 20,}}>만들러 가기 >></Text>
          </View>
        </Pressable>
      </Link>
    );
  }
  return (
    <Link href={`@app/trail/roompage/room/${room.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.views}>
          {/*모임 사진 + 마스크 */}
          <MaskedView style={styles.viewmask} maskElement={
            <View style={{
              backgroundColor: 'black',
              borderRadius: 32,
              flex: 1,
            }}>
            </View>
          }>
            <Image source={{uri: img}} style={styles.image} />
          </MaskedView>
          {/*모임 설명 */}
          <View style={styles.roominfo}>
            {/*모임 태그 (flatlist로 스크롤러블 예정) */}
            <TrailTag></TrailTag>
            {/*모임 이름, 길때처리? */}
            <Text style={styles.title}>{room.name}</Text>
            {/*날짜 및 시간, 인원수*/}
            <View style={styles.roomtimedot}>
              {/*날짜 및 시간 아이콘 + text*/}
              <MaterialCommunityIcons
                name="clock-outline"
                size={20}
                color={"#F4A460"}
              />
              <Text style={{
                marginLeft: 5,
                marginRight: 15,
              }}>
                {room.meettime.getMonth()+1}/{room.meettime.getDate()}({WeekendKorean[room.meettime.getDay()]})  {room.meettime.getHours() >= 12 ? '오후' : '오전'} {room.meettime.getHours() > 12 ? room.meettime.getHours()-12 :(room.meettime.getHours() == 0 ? 12 : room.meettime.getHours())}:{room.meettime.getMinutes() < 10 ?'0'+room.meettime.getMinutes() : room.meettime.getMinutes()  }
                </Text>
              {/*인원 아이콘 + 인원 현황*/}
              <MaterialCommunityIcons
                name="account-multiple"
                size={20}
                color={"#ffffff"}
              />
              <Text style={{
                marginLeft: 5,
              }}>
                {room.membercnt} / {room.maximum}
                </Text>
            </View>
            {/*모임장소*/}
            <View style={styles.roomtimedot}>
              {/*모임장소 아이콘 + 장소string*/}
              <MaterialCommunityIcons
                name="shoe-print"
                size={20}
                color={"#9BC34A"}
              />
              <Text style={{
                marginLeft: 5,
                marginRight: 15,
              }}>
                {startloc}
                </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default TrailIndexRoom;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  viewunable: {
    width: '100%',
    height: 120,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: '#aaaaaa',
    borderStyle: 'dotted',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingVertical: 15,
  },
  views: {
    width: '100%',
    height: 120,
    borderRadius: 32,
    backgroundColor: '#dddddd',
  },
  viewmask: {
    width: '100%',
    height: 120,
    borderRadius: 32,
    backgroundColor: '#dddddd',
    position: 'absolute',
  },
  image: {
    width: '32%',
    height: '100%',
    padding: 0,
  },
  roominfo: {
    flexDirection: 'column',
    left: '32%',
    margin: 10,
    marginHorizontal: 15,

  },
  title: {
    paddingTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  roomtimedot: {
    paddingTop: 5,
    flexDirection: 'row',
  }
});


