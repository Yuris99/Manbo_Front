import { Platform, Pressable, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeSentences, { Saying } from '@/assets/data/HomeSentences';

const iconsize = 30;

export default function homePage() {
  const saying: Saying = HomeSentences[Math.floor(Math.random() * (HomeSentences.length-1))];
  console.log(Math.random() * HomeSentences.length)
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
      {/**명언 */}
      <View style={styles.sentenceWrapper}>
        <Text style={styles.title} adjustsFontSizeToFit={true} numberOfLines={1}>{saying.sentence}</Text>
        <Text style={styles.subtitle}>{saying.spoke}</Text>
      </View>
      {/**지도 */}
      {/**모임 */}
      {/**산책기록 */}
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
  sentenceWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: 30,
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    padding: 20,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
  },
  headertext: {
    fontSize: 20,
    fontWeight: '500',
  },
});
