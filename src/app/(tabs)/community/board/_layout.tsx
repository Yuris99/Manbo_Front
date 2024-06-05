//board layout.tsx
import AssignWriteComponent from '@/src/components/community/AssignWriteComponent';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { Tabs, withLayoutContext } from 'expo-router';

import { Platform } from 'react-native';



export default function BoardTabs() {
  const iconSize = Platform.OS == 'ios' ? 32 : 28;

  return (    
    <Tabs screenOptions={{
      tabBarStyle: {display: 'none'},
    }}
    
    >
    <Tabs.Screen name="free" options={{
      title: "자유게시판",
      href: null,
      headerLeft: () => (
        <HeaderBackButton />
      ),
      headerRight: () => (
        <AssignWriteComponent />
      )
    }} />
    <Tabs.Screen name="recommand" options={{
      title: "추천게시판",
      href: null,
      headerLeft: () => (
        <HeaderBackButton />
      ),
      headerRight: () => (
        <AssignWriteComponent />
      )
    }} />
    <Tabs.Screen name="notice" options={{
      title: "공지사항",
      href: null,
      headerLeft: () => (
        <HeaderBackButton />
      ),
    }} />
    <Tabs.Screen name="[id]" options={{
      href: null,
      headerLeft: () => (
        <HeaderBackButton />
      ),
      
    }}
     />
    </Tabs>
  );
}