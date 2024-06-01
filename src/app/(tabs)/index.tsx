import { Redirect } from 'expo-router';

export default function TabIndex () {
  //테스트 - 로그인 리다이렉트
  return <Redirect href={'/login/'} />;
};