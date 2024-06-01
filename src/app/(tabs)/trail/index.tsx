import { FlatList, Image, Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TrailIndexRoom from '@components/trail/TrailIndexroom';
import Trails from '@/assets/testdata/trailList';
import RoomList from '@/assets/testdata/roomData';
import TrailIndexTrail from '@/src/components/trail/TrailIndextrail';
import { Link, router } from 'expo-router';

//메뉴 정보
const MenuTab = [
  {
    name: "산책로 리스트",
    icon: "",
    link: "./trailpage",
  },
  {
    name: "산책 기록",
    icon: "",
    link: "@app/mypage",
  },
  {
    name: "모임 참여",
    icon: "",
    link: "./roompage",
  },
  {
    name: "모임 생성",
    icon: "",
    link: "./roompage",
  },
];

const MenuTabSize = 40;

export default function Trail() {
  return (
    <View style={styles.container}>
      {/*메뉴리스트*/}
      <View style={styles.menuList}>
        <View style={styles.menuElement}>
          <Link href="/trail/trailpage" asChild>
            <Pressable>
              <View style={[styles.menuIcon]}>
                <MaterialCommunityIcons
                  name="format-list-text"
                  size={MenuTabSize}
                  color={"#000000"}
                />
              </View>
            </Pressable>
          </Link>
          <Text style={styles.menuText}>산책로 리스트</Text>
        </View>
        <View style={styles.menuElement}>
          <Pressable onPress={() => {}} style={[styles.menuIcon]}>
            <MaterialCommunityIcons
              name="pencil"
              size={MenuTabSize}
              color={"#000000"}
            />
          </Pressable>
          <Text style={styles.menuText}>산책 기록</Text>
        </View>
        <View style={styles.menuElement}>
          <Link href="/trail/roompage" asChild>
            <Pressable>
              <View style={[styles.menuIcon]}>
                <MaterialCommunityIcons
                  name="account-group"
                  size={MenuTabSize}
                  color={"#000000"}
                />
              </View>
            </Pressable>
          </Link>
          <Text style={styles.menuText}>모임 참여</Text>
        </View>
        <View style={styles.menuElement}>
          <Link href="/trail/roompage/Createroom" asChild>
            <Pressable style={[styles.menuIcon]}>
              {({ pressed }) => (
                <View style={styles.menuIcon}>
                <MaterialCommunityIcons
                  name="plus"
                  size={MenuTabSize}
                  color={"#000000"}
                />
                </View>
              )}
            </Pressable>
          </Link>
          <Text style={styles.menuText}>모임 생성</Text>
        </View>
      </View>
      {/*광고배너*/}
      <View style={styles.ad}>
        <Image source={require('@assets/images/default_advertising.png')}
          style={styles.adimg}
          />
      </View>
      {/*모임*/}
      <View style={styles.rooms}>
          {/** text 눌렀을 때 */}
          <Link href="/trail/roompage" asChild>
          <Pressable>
            {({ pressed }) => (
              <Text style={[styles.textStack, {paddingHorizontal: 10,}]}>지금 뜨는 모임</Text>
            )}
          </Pressable>
          </Link>
          {/** 현재 모집중인 모임 목록 */}
          <TrailIndexRoom room={null}></TrailIndexRoom>
      </View>
      {/*산책로들*/}
      <View style={styles.trails}>
          <Link href="/trail/trailpage" asChild>
          <Pressable>
            {({ pressed }) => (
            <Text style={styles.textStack}>인기 있는 산책로</Text>
            )}
          </Pressable>
        </Link>
          <FlatList
            contentContainerStyle={{
              marginVertical: 15,
              gap: 10,
            }}
            data={Trails}
            renderItem={({item}) => <TrailIndexTrail trail={item} look={1} />}
            horizontal={true}
            scrollEnabled
            showsHorizontalScrollIndicator={false}
    
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  menuList: {
    flexDirection: 'row',
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: '3%',
    marginBottom: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  menuIcon: {
    borderStyle: 'solid',
    width: '100%',
    aspectRatio: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "#aaaaaa",
    borderRadius: 22,
  },
  menuElement: {
    width: '25%',
    padding: 3,
    margin: 5,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  menuText: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '500',
  },
  textStack: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  ad: {
    width: '100%',
    height: 100,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  adimg: {
    width: '90%',
    height: '90%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#aaaaaa',
  },
  rooms: {
    width: '100%',
    marginTop: 10,
  },
  trails: {
    flex: 1,
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 10,
  },
});