import Trails from '@/assets/testdata/trailList';
import TrailIndexTrail from '@/src/components/trail/TrailIndextrail';
import { View, FlatList } from 'react-native';


export default function TrailScreen() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
    }}>
      <FlatList 
        style={{
          width: '95%',  
          alignSelf: 'center',
          marginHorizontal: 10,
        }}
        data={Trails}
        renderItem={({ item }) => <TrailIndexTrail trail={ item } look={0} />}
        numColumns={2}
        columnWrapperStyle={{ 
          gap: 10,
        }}
      />
    </View>
  );
}
