import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native'
import React from 'react'
import { Review, Trail } from '@/src/types';
import { Link, useSegments } from 'expo-router';
import MaskedView from '@react-native-masked-view/masked-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Trails from '@/assets/testdata/trailList';

type ReviewData = {
  review: Review;
}

const titlesize = Platform.OS == 'ios' ? 15 : 13;

const TrailReviewComp = ({review} : ReviewData) => {
  //재사용 하기 위한 maxwidth 설정
  return (
      <View style={styles.container}>
        {/* infoText */}
        <View style={styles.textbox}>
          <Text style={styles.reviewcontent}>{review.content}</Text> 
          <View style={styles.bottomcontainer}>
          <View style={styles.rankinfo}>
            <MaterialCommunityIcons
              name={'star'}
              size={20}
              color={"yellow"}
            />
            <Text style={styles.trailtitle}>{review.score}</Text> 
          </View>
          <Text style={styles.createDate}>
          {review.created.getMonth() + 1}/{review.created.getDate()} {review.created.getHours() >= 12 ? '오후' : '오전'} {review.created.getHours() > 12 ? review.created.getHours() - 12 : (review.created.getHours() === 0 ? 12 : review.created.getHours())}:{review.created.getMinutes() < 10 ? '0' + review.created.getMinutes() : review.created.getMinutes()}
          </Text>
          </View>
          </View>
        </View>
  );
};

export default TrailReviewComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    backgroundColor: 'rgba(180, 180, 180, 0.3)',
    borderRadius: 30,
    padding: 10,
    width: '95%',
    marginTop: 10,
    marginBottom: 5,
    flex: 1,
  },
  trailtitle: {
    fontSize: titlesize,
    color: '#000000',    
    fontWeight: 'bold',
    marginLeft: 5,
  },
  reviewcontent: {
    fontSize: titlesize+3,
    color: '#000000',   
    marginLeft: 5,
    marginBottom: 10,
  },
  rankinfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  createDate: {
    color: '#333',
  }
});


