import { View, Text } from 'react-native'
import React, { PropsWithChildren, createContext, useContext, useState } from 'react'
import { Loc, User } from '../types';
import RoomList from '@/assets/testdata/roomData';
import { Region } from '@mj-studio/react-native-naver-map';
import { Accuracy, getCurrentPositionAsync, requestForegroundPermissionsAsync, requestPermissionsAsync, useBackgroundPermissions, useForegroundPermissions } from 'expo-location';
import { logincheck } from '../lib/serverlogin';

type UserType = {
  user: User;
  locate: Loc;
  coordinate: Region;
  login: (email: string, password: string) => void;
  setuser: (userdata: User) => void;
  logout: () => void;
  setloc: (selector: number, flow: string) => void;
  getCoordinate: () => void;
};

const UserContext = createContext<UserType>({
  user: {id: -1, email: "", username: "", pw: "", age: 0, gender: "M", islogin: false},
  locate: {city:'', town:'', village:''},
  coordinate: {latitude: 37.551180, longitude: 127.001610, latitudeDelta: 0, longitudeDelta: 0},
  login: () => {},
  setuser: () => {},
  setloc: () => {},
  logout: () => {},
  getCoordinate: () => {},
});

const UserProvider = ({children}: PropsWithChildren) => {
  const [user, setUser] = useState<User>({id: -1, email: "", username: "", pw: "", age: 0, gender: "M", islogin: false});
  const [locate, setLocate] = useState<Loc>({city:'도/특별시/광역시', town:'시/군/구', village:'읍/면/동'});
  const [coordinate, setCoordinate] = useState<Region>({latitude: 37.5011953, longitude: 126.9516201, latitudeDelta: 0.002, longitudeDelta: 0.004});
  const login = async (email: string, password: string) => {
    const returndata = await logincheck(email, password);
    console.log(returndata);
    if(returndata == null) {
      return false;
    }
    setUser({id: returndata.memberId, username: returndata.name, email: returndata.email, gender: 'M', pw: "", age: 24, islogin: true});
    return true;
  };
  const setuser = (userdata: User) => {
    setUser(userdata);
  }
  
  const logout = () => {
    setUser({id: -1, email: "", username: "", age: 0, gender: "M", pw: "", islogin: false});
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
      value={{user, locate, coordinate, login, logout, setloc, setuser, getCoordinate}}>
        {children}
      </UserContext.Provider>
  )
}

export default UserProvider;

export const UserData = () => useContext(UserContext);