import Trails from '@/assets/testdata/trailList';
import TrailListTrail from '@/src/components/trail/Traillisttrail';
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
          margin: 10,
        }}
        contentContainerStyle={{
          gap: 10,
        }}
        data={Trails}
        renderItem={({ item }) => <TrailListTrail trail={ item } />}
        numColumns={2}
        columnWrapperStyle={{ 
          gap: 10,
        }}
      />
    </View>
  );
}
