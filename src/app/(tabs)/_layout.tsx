import React from 'react';
import { Platform, Pressable } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';

import Colors from '@constants/Colors';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';



export default function TabLayout() {
  const colorScheme = 'light';
  const iconSize = Platform.OS == 'ios' ? 32 : 28;

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
    <Tabs.Screen
      name="index"
      options={{
        title: 'home',
        headerRight: () => (
          <Link href="/mypage" asChild>
            <Pressable>
              {({ pressed }) => (
                <MaterialCommunityIcons
                  name="account"
                  size={25}
                  color={Colors[colorScheme ?? 'light'].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
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
        tabBarIcon: ({ color }) => 
          <MaterialCommunityIcons 
            name="message-text" 
            color={color} 
            size={iconSize} 
          />,
      }}
    />
    <Tabs.Screen
      name="trail"
      options={{
        title: 'trail',
        tabBarIcon: ({ color }) => 
          <MaterialCommunityIcons 
            name="walk" 
            color={color} 
            size={iconSize} 
          />,
      }}
    />
    <Tabs.Screen
      name="mypage"
      options={{
        title: 'home',
        tabBarIcon: ({ color }) => 
          <MaterialCommunityIcons 
            name="account" 
            color={color} 
            size={iconSize} 
          />,
      }}
    />
    </Tabs>
  );
}

/*

    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'test',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'three',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs> */