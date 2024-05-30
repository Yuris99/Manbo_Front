import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type HeaderBackButtonProps = {
  iconcolor?: string;
};

export default function HeaderBackButton(props: HeaderBackButtonProps) {
  const iconcolor = props == undefined ? "#000000" : props.iconcolor;
  console.log(props);
  return (
    <Pressable onPress={()=>{router.back();}}>
            <View style={{justifyContent:"center",alignItems: "center"}}>
                <MaterialCommunityIcons 
                    name="chevron-left" 
                    color={iconcolor} 
                    size={40}
                />
            </View>
    </Pressable>
  )
}
