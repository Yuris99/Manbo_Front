import Trails from '@/assets/testdata/trailList';
import TrailHistoryComp from '@/src/components/trail/TrailHistoryComp';
import TrailIndexTrail from '@/src/components/trail/TrailIndextrail';
import { View, FlatList } from 'react-native';


export default function HistoryPage() {
  return (
    <FlatList
      data={Trails}
      style={{
        backgroundColor: 'white',
      }}
      renderItem={({item}) => (
        <TrailHistoryComp trail={item} />
      )}
    />
  );
}
