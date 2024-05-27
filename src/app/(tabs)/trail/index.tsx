import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@components/EditScreenInfo';
import { Text, View } from '@components/Themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/*메뉴리스트*/}
      <View style={styles.menuList}>
        <View style={styles.menuElement}>
          <Pressable onPress={() => {}} style={[styles.menuIcon]}>
            <MaterialCommunityIcons
              name="pencil"
              size={MenuTabSize}
              color={"#000000"}
            />
          </Pressable>
          <Text>산책로 리스트</Text>
        </View>
        <View style={styles.menuElement}>
          <Pressable onPress={() => {}} style={[styles.menuIcon]}>
            <MaterialCommunityIcons
              name="pencil"
              size={MenuTabSize}
              color={"#000000"}
            />
          </Pressable>
          <Text>산책 기록</Text>
        </View>
        <View style={styles.menuElement}>
          <Pressable onPress={() => {}} style={[styles.menuIcon]}>
            <MaterialCommunityIcons
              name="pencil"
              size={MenuTabSize}
              color={"#000000"}
            />
          </Pressable>
          <Text>모임 참여</Text>
        </View>
        <View style={styles.menuElement}>
          <Pressable onPress={() => {}} style={[styles.menuIcon]}>
            <MaterialCommunityIcons
              name="pencil"
              size={MenuTabSize}
              color={"#000000"}
            />
          </Pressable>
          <Text>모임 생성</Text>
        </View>
      </View>
      {/*광고배너*/}
      <View style={styles.ad}>
      </View>
      {/*모임*/}
      <View style={styles.rooms}>
      </View>
      {/*산책로들*/}
      <View style={styles.trails}>
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  menuList: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    flex: 1,
  },
  menuIcon: {
    borderStyle: 'solid',
    width: '100%',
    aspectRatio: 1,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "#aaaaaa",
    borderRadius: 22,
  },
  menuElement: {
    width: '25%',
    padding: 5,
    margin: 10,
    fontSize: 10,
  },
  ad: {

  },
  rooms: {

  },
  trails: {

  },
});
