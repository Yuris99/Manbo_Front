import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HeaderBackButton() {
  return (
    <Pressable onPress={()=>{router.back();}}>
            <View style={{justifyContent:"center",alignItems: "center"}}>
                <MaterialCommunityIcons 
                    name="chevron-left" 
                    color={"#000000"} 
                    size={40}
                />
            </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({})