import Trails from '@/assets/testdata/trailList';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';
import { Link, Stack, router, useLocalSearchParams } from 'expo-router';
import { View, FlatList, Text, ScrollView, StyleSheet, Image, Dimensions, Pressable, Platform } from 'react-native';
import Animated , { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NaverMapMarkerOverlay, NaverMapPathOverlay, NaverMapView } from '@mj-studio/react-native-naver-map';
import coord1 from '@/assets/testdata/trailListLoc';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 300;

type Coordinate = {
  latitude: number;
  longitude: number;
};

export default function TrailInfo() {
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
  const trail = Trails[Number(id)];
  const clist = coord1[0].coordlist;

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value-IMG_HEIGHT+100, [0, (IMG_HEIGHT) / 5], [0, 1]),
    };
  });

  const calculateBoundingBox = (coordinates: Coordinate[]) => {
    const lats = coordinates.map(coord => coord.latitude);
    const lons = coordinates.map(coord => coord.longitude);
    
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLon = Math.min(...lons);
    const maxLon = Math.max(...lons);

    return {
      minLat,
      maxLat,
      minLon,
      maxLon,
      latDelta: maxLat - minLat,
      lonDelta: maxLon - minLon
    };
  };

  const boundingBox = calculateBoundingBox(clist);
  const latDelta = boundingBox.latDelta * 1.5; // Adjusted delta with 1.5 factor
  const lonDelta = boundingBox.lonDelta * 1.5; // Adjusted delta with 1.5 factor
  const midLat = boundingBox.minLat + latDelta / 2;
  const midLon = boundingBox.minLon + lonDelta / 2;

  const region = {
    latitude: midLat - latDelta / 1.5, // Adjust for center
    longitude: midLon - lonDelta / 1.5, // Adjust for center
    latitudeDelta: latDelta,
    longitudeDelta: lonDelta
  };

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
      <Animated.ScrollView 
        ref={scrollRef}
        style={styles.Startheader}
      >
        <Animated.Image source={{
          uri: trail.trailImg,
        }}
        style={[styles.image, imageAnimatedStyle]}
        />
        <View style={styles.traildata}>
          <View style={styles.titlewrapper}>
            <Text style={styles.title}>{trail.name}</Text>
          </View>
          <Pressable style={styles.reviewdata} onPress={() => {
            router.push({
              pathname: '/trail/trailpage/TrailReviews',
              params: {trail_id: id}
            });
          }}>
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
          <View style={styles.trailmapContainer}>
            <NaverMapView
              style={styles.trailmap}
              region={region}
              symbolScale={1}
              isShowLocationButton={false}
              isShowZoomControls={false}
              isScrollGesturesEnabled={false}
              isZoomGesturesEnabled={false}
              isTiltGesturesEnabled={false}
              isRotateGesturesEnabled={false}
            >
              {clist.length > 1 && (
                <NaverMapPathOverlay
                  coords={clist}
                  width={5}
                  color="red"
                />
              )}
              {clist.length > 0 && (
                <NaverMapMarkerOverlay
                  latitude={clist[0].latitude}
                  longitude={clist[0].longitude}
                  anchor={{x: 0.5, y: 1}}
                  caption={{
                    text: trail.name,
                  }}
                />
              )}
            </NaverMapView>
            {/* 투명한 더미 View */}
            <View style={styles.transparentOverlay} />
          </View>
          <View style={styles.contentwrapper}>
            <Text style={styles.content}>{trail.content}</Text>
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const titlealign = Platform.OS === 'ios' ? 'center' : 'left';

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
  trailmapContainer: {
    height: 300,
    marginTop: 20,
    marginBottom: 10,
  },
  trailmap: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  transparentOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
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
});
