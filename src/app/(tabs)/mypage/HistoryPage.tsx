import Trails from '@/assets/testdata/trailList';
import TrailHistoryComp from '@/src/components/trail/TrailHistoryComp';
import TrailIndexTrail from '@/src/components/trail/TrailIndextrail';
import { getTrailListByMid, trailObjToTypeList } from '@/src/lib/TrailDB';
import { UserData } from '@/src/providers/UserProvider';
import { Trail } from '@/src/types';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, FlatList, Text, Pressable } from 'react-native';


export default function HistoryPage() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const {user} = UserData();
  useEffect(() => {
      const fetchData = async() => {
        setTrails(await trailObjToTypeList(await getTrailListByMid(user.email)));
        console.log(trails);
      };
      fetchData();
}, []);
  if(trails.length == 0) {
    return (
      <View style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 50,
      }}>
      <Text style={{
        fontSize: 32,
        textAlign:'center',
      }}>{"산책 기록이\n존재하지 않습니다"}</Text>
      <Pressable onPress={()=>{router.push({pathname: '/mypage/WriteReview', params: {tid: 0}})}}>
        <Text style={{
          fontSize: 32,
          textAlign:'center',
        }}>{"터치"}</Text>
        </Pressable>
      </View>
    )
  }
  return (
    <FlatList
      data={trails}
      style={{
        backgroundColor: 'white',
      }}
      renderItem={({item}) => (
        <TrailHistoryComp trail={item} />
      )}
    />
  );
}
