import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router';
import CreateRoomComponent from '@/src/components/trail/CreateRoomComponent';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';
import AssignRoomComponent from '@/src/components/trail/AssignRoomComponent';

export default function RoomStack() {
  return (<Stack screenOptions={{
  }}>
    <Stack.Screen name="Roomlist" options={{
      title: '모집중인 모임',
      headerLeft: () => (
        <HeaderBackButton />
      ),
      headerRight: () => (
          <Link href='trail/roompage/Createroom' asChild>
              <Pressable>
                  {({pressed}) => (
                      <CreateRoomComponent />
                  )}
              </Pressable>
          </Link>
      )
    }} />
    <Stack.Screen name="Createroom" options={{ 
      title: '모임 만들기',
      headerLeft: () => (
        <HeaderBackButton />
      ),
      headerRight: () => (
        <Pressable>
          <AssignRoomComponent />
        </Pressable>
      )
    }} />
  </Stack>);
}