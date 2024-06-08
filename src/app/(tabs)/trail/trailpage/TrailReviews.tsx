import Trails from '@/assets/testdata/trailList';
import Reviews from '@/assets/testdata/trailReview';
import TrailIndexTrail from '@/src/components/trail/TrailIndextrail';
import TrailReviewComp from '@/src/components/trail/TrailReviewComp';
import { useLocalSearchParams } from 'expo-router';
import { View, FlatList, Text } from 'react-native';


export default function TrailReviews() {
  const {trail_id} = useLocalSearchParams();
  const tid = typeof trail_id == 'string' ? Number(trail_id) : 0;
  //테스트
  const ReviewList = Reviews.filter(review => review.trail_id == tid);
  if(ReviewList.length == 0) {
    //리뷰없음
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize: 24,
        }}>리뷰가 존재하지 않습니다.</Text>
      </View>
    );
  }
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
    }}>
      <FlatList 
        style={{
          width: '95%',  
          marginHorizontal: 10,
          alignSelf: 'center',
        }}
        contentContainerStyle={{
        }}
        data={Reviews}
        renderItem={({ item }) => <TrailReviewComp review={item} />}
      />
    </View>
  );
}
