//board layout.tsx
import AssignWriteComponent from '@/src/components/community/AssignWriteComponent';
import WritePostComponent from '@/src/components/community/WritePostComponent';
import HeaderBackButton from '@/src/components/default/HeaderBackButton';
import AssignSetupComponent from '@/src/components/mypage/AssignSetupComponent';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { Stack, Tabs, withLayoutContext } from 'expo-router';

import { Platform } from 'react-native';



export default function BoardTabs() {
  const iconSize = Platform.OS == 'ios' ? 32 : 28;

  return (    
    <Stack screenOptions={{
    }}
    
    >
    <Stack.Screen name="recommand" options={{
      title: "추천게시판",
      headerLeft: () => (
        <HeaderBackButton />
      ),
      headerRight: () => (
        <WritePostComponent />
      )
    }} />
    <Stack.Screen name="free" options={{
      title: "자유게시판",
      headerLeft: () => (
        <HeaderBackButton />
      ),
      headerRight: () => (
        <WritePostComponent />
      )
    }} />
    <Stack.Screen name="notice" options={{
      title: "공지사항",
      headerLeft: () => (
        <HeaderBackButton />
      ),
    }} />
    <Stack.Screen name="writepost" options={{
      title: "글쓰기",
      headerLeft: () => (
        <HeaderBackButton />
      ),
      headerRight: () => (
        <AssignWriteComponent />
      ),
    }} />
    <Stack.Screen name="WriteRecommand" options={{
      title: "산책로 만들기",
      headerLeft: () => (
        <HeaderBackButton />
      ),
      headerRight: () => (
        <AssignWriteComponent />
      ),
    }} />
    <Stack.Screen name="[postid]" options={{
      title: "공지사항",
      headerLeft: () => (
        <HeaderBackButton />
      ),
      headerShadowVisible: false,
    }}
    />
    </Stack>
  );
}