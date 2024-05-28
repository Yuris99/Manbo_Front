import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router';

export default function RoomStack() {
  return (<Stack screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name="Roomlist" options={{ title:'' }} />
  </Stack>);
}