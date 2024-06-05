import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FreePost from '@assets/testdata/freedata';
import { useLocalSearchParams } from 'expo-router';

export default function NoticeBoard() {
  const { postid } = useLocalSearchParams();
  const post = postid === undefined ? FreePost[0] : FreePost[Number(postid)];
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.userContainer}>
        <Text style={styles.username}>{post.user_id}</Text>
        <Text style={styles.userinfo}>
          {post.created.getMonth() + 1}/{post.created.getDate()} {post.created.getHours() >= 12 ? '오후' : '오전'} {post.created.getHours() > 12 ? post.created.getHours() - 12 : (post.created.getHours() === 0 ? 12 : post.created.getHours())}:{post.created.getMinutes() < 10 ? '0' + post.created.getMinutes() : post.created.getMinutes()}
        </Text>
        <Text style={styles.userinfo}>조회수: {post.view} | 좋아요: {post.like}</Text>
      </View>
      <View style={styles.userContent}>
        <Text style={styles.content}>{post.content}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  userContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  userContent: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  userinfo: {
    fontSize: 12,
    color: '#777',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

