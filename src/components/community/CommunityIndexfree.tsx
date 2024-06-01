import {StyleSheet,View,Text,Pressable, FlatList} from 'react-native'
import React from 'react'
import { Post,PostType } from '@/src/types'
import Posts from '@/assets/testdata/freedata'
import FreePost from '@/assets/testdata/freedata'

type PostProps = {
    post: Post;
}

const CommunityIndexfree = ( {post} : PostProps) => {
    return(
        <View style={styles.postinfo}>
            {
              
            }
        </View>
    );
} 

const styles = StyleSheet.create({
    postinfo:{
        left: '32%',
        width: '60%',
        margin: 10,
        marginHorizontal: 15,
    }
})