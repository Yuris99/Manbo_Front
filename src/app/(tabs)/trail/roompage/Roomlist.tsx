import RoomList from '@/assets/testdata/roomData';
import TrailIndexRoom from '@/src/components/trail/TrailIndexroom';
import { Room } from '@/src/types';
import { View, FlatList } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default function RoomScreen() {
  return (
    <FlatList 
      data={RoomList}
      renderItem={({ item }) => <TrailIndexRoom room={ item } />}
    />
  );
}
