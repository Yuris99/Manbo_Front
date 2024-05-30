import Trails from '@/assets/testdata/trailList';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { View, FlatList, Text, ScrollView, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import Animated , { interpolate, interpolateColor, useAnimatedRef, useAnimatedStyle, useScrollViewOffset  } from 'react-native-reanimated';
import useHeaderHeight from '@react-navigation/elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 300;

export default function TrailInfo() {
  //애니메이션 관련 데이터
	const scrollRef = useAnimatedRef<Animated.ScrollView>();
	const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateY: interpolate(
						scrollOffset.value,
						[-IMG_HEIGHT, 0, IMG_HEIGHT],
						[-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
					)
				},
				{
					scale: interpolate(scrollOffset.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [2, 1, 1])
				}
			]
		};
	});

  const {id} = useLocalSearchParams();
  //산책로 정보 가져오기
  const trail = Trails[Number(id)];

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.3], [0, 1]),
    };
  });  
  const headerAnimatedStyleColor = useAnimatedStyle(() => {
    return {
      color: interpolateColor(scrollOffset.value, [0, IMG_HEIGHT / 1.3], ["#ffffff", "#000000"]),
    };
  });  
  const headerAnimatedStyleRev = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.3], [1, 0]),
    };
  });
  

  return (
    <View style={styles.container}>
    <Stack.Screen 
      options={{
        headerTransparent: true,
        title: trail.name,
        headerLeft: () => <HeaderBackButton iconcolor='#ffffff' />,
        headerTitleStyle: {color: "white"},
        headerBackground: () => <Animated.View style={[styles.header, headerAnimatedStyle]}/>
      }}
    />
      {/**header */}
      <Animated.ScrollView 
        ref={scrollRef}
        style={styles.Startheader}
        >
        {/**이미지 */}
        <Animated.Image source={{
          uri: trail.trailImgs[0],
        }}
        style={[styles.image, imageAnimatedStyle]}
        />
        {/**내용 */}
        <View style={styles.traildata}>
          <Text style={styles.title}>{trail.name}</Text>
        {/**지도보기 */}
        </View>
      </Animated.ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    borderWidth: 1,
  },
  Startheader: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: IMG_HEIGHT,
  },
  traildata: {
    height: 2000,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 20 
  },
  header: {
    backgroundColor: "#9BC34A",
    color: 'green',
    height: 100,
  }
})