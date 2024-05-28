import Trails from '@/assets/testdata/trailList';
import { useLocalSearchParams } from 'expo-router';
import { View, FlatList, Text } from 'react-native';


export default function TrailInfo() {
  const {id} = useLocalSearchParams();
  //산책로 정보 가져오기
  const trail = Trails[Number(id)];
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
    }}>
    </View>
  );
}
