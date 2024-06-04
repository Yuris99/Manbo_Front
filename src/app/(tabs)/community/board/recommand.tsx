import { View,Text,FlatList, StyleSheet } from 'react-native';
import RecommandPost from '@/assets/testdata/recommanddata';
import CommunityIndexfree from '@/src/components/community/CommunityIndexfree';

export default function RecommandBoard() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={RecommandPost}
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
