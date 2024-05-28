import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native'
import React from 'react'
import { Trail } from '@/src/types';
import { Link, useSegments } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Trails from '@/assets/testdata/trailList';

type TrailData = {
  trail: Trail;
  look: number;
}

const titlesize = Platform.OS == 'ios' ? 15 : 13;

const TrailIndexTrail = ({trail, look} : TrailData) => {
  //재사용 하기 위한 maxwidth 설정
  return (
    <Link href={{pathname: `/trail/trailpage/${trail.id}`, params: {name:trail.name}}} key={trail.name} asChild>
      <Pressable style={(look == 1 ? styles.container : styles.container2)}>
        {/* background image */}
        <Image source={{uri: trail.trailImgs[0]}}
          style={styles.image}
        />
        {/* infoText */}
        <View style={styles.trailinfo}>
        <View style={styles.textbox}>
          <Text style={styles.trailtitle} ellipsizeMode='tail' numberOfLines={1}>{trail.name}</Text> 
          <View style={styles.rankinfo}>
            <MaterialCommunityIcons
              name={'star'}
              size={20}
              color={"yellow"}
            />
            <Text style={styles.trailtitle}>{trail.rank}</Text> 
          </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default TrailIndexTrail;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    aspectRatio: 1,
    flex: 1,
  },
  container2: {
    borderRadius: 20,
    aspectRatio: 1,
    flex: 1,
    maxWidth: '49%',
    marginVertical: 5,
  },
  image: {
    position: 'absolute',
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
  },
  trailinfo: {
    margin: 10,
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 20,
  },
  textbox: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(180, 180, 180, 0.6)',
    borderRadius: 20,
    padding: 10,
    width: '100%',
  },
  trailtitle: {
    fontSize: titlesize,
    color: '#000000',    
    fontWeight: 'bold',
    marginLeft: 5,

  },
  rankinfo: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});


