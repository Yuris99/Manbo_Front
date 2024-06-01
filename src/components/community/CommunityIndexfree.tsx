import {StyleSheet,View,Text,Pressable, Platform, FlatList} from 'react-native'
import React from 'react'
import { Post,PostType } from '@/src/types'
import Posts from '@/assets/testdata/freedata'
import FreePost from '@/assets/testdata/freedata'

type PostProps = {
    post: Post;
}

const CommunityIndexfree = ( {post} : PostProps) => {
    return(
      <Pressable onPress={() => {}} style={styles.container}>
        <View style={styles.views}>
            <View style={{
                backgroundColor: 'Black',
                borderRadius: 32,
                flex: 1,
            }}>
            </View>
            <View style={styles.postinfo}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{post.title}</Text>
                <View style={styles.posttimedot}>
                    <Text style={{
                        marginLeft: 5,
                        marginRight: 15,
                    }}>
                        {post.created.getMonth()+1}/{post.created.getDate()} {post.created.getHours() >=12 ? '오후' : '오전'} {post.created.getHours() > 12 ? post.created.getHours()-12 :(post.created.getHours() == 0 ? 12 : post.created.getHours())}:{post.created.getMinutes() < 10 ?'0'+post.created.getMinutes() : post.created.getMinutes()  }
                        
                    </Text>
                    <Text style={{
                        marginLeft: 5,
                        marginRight: 15,
                    }}>
                        {post.view} {post.like}
                    </Text>
                </View>
            </View>

        </View>

      </Pressable>

    );
} 

const titlesize = Platform.OS == 'ios' ? 20 : 18;

const styles = StyleSheet.create({
    postinfo:{
        left: '32%',
        width: '60%',
        margin: 10,
        marginHorizontal: 15,
    },
    container: {
        width: '95%',
        margin: 10,
        alignSelf: 'center',
    },
    views: {
        width: '100%',
        height: 120,
        borderRadius: 32,
        backgroundColor: '#dddddd',
        justifyContent: "center",
    },
    title: {
        paddingTop: 5,
        fontSize: titlesize,
    },
    posttimedot: {
        paddingTop: 5,
        flexDirection: 'row',
    }
})

export default CommunityIndexfree;