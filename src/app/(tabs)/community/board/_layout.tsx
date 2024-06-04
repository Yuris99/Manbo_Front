//board layout.tsx
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

import { Platform } from 'react-native';


const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
MaterialTopTabNavigationOptions,
typeof Navigator,
TabNavigationState<ParamListBase>,
MaterialTopTabNavigationEventMap
>(Navigator);

export default function BoardTabs() {
  const iconSize = Platform.OS == 'ios' ? 32 : 28;

  return (    
    <MaterialTopTabs>
    <MaterialTopTabs.Screen name="free" options={{
      title: "자유게시판",
    }} />
    <MaterialTopTabs.Screen name="recommand" options={{
      title: "추천게시판",
    }} />
    <MaterialTopTabs.Screen name="notice" options={{
      title: "공지사항",
    }} />
    <MaterialTopTabs.Screen name="[id]" options={{
    }}
     />
    </MaterialTopTabs>
  );
}