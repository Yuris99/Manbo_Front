import { View, Text } from 'react-native'
import React, { PropsWithChildren, createContext, useContext, useState } from 'react'
import { Loc, User } from '../types';
import RoomList from '@/assets/testdata/roomData';
import Users from '@/assets/testdata/users';
import { Region } from '@mj-studio/react-native-naver-map';
import { Accuracy, getCurrentPositionAsync, requestForegroundPermissionsAsync, requestPermissionsAsync, useBackgroundPermissions, useForegroundPermissions } from 'expo-location';

type UserType = {
  user: User | null;
  locate: Loc;
  coordinate: Region;
  login: (userid: number) => void;
  logout: () => void;
  setloc: (selector: number, flow: string) => void;
  getCoordinate: () => void;
};

const UserContext = createContext<UserType>({
  user: null,
  locate: {city:'', town:'', village:''},
  coordinate: {latitude: 37.551180, longitude: 127.001610, latitudeDelta: 0, longitudeDelta: 0},
  login: () => {},
  setloc: () => {},
  logout: () => {},
  getCoordinate: () => {},
});

const UserProvider = ({children}: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [locate, setLocate] = useState<Loc>({city:'도/특별시/광역시', town:'시/군/구', village:'읍/면/동'});
  const [coordinate, setCoordinate] = useState<Region>({latitude: 37.5011953, longitude: 126.9516201, latitudeDelta: 0.002, longitudeDelta: 0.004});
  console.log("reload");
  console.log(coordinate);
  const login = (userid: number) => {
    setUser(Users[userid]);
  };
  
  const logout = () => {
    setUser(null);
  };

  const setloc = (selector: number, flow: string) => {
    if(selector == 0) {
      setLocate({...locate, city: flow});
    } else if(selector == 1) {
      setLocate({...locate, town: flow});
    } else if(selector == 2) {
      setLocate({...locate, village: flow});
    }
  }

  const getCoordinate = async () => {
    console.log("getcoordinate");
    const {status} = await requestForegroundPermissionsAsync();
    if(status !== 'granted') {
      console.error("권한 허용 안됨!");
    }
    const loc = await getCurrentPositionAsync({accuracy: 5});
    setCoordinate({latitude: loc.coords.latitude, longitude: loc.coords.longitude, latitudeDelta: coordinate.latitudeDelta, longitudeDelta: coordinate.longitudeDelta});
    console.log("c");
    console.log(coordinate);
    console.log(loc);
  }


  return (
    <UserContext.Provider
      value={{user, locate, coordinate, login, logout, setloc, getCoordinate}}>
        {children}
      </UserContext.Provider>
  )
}

export default UserProvider;

export const UserData = () => useContext(UserContext);