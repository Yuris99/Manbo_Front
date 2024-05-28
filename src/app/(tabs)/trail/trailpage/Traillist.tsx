import Trails from '@/assets/testdata/trailList';
import TrailIndexTrail from '@/src/components/trail/TrailIndextrail';
import { View, FlatList } from 'react-native';


export default function TrailScreen() {
  return (
    <FlatList 
      data={Trails}
      renderItem={({ item }) => <TrailIndexTrail trail={ item } />}
    />
  );
}
