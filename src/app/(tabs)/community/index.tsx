import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Pressable, Platform } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';

export default function CommunityMain() {
  return (
    <View style={styles.container}>
    <Link href={"/community/board/notice"} asChild>
    <Pressable style={styles.iconTextContainer}>
        <View style={styles.topButton01}>
          <MaterialIcons name="info" size={24} color="black" />
          <Text style={styles.title}>만보 정식출시 안내</Text>
        </View>
    </Pressable>
    </Link>
      {/**추천 게시판 */}
      <Pressable style={styles.middleContainer} onPress={()=>{router.push('/community/board/recommand')}}>
        <View style={styles.buttontextview}>
          <Text style={styles.middleButtonText}>산책로 추천 게시판</Text>
          <MaterialCommunityIcons
            name="arrow-right"
            size={24}
            color="black"
          />
        </View>
          <View style={styles.middleButton}>
            <Text style={styles.thumbnailText}>테스트</Text>
            <Text style={styles.thumbnailText}>테스트</Text>
            <Text style={styles.thumbnailText}>테스트</Text>
            <Text style={styles.thumbnailText}>테스트</Text>
            <Text style={styles.thumbnailText}>테스트</Text>
          </View>
      </Pressable>
      {/**자유 게시판 */}
      <Link href={{pathname: "/community/board/free"}} asChild>
      <Pressable style={styles.middleContainer}>
        <View style={styles.buttontextview}>
          <Text style={styles.middleButtonText}>자유 게시판</Text>
          <MaterialCommunityIcons
            name="arrow-right"
            size={24}
            color="black"
          />
        </View>
          <View style={styles.middleButton}>
            <Text style={styles.thumbnailText}>테스트</Text>
            <Text style={styles.thumbnailText}>테스트</Text>
            <Text style={styles.thumbnailText}>테스트</Text>
            <Text style={styles.thumbnailText}>테스트</Text>
            <Text style={styles.thumbnailText}>테스트</Text>
          </View>
      </Pressable>
      </Link>
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
    marginLeft: 10,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topButton01: {
    width: "90%",
    height: 50,
    backgroundColor: "#ffadad",
    borderRadius: 15,
    flexDirection: 'row', // 아이콘과 텍스트를 가로로 배치
    alignItems: 'center', // 세로 정렬
    paddingHorizontal: 10, // 수평 패딩 추가
    margin: 10,
    marginVertical: 30,
  },
  middleButtonText: {
    color: "#000",
    fontSize: Platform.OS == 'ios' ? 24 : 20,
    textAlign: "left",
    marginLeft: 7
  },
  middleContainer: {
    borderWidth: 1,
    width: '90%',
    borderRadius: 30,
    padding: 10,
    borderColor: '#aaa',
    marginVertical: 10,
  },
  buttontextview: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingLeft: 10,
    alignItems: 'center',
  },
  middleButton: {
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 10,
    paddingHorizontal: 10,
  },
  thumbnailText: {
    fontSize: 14,
    marginVertical: 5,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
});
