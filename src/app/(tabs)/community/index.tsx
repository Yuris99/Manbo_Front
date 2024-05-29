import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Pressable } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.iconTextContainer}>
        <View style={styles.topButton01}>
          <MaterialIcons name="info" size={24} color="black" />
          <Text style={styles.title}>만보 정식출시 안내</Text>
        </View>
      </View>
      {/**실시간 인기글 */}
      <View style={styles.middleContainer}>
        <Text style={styles.middleButtonText}>실시간 인기글(임시로 공지링크)</Text>
        <Link href={"/community/board/notice"} asChild>
          <Pressable onPress={()=>{console.log("tes");}}>
            <View style={styles.middleButton}></View>
          </Pressable>
        </Link>
      </View>
      {/**추천 게시판 */}
      <View style={styles.middleContainer}>
        <Text style={styles.middleButtonText}>산책로 추천 게시판</Text>
        <Link href={"/community/board/recommand"} asChild>
          <Pressable style={styles.middleButton}>
          </Pressable>
        </Link>
      </View>
      {/**자유 게시판 */}
      <View style={styles.middleContainer}>
        <Text style={styles.middleButtonText}>자유 게시판</Text>
        <Link href={"/community/board/free"} asChild>
          <Pressable style={styles.middleButton}>
          </Pressable>
        </Link>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topButton01: {
    width: 300,
    height: 50,
    backgroundColor: "#ffadad",
    borderRadius: 15,
    flexDirection: 'row', // 아이콘과 텍스트를 가로로 배치
    alignItems: 'center', // 세로 정렬
    paddingHorizontal: 10, // 수평 패딩 추가
  },
  middleButtonText: {
    color: "#000",
    fontSize: 18,
    textAlign: "left",
    marginLeft: 7
  },
  middleContainer: {
    borderWidth: 0,
  },
  middleButton: {
    width: 300,
    height: 120,
    padding: 15,
    backgroundColor: "#d0d0d0",
    borderRadius: 15,
    margin: 7,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
});
