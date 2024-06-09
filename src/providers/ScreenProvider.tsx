import { View, Text } from 'react-native';
import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ScreenContext = createContext({
  isTabBarVisible: true,
  setTabBarVisible: (visible: boolean) => {},
});

export function ScreenProvider({children}: PropsWithChildren) {
  const [isTabBarVisible, setTabBarVisible] = useState(true);

  return (
    <ScreenContext.Provider value={{ isTabBarVisible, setTabBarVisible }}>
      {children}
    </ScreenContext.Provider>
  );
}

export const useScreenOption = () => useContext(ScreenContext);