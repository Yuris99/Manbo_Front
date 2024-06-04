import { Text, View, FlatList, StyleSheet } from 'react-native';
import AnnouncementPost from '@/assets/testdata/announcedata';
import CommunityIndexfree from '@/src/components/community/CommunityIndexfree';

export default function NoticeBoard() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={AnnouncementPost}
      renderItem={({item}) => <CommunityIndexfree post={item} />}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
