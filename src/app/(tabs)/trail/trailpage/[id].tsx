import Trails from '@/assets/testdata/trailList';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';
import { Link, Stack, router, useLocalSearchParams } from 'expo-router';
import { View, FlatList, Text, ScrollView, StyleSheet, Image, Dimensions, Pressable, Platform } from 'react-native';
import Animated , { interpolate, interpolateColor, useAnimatedRef, useAnimatedStyle, useScrollViewOffset  } from 'react-native-reanimated';
import useHeaderHeight from '@react-navigation/elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NaverMapMarkerOverlay, NaverMapView } from '@mj-studio/react-native-naver-map';

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
      opacity: interpolate(scrollOffset.value-IMG_HEIGHT+100, [0, (IMG_HEIGHT) / 5], [0, 1]),
    };
  });  
  

  return (
    <View style={styles.container}>
    <Stack.Screen 
      options={{
        headerTransparent: true,
        title: trail.name,
        headerLeft: () => <HeaderBackButton iconcolor='#ffffff' />,
        headerRight: () => (
          <Pressable style={{}}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={30}
              color={"white"}
            />
          </Pressable>
        ),
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
          <View style={styles.titlewrapper}>
            <Text style={styles.title}>{trail.name}</Text>
          </View>
          {/**리뷰 목록 */}
          <Pressable style={styles.reviewdata} onPress={
            () => {
              router.push({
                pathname: '/trail/trailpage/TrailReviews',
                params: {trail_id: id}
              })
            }
          }>
            <View style={styles.score}>
            <MaterialCommunityIcons
              name={'star'}
              size={30}
              color={"gold"}
            />
            <Text style={styles.scorenum}>{trail.rank}</Text> 
            </View>
              <Text style={[styles.scorenum, {color: 'grey'}]}>리뷰 보러 가기 {">"}</Text>
          </Pressable>
        {/**지도보기 */}
          <NaverMapView
            style={styles.trailmap}
            symbolScale={0}
            isShowLocationButton={false}
            isShowZoomControls={false}
            region={{latitude: trail.startcoord.latitude-0.001, longitude: trail.startcoord.longitude-0.002, latitudeDelta: 0.002, longitudeDelta: 0.004}}
          >
            <NaverMapMarkerOverlay
              latitude={trail.startcoord.latitude}
              longitude={trail.startcoord.longitude}
              anchor={{x: 0.5, y: 1}}
          />

          </NaverMapView>
        {/**설명 */}
        <View style={styles.contentwrapper}>
          <Text style={styles.content}>{trail.content}</Text>
        </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const titlealign = Platform.OS == 'ios' ? 'center' : 'left';

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
    backgroundColor: '#fff',
    height: '100%',
  },
  trailmap: {
    backgroundColor: '#fff',
    width: '100%',
    height: 300,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 25, 
    fontWeight: 'bold', 
    textAlign: titlealign, 
  },
  titlewrapper: {
    padding: 20,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#eeeeee",
  },
  reviewdata: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 10,
  },
  score: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  scorenum: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 30,
    fontWeight: '600', 
  },
  content: {
    fontSize: 18, 
    fontWeight: '500', 
  },
  contentwrapper: {
    margin: 10,
    padding: 20,
    borderRadius: 30,
    backgroundColor: '#dddddd',
  },
  header: {
    backgroundColor: "#9BC34A",
    color: 'green',
    height: 100,
  }
})