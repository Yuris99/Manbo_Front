import { View } from '@/src/components/Themed';
import { UserData } from '@/src/providers/UserProvider';
import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

export default function TabIndex () {
  const {user} = UserData();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simulating loading
  }, []);  
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if(user.islogin) {
    return <Redirect href={'/home'} />;
  }
  return <Redirect href={'/login'} />;
};