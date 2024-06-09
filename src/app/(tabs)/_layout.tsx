import React from 'react';
import { Platform, Pressable } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';

import Colors from '@constants/Colors';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
import { useScreenOption } from '@/src/providers/ScreenProvider';



export default function TabLayout() {
  const colorScheme = 'light';
  const iconSize = Platform.OS == 'ios' ? 32 : 28;
  const {isTabBarVisible} = useScreenOption();

  return (    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        
        headerShown: useClientOnlyValue(false, true),
        headerTitle: '',
        tabBarShowLabel: false,
        tabBarStyle: Platform.OS == 'ios' ? {
          height: '9.5%',
        } : {
          height: '6.5%',
        },
        
      }}
      
    >
    <Tabs.Screen name="index" options={{ href: null }} />
    <Tabs.Screen name="login" options={{ 
      href: null,
      headerShown: false, 
      tabBarStyle: {
        display: 'none',
      },
    }}
    />
    <Tabs.Screen
      name="home"
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => 
        <MaterialCommunityIcons 
          name="home" 
          color={color} 
          size={iconSize} 
        />,
      }}
    />
    <Tabs.Screen
      name="community"
      options={{
        title: 'community',
        headerShown: false,
        tabBarIcon: ({ color }) => 
          <MaterialCommunityIcons 
            name="message-text" 
            color={color} 
            size={iconSize} 
          />,
          unmountOnBlur: true,
      }}
    />
    <Tabs.Screen
      name="trail"
      options={{
        title: 'trail',
        headerShown: false,
        tabBarIcon: ({ color }) => 
          <MaterialCommunityIcons 
            name="walk" 
            color={color} 
            size={iconSize} 
          />,
          unmountOnBlur: true,
          tabBarStyle:{display: isTabBarVisible ? 'flex' : 'none'}
      }}
    />
    <Tabs.Screen
      name="mypage"
      options={{
        title: 'mypage',
        headerShown: false,
        tabBarIcon: ({ color }) => 
          <MaterialCommunityIcons 
            name="account" 
            color={color} 
            size={iconSize} 
          />,
          unmountOnBlur: true,
      }}
    />
    </Tabs>
  );
}
