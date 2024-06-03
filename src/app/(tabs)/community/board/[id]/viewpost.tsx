import { View, Text, FlatList, Image, Pressable, StyleSheet } from 'react-native';
import FreePost from '@assets/testdata/freedata';
import { Post } from '@/src/types'
import { Stack, useLocalSearchParams } from 'expo-router';


export default function NoticeBoard() {
  const {user_id} = useLocalSearchParams();
  const post = FreePost[Number(user_id)];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
     <View style={styles.userContainer}> 
        <Text style={styles.username}>{post.user_id}</Text>
        <Text style={styles.userinfo}>{post.created.getMonth()+1}/{post.created.getDate()} {post.created.getHours() >=12 ? '오후' : '오전'} {post.created.getHours() > 12 ? post.created.getHours()-12 :(post.created.getHours() == 0 ? 12 : post.created.getHours())}:{post.created.getMinutes() < 10 ?'0'+post.created.getMinutes() : post.created.getMinutes()  }</Text>
        <Text style={styles.userinfo}>{post.view}  {post.like}</Text>
      </View>
      <View style={styles.userContent}>
        <Text style={styles.content}>{post.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userContainer: {
   flex:1,
   alignItems: 'center'
  },
  userContent: {
    flex:1,
    alignItems:'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  userinfo: {
    fontSize: 10,
  },
  content: {
    fontSize:15,
    fontWeight: 'bold'
  }
});
