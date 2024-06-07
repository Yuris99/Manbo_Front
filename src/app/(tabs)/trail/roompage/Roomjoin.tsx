import RoomList from "@/assets/testdata/roomData";
import Trails from "@/assets/testdata/trailList";
import EditScreenInfo from "@/src/components/EditScreenInfo";
import { getusernamebyid } from "@/src/lib/serverlogin";
import { Room, Trail, User } from "@/src/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";


const WeekendKorean : string[] = ['일', '월', '화', '수', '목', '금', '토'];

//테스트용 데이터
const img = "https://austinactivekids.com/wp-content/uploads/2020/01/2FC59971-A3F5-4C07-BFF4-439E8D663D0E-1536x1536.jpg";


const JoinRoom = (item : Room) => {
  router.replace({pathname: '/trail/roompage/Roominfo', params: {roomid: item.id}});
}

const RoomJoinScreen = () => {
  const { roomid } = useLocalSearchParams();
  const [roomhost, setRoomhost] = useState("");
  //룸 가져오기
  const room = RoomList[Number(roomid)];
  const trail = Trails[room.trail_id];
  useFocusEffect(
    useCallback(() => {
      async() => {
        const hname = await getusernamebyid(room.host_id);
        console.log(hname);
        if(hname != null) {
          setRoomhost(hname);
        }
      };

    }, [])
  );
  //console.log(room);
  return (
    <View style={styles.container}>
      {/**이미지 */}
      <Image source={{uri: trail.trailImgs[0]}} style={styles.image} />
      <View style={styles.roomdata}>
        {/**모임제목 */}
        <View style={styles.titlebox}>
          <Text style={styles.hostinfo}>{roomhost}</Text>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{room.name}</Text>
        </View>
        {/**모임 설명 */}
        <Text style={styles.content} ellipsizeMode="tail" numberOfLines={11}>{room.content}</Text>
        {/**모임 정보 */}
        <View style={{width: '100%', alignItems: 'center',}}>
          {/*날짜 및 시간, 인원수*/}
          <View style={styles.roomtimedot} >
            {/*날짜 및 시간 아이콘 + text*/}
            <View style={styles.roomtime}>
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
            </View>
            {/*인원 아이콘 + 인원 현황*/}
            <View style={styles.roommem}>
              <MaterialCommunityIcons
                name="account-multiple"
                size={20}
                color={"black"}
              />
              <Text style={{
                marginLeft: 5,
              }}>
              {room.membercnt} / {room.maximum}
              </Text>
            </View>
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
              {trail.startloc}
              </Text>
          </View>
        </View>
        {/**모임 참여 버튼 */}
        <Pressable style={styles.joinbutton} onPress={()=>{JoinRoom(room)}}>
          <Text style={styles.joinbuttontext}>모임 참여!</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RoomJoinScreen;

const titlesize = Platform.OS == 'ios' ? 24 : 20;
const contentsize = Platform.OS == 'ios' ? 16 : 15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '35%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  roomdata: {
    width: '90%',
    height: '100%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  titlebox: {
    width: '95%',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '15%',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  hostinfo: {
    marginVertical: 5,
    fontSize: 15,
    color: '#777',
    textAlign: 'center',
    height: '20%',
  },
  title: {
    fontSize: titlesize,
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: '70%',
  },
  content: {
    width: '90%',
    padding: 20,
    alignItems: 'center',
    height: '35%',
    fontSize: contentsize,
  },
  roomtimedot: {
    paddingTop: 5,
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
  },
  roommem: {
    paddingTop: 5,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '40%',
  },
  roomtime: {
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  joinbutton: {
    width: '100%',
    height: '10%',
    backgroundColor: '#9BC34A',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  joinbuttontext: {
    fontSize: 30,
    color: 'white',

  },
});