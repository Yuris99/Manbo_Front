import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet, Pressable, ScrollView, Alert } from 'react-native';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import RoomList from '@/assets/testdata/roomData';
import Trails from '@/assets/testdata/trailList';
import StartTrailButton from '@/src/components/trail/CreateRoomComponent copy';
import LeftRoomComponent from '@/src/components/trail/LeftRoomComponent';
import TrailIndexRoom from '@/src/components/trail/TrailIndexroom';
import { Room } from '@/src/types';

const now = dayjs();

type TimeLeft = {
  total: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function RoomScreen() {
  //const {roomid} = useLocalSearchParams();
  //테스트-방정보
  const room = RoomList[1];
  const trail = Trails[room.trail_id];
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(new Date(room.meettime)));
  const [isTimeUp, setIsTimeUp] = useState(false);

  const showExitConfirmation = () => {
    Alert.alert(
      "모임 나가기",
      "정말 나가시겠습니까?",
      [
        {
          text: "취소",
          style: "cancel"
        },
        {
          text: "확인",
          onPress: () => router.back()
        }
      ],
      { cancelable: false }
    );
  };
  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(new Date(room.meettime));
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.total <= 0) {
        clearInterval(timer);
        setIsTimeUp(true); // 타이머가 완료되면 상태 업데이트
      } else {
        setIsTimeUp(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [room.meettime]);

  function calculateTimeLeft(target: Date): TimeLeft {
    const now = new Date().getTime();
    const difference = target.getTime() - now;

    return {
      total: difference,
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <View style={styles.container}>
      {/**헤더 수정 */}
      <Stack.Screen options={{
        title: room.name,
        headerLeft: () => (
          <Pressable onPress={showExitConfirmation}>
            <LeftRoomComponent />
          </Pressable>
        )
      }} />
      <ScrollView style={styles.scrollContainer}>
        {/** 이미지, 제목 */}
        <View style={styles.headwrapper}>
          <Image source={{uri: trail.trailImg}} style={styles.image} />
        </View>
        <View style={styles.titlewrapper}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail' adjustsFontSizeToFit>{room.name}</Text>
        </View>
        {/**산책로 확인 */}
        <Pressable style={styles.gotrail} onPress={() => {router.push({pathname: `/trail/trailpage/${trail.id}`})}}>
          <Text style={styles.gotrailtext}>산책로 확인하기</Text>
          <MaterialCommunityIcons 
              name="arrow-right" 
              color={"#000000"} 
              size={30}
          />
        </Pressable>
        {/**모임 설명 */}
        <View style={styles.userContent}>
          <Text style={styles.content}>{room.content}</Text>
        </View>
        {/**참가자 목록 */}
        <View style={styles.joinedInfo}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="account-multiple"
              size={32}
            />
            <Text style={{fontSize: 18}}>참가자</Text>
          </View>
          <Text style={{fontSize: 18}}>2 / 8</Text>
        </View>
        {/**여기 리스트 구현 */}
      </ScrollView>
      {/**남은 시간 or 버튼*/}
      <View style={styles.bottomButton}>
        {isTimeUp ? gotrail(trail.id) : leasttime(timeLeft)}
      </View>
    </View>
  );
};

function leasttime(time: TimeLeft) {
  return (
    <View style={styles.timer}>
      <MaterialCommunityIcons
        name="timer-outline"
        size={32}
      />
      <Text style={styles.timerText}>모임 시작까지 {time.hours.toString().padStart(2, '0')}:
            {time.minutes.toString().padStart(2, '0')}:
            {time.seconds.toString().padStart(2, '0')}</Text>
    </View>
  );
};

function gotrail(tid: number) {
  return (
    <StartTrailButton />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContainer: {
    width: '100%',
    height: '90%',
    backgroundColor: 'white',
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
    width: '100%',
    height: 200,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    padding: 20,
  },
  titlewrapper: {
    alignSelf: 'center',
    backgroundColor: '#ffffffee',
    marginTop: -50,
    width: '90%',
    height: 100,
    borderRadius: 30,
    justifyContent: 'center',
    margin: 'auto',
  },
  bottomButton: {
    height: '10%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  gotrail: {
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#aaa',
    height: 50,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  gotrailtext: {
    fontSize: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  userContent: {
    margin: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    paddingHorizontal: 20,
  },
  joinedInfo: {
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timer: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#aaa',
    width: '95%',
    height: 50,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  timerText: {
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
  }
});