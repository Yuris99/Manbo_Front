import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';

export default function TrailPage() {
  return (<Stack screenOptions={{
  }}>
    <Stack.Screen name="Traillist" options={{
      title: '산책로',
      headerLeft: () => (
        <HeaderBackButton />
      ),
      headerRight: () => (
          <Link href='./SearchTrail' asChild>
              <Pressable>
                  {({pressed}) => (
                          <MaterialCommunityIcons 
                              name="magnify" 
                              color={"#000000"} 
                              size={25}
                          />
                  )}
              </Pressable>
          </Link>
      )
    }} />
  </Stack>);
}