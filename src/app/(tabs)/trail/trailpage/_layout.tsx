import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack, router, useLocalSearchParams } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';

export default function TrailPage() {
  const params = useLocalSearchParams();
  const trailtitle:string = (typeof params.name == 'string' ? params.name : "산책로")
  return (<Stack screenOptions={{
  }}>
  <Stack.Screen name="Traillist" options={{
    title: '산책로',
    headerLeft: () => (
      <HeaderBackButton />
    ),
    headerRight: () => (
            <Pressable onPress={()=>{router.push("/trail/trailpage/TrailViewMap")}}>
                {({pressed}) => (
                        <MaterialCommunityIcons 
                            name="map" 
                            color={"#000000"} 
                            size={25}
                        />
                )}
            </Pressable>
    )
  }} />
  <Stack.Screen name="[id]" options={{
    title: '',
  }} />
  <Stack.Screen name="TrailViewMap" options={{
    title: '산책로',
    headerLeft: () => (
      <HeaderBackButton />
    ),
  }} />
  </Stack>);
}