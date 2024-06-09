import { View, Text } from 'react-native'
import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
import { Loc, User } from '../types';
import RoomList from '@/assets/testdata/roomData';
import { Region } from '@mj-studio/react-native-naver-map';
import { Accuracy, getCurrentPositionAsync, requestForegroundPermissionsAsync, requestPermissionsAsync, useBackgroundPermissions, useForegroundPermissions } from 'expo-location';
import { getUserDataByMID, logincheck } from '../lib/serverlogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserType = {
  user: User;
  locate: Loc;
  coordinate: Region;
  login: (email: string, password: string) => boolean;
  setuser: (userdata: User) => void;
  logout: () => void;
  setloc: (selector: number, flow: string) => void;
  getCoordinate: () => void;
};

const UserContext = createContext<UserType>({
  user: {id: -1, email: "", username: "", pw: "", age: 0, gender: "M", islogin: false},
  locate: {city:'', town:'', village:''},
  coordinate: {latitude: 37.551180, longitude: 127.001610, latitudeDelta: 0, longitudeDelta: 0},
  login: () => true,
  setuser: () => {},
  setloc: () => {},
  logout: () => {},
  getCoordinate: () => {},
});

const UserProvider = ({children}: PropsWithChildren) => {
  const [user, setUser] = useState<User>({id: -1, email: "", username: "", pw: "", age: 0, gender: "M", islogin: false});
  const [locate, setLocate] = useState<Loc>({city:'도/특별시/광역시', town:'시/군/구', village:'읍/면/동'});
  const [coordinate, setCoordinate] = useState<Region>({latitude: 37.5011953, longitude: 126.9516201, latitudeDelta: 0.002, longitudeDelta: 0.004});
  useEffect(() => {
    const loadUserData = async () => {
      try {
        //const userData = await AsyncStorage.getItem('user');
        //if (userData) {
        //  setUser(JSON.parse(userData));
        console.log("수정바람");
      } catch (error) {
        console.error('Failed to load user data', error);
      }
    };

    loadUserData();
  }, []);
  const login = async (email: string, password: string) => {
    const returndata = await logincheck(email, password);
    if(returndata != true) {
      return false;
    }
    const userdata = await getUserDataByMID(email);
    console.log("udate");
    console.log(userdata);
    setUser({id: userdata.memberId, username: userdata.name, email: userdata.email, gender: 'M', pw: "", age: 24, islogin: true});
    //await AsyncStorage.setItem('user', JSON.stringify(user));
    console.log(user);
    return true;
  };
  const setuser = (userdata: User) => {
    setUser(userdata);
  }
  
  const logout = async() => {
    setUser({id: -1, email: "", username: "", age: 0, gender: "M", pw: "", islogin: false});
    //await AsyncStorage.removeItem('user');
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