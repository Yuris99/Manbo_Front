import {StyleSheet,View,Text,Pressable, FlatList} from 'react-native'
import React from 'react'
import { Post,PostType } from '@/src/types'
import Posts from '@/assets/testdata/freedata'
import FreePost from '@/assets/testdata/freedata'

type Post = {
    post: Post;
}

const CommunityIndexfree = ( {post} : Post) => {
    return(
        <View style={styles.postinfo}>
            {
                <FlatList
                renderItem={({item}) => <PostType tagname={item}/> }
                horiziontal
                contentContainerStyle={{

                }}
                />
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