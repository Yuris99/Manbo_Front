import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type ButtonProps = {
  text: string;
}

export default function SubmitButton({text} : ButtonProps) {
  return (
  <Pressable onPress={()=>{}} style={{
    width: '90%',
    height: 50,
    margin: 10,
    marginVertical: 20,
    justifyContent: 'center',
  }}>
    <View style={{
      width: 'auto',
      height: 50,
      borderRadius: 30,
      justifyContent: 'center',
      padding: 10,
      backgroundColor: "#9BC34A",
      margin: 10,
    }}>
      <Text style={{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
      }}>{text}</Text>
    </View>
  </Pressable>
  );
};