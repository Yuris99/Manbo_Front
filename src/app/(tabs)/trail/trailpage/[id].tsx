import Trails from '@/assets/testdata/trailList';
import { useLocalSearchParams } from 'expo-router';
import { View, FlatList, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import Animated , { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated';

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
    }
  })

  const {id} = useLocalSearchParams();
  //산책로 정보 가져오기
  const trail = Trails[Number(id)];
  return (
    <View style={styles.container}>
      {/**header */}
      <Animated.ScrollView style={styles.Startheader}>
        {/**이미지 */}
        <Animated.Image source={{
          uri: trail.trailImgs[0],
        }}
        style={styles.image}
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
  },
  image: {
    width: width,
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
})