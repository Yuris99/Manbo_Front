import { StyleSheet, View, Text, Pressable, Platform, FlatList } from 'react-native';
import React from 'react';
import { Post } from '@/src/types';
import { router } from 'expo-router';

type PostProps = {
  post: Post;
};

const viewPost = (post_id: number) => {
  router.push(`/community/board/${post_id}`);
};

const CommunityIndexfree = ({ post }: PostProps) => {
  return (
    <Pressable onPress={() => { viewPost(post.id); }} style={styles.container}>
      <View style={styles.card}>
        <View style={styles.postInfo}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {post.title}
          </Text>
          <View style={styles.postDetails}>
            <Text style={[styles.detailText, {width: '100%',}]}>
              {post.created.getMonth() + 1}/{post.created.getDate()} {post.created.getHours() >= 12 ? '오후' : '오전'} {post.created.getHours() > 12 ? post.created.getHours() - 12 : (post.created.getHours() === 0 ? 12 : post.created.getHours())}:{post.created.getMinutes() < 10 ? '0' + post.created.getMinutes() : post.created.getMinutes()}
            </Text>
          </View>
          <View style={styles.postDetails}>
            <Text style={styles.detailText}>
              조회수 {post.view}
            </Text>
            <Text style={[styles.detailText, {marginLeft: 5,}]}>
              추천수 {post.like}
            </Text>
            <Text style={[styles.detailText, {marginLeft: 5,}]}>
              댓글수 {post.like}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const titlesize = Platform.OS === 'ios' ? 20 : 18;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  card: {
    width: '100%',
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  postInfo: {
    width: '100%',
  },
  title: {
    fontSize: titlesize,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  postDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    width: '100%',
  },
  detailText: {
    fontSize: 12,
    color: '#555',
  },
});

export default CommunityIndexfree;
