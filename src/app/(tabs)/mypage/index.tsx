import { Platform, Pressable, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const iconsize = 30;

export default function TabTwoScreen() {
  //테스트
  const username = "홍지훈";
  const walksum = 5923;
  return (
    <SafeAreaView style={[styles.container]}>
    {/**헤더 */}
      <Stack.Screen options={{
        title: '',
        headerLeft: () => (
          <Text style={styles.headertext}>{username}님, 반갑습니다!</Text>
        ),
        headerRight: () => (
          <Pressable>
            <MaterialCommunityIcons
              name="logout"
              size={30}
              color={"#000000"}
            />
          </Pressable>
        ),
      }} />
      {/**걸음수 */}
      <View style={styles.walksum}>
        <MaterialCommunityIcons
          name="shoe-print"
          size={80}
          color={"#662500"}
        />
        <View style={styles.walksumTextwarpper}>
          <Text style={styles.walksumtext}>만보와 함께</Text>
          <Text style={styles.walksumtext}>{Intl.NumberFormat().format(walksum)}보</Text>
        </View>
      </View>
      {/**프로필 설정 */}
        <Pressable style={styles.menuview}>
        <MaterialCommunityIcons
          name="account-box"
          size={iconsize}
          color={"#000"}
        />
          <Text style={styles.menutext}>프로필 설정</Text>
        </Pressable>
      {/**산책 기록 */}
        <Pressable style={styles.menuview}>
        <MaterialCommunityIcons
          name="history"
          size={iconsize}
          color={"#000"}
        />
          <Text style={styles.menutext}>산책 기록</Text>
        </Pressable>
      {/**찜목록 */}
        <Pressable style={styles.menuview}>
        <MaterialCommunityIcons
          name="heart"
          size={iconsize}
          color={"#000"}
        />
          <Text style={styles.menutext}>찜 목록</Text>
        </Pressable>
      {/**내가 쓴 글 */}
        <Pressable style={styles.menuview}>
        <MaterialCommunityIcons
          name="playlist-edit"
          size={iconsize}
          color={"#000"}
        />
          <Text style={styles.menutext}>내가 쓴 글</Text>
        </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headertext: {
    fontSize: 20,
    fontWeight: '500',
  },
  header: {
    width:'100%',
    padding: 10,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  walksum: {
    width:'100%',
    padding: 10,
    paddingHorizontal: 30,
    marginBottom: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  walksumTextwarpper: {
    marginHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
  },
  walksumtext: {
    fontSize: 24,
    marginVertical: 10,
    fontWeight: '500',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuview: {
    width:'100%',
    padding: 10,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  menutext: {
    fontSize: 18,
    marginLeft: 20,
  },
});
