import { Text, View, FlatList, StyleSheet } from 'react-native';
import FreePost from '@/assets/testdata/freedata';
import CommunityIndexfree from '@/src/components/community/CommunityIndexfree';

export default function FreePage() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={FreePost}
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
