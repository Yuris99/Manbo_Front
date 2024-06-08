import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, Dimensions, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import FreePost from '@assets/testdata/freedata';
import { Stack, useLocalSearchParams } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function postView() {
  const { postid, posttype } = useLocalSearchParams();
  console.log(posttype);
  return posttype == 'free' ? postFree(Number(postid)) : (posttype == 'recommand' ? postrec(Number(postid)) : postnotice(Number(postid)));
}
function postFree(postid: number) {
  const post = postid === undefined ? FreePost[0] : FreePost[postid];
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS==='ios' ? 'padding' : 'height'}

      keyboardVerticalOffset={Platform.OS == 'ios' ? 110 : 50}
      style={{flexGrow: 1,}}
      >
    <ScrollView contentContainerStyle={styles.container}
      style={styles.freeScroll}
    >
      <Stack.Screen 
        options={{
          title: '자유게시판'
        }}
      />
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.userContainer}>
        <Text style={styles.username}>{post.user_id}</Text>
        <Text style={styles.userinfo}>
          {post.created.getMonth() + 1}/{post.created.getDate()} {post.created.getHours() >= 12 ? '오후' : '오전'} {post.created.getHours() > 12 ? post.created.getHours() - 12 : (post.created.getHours() === 0 ? 12 : post.created.getHours())}:{post.created.getMinutes() < 10 ? '0' + post.created.getMinutes() : post.created.getMinutes()}
        </Text>
        <Text style={styles.userinfo}>조회수: {post.view}</Text>
      </View>
      <View style={styles.userContent}>
        <Text style={styles.content}>{post.content}</Text>
      </View>
      {/**like */}
      <Pressable style={styles.likeView}>
        <MaterialCommunityIcons
          name="thumb-up"
          size={32}
          color={'#aaa'}
        />
        <Text style={styles.liketext}>{post.like}</Text>
      </Pressable>
      {/**Commends */}
      <View style={styles.commandView}>
        <Text style={styles.commandText}>댓글</Text>
        <Text style={styles.commandnum}>32</Text>
      </View>
    </ScrollView>
    {/**댓글창 */}
    <View style={styles.wcmdview}>
      <TextInput
        style={styles.wcmdinput}
        placeholder='댓글을 입력하세요.'
        placeholderTextColor={"#aaa"}
      />
      <MaterialCommunityIcons
        name="send"
        size={25}
        color="#85D483"
      />

    </View>
    </KeyboardAvoidingView>
  );
}
function postnotice(postid: number) {
  const post = postid === undefined ? FreePost[0] : FreePost[postid];
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Stack.Screen 
      options={{
        title: '공지사항'
      }}
    />
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.userContainer}>
        <Text style={styles.username}>{post.user_id}</Text>
        <Text style={styles.userinfo}>
          {post.created.getMonth() + 1}/{post.created.getDate()} {post.created.getHours() >= 12 ? '오후' : '오전'} {post.created.getHours() > 12 ? post.created.getHours() - 12 : (post.created.getHours() === 0 ? 12 : post.created.getHours())}:{post.created.getMinutes() < 10 ? '0' + post.created.getMinutes() : post.created.getMinutes()}
        </Text>
        <Text style={styles.userinfo}>조회수: {post.view}</Text>
      </View>
      <View style={styles.userContent}>
        <Text style={styles.content}>{post.content}</Text>
      </View>
      {/**like */}
      <Pressable style={styles.likeView}>
        <MaterialCommunityIcons
          name="thumb-up"
          size={32}
          color={'#aaa'}
        />
        <Text style={styles.liketext}>{post.like}</Text>
      </Pressable>
    </ScrollView>
  );
}
function postrec(postid: number) {
  const post = postid === undefined ? FreePost[0] : FreePost[postid];
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Stack.Screen 
      options={{
        title: '추천게시판'
      }}
    />
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.userContainer}>
        <Text style={styles.username}>{post.user_id}</Text>
        <Text style={styles.userinfo}>
          {post.created.getMonth() + 1}/{post.created.getDate()} {post.created.getHours() >= 12 ? '오후' : '오전'} {post.created.getHours() > 12 ? post.created.getHours() - 12 : (post.created.getHours() === 0 ? 12 : post.created.getHours())}:{post.created.getMinutes() < 10 ? '0' + post.created.getMinutes() : post.created.getMinutes()}
        </Text>
        <Text style={styles.userinfo}>조회수: {post.view}</Text>
      </View>
      {/** 산책로 보러가기 */}
      <Pressable style={styles.gotrail}>
        <Text style={styles.gotrailtext}>산책로 보러가기!</Text>
          <MaterialCommunityIcons 
              name="arrow-right" 
              color={"#000000"} 
              size={30}
          />
      </Pressable>
      <View style={styles.userContent}>
        <Text style={styles.content}>{post.content}</Text>
      </View>
      {/**like */}
      <Pressable style={styles.likeView}>
        <MaterialCommunityIcons
          name="thumb-up"
          size={32}
          color={'#aaa'}
        />
        <Text style={styles.liketext}>{post.like}</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  freeScroll: {
    backgroundColor: '#fff',
    height: '93%',
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
    fontSize: 34,
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
  commandText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  commandnum: {
    fontSize: 18,
    borderRadius: 30,
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    alignSelf: 'center',
    paddingVertical: 2,

  },
  commandView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  likeView: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    padding: 10,
    aspectRatio: 1,
    backgroundColor: '#eee',
  },
  liketext: {
    fontSize: 12,
    marginHorizontal: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  gotrail: {
    backgroundColor: '#85D48344',
    marginTop: 10,
    borderRadius: 20,
    height: '7%',
    minHeight: '7%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  gotrailtext: {
    fontSize: 20,
  },
  wcmdview: {
    flexDirection: 'row',
    height: '7%',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  wcmdinput: {
    width: '85%',
    height: '100%',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
});

