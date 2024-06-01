import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { forwardRef } from 'react'
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const SubmitButton = forwardRef<View | null, ButtonProps>(
  ({text, ...pressableProps}, ref) => {
  return (
  <Pressable ref={ref} {...pressableProps} style={{
    width: '90%',
    height: 50,
    margin: 10,
    marginVertical: 20,
    justifyContent: 'center',
  }}>
    <View style={{
      width: '100%',
      height: 50,
      borderRadius: 30,
      alignSelf: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: "#9BC34A",
      margin: 10,
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
      }}>{text}</Text>
    </View>
  </Pressable>
  );
});

export default SubmitButton;