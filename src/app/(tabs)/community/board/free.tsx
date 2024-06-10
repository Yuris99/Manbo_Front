import { Text, View, FlatList, StyleSheet } from 'react-native';
import FreePost from '@/assets/testdata/freedata';
import CommunityIndexfree from '@/src/components/community/CommunityIndexfree';
import { Post } from '@/src/types';
import { useEffect, useState } from 'react';
import { freeObjToTypeList, getAllFreeList } from '@/src/lib/CommunityDB';

export default function FreePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
      const fetchData = async() => {
        setPosts(await freeObjToTypeList(await getAllFreeList()));
        console.log(posts);
      };
      fetchData();
}, []);
  return (
    <View style={styles.container}>
      <FlatList 
      data={posts}
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
    backgroundColor: 'white',
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
