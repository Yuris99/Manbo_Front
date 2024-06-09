import { View, Text } from 'react-native'
import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
import { Loc, User } from '../types';
import RoomList from '@/assets/testdata/roomData';
import { Region } from '@mj-studio/react-native-naver-map';
import { Accuracy, getCurrentPositionAsync, requestForegroundPermissionsAsync, useBackgroundPermissions, useForegroundPermissions } from 'expo-location';
import { getUserDataByMID, logincheck } from '../lib/serverlogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserType = {
  user: User;
  locate: Loc;
  coordinate: Region;
  login: (email: string, password: string) => Promise<boolean>;
  setuser: (userdata: User) => void;
  logout: () => void;
  setloc: (selector: number, flow: string) => void;
  getCoordinate: () => void;
};

// 초기 Context 값 설정
const initialUserState: User = { id: -1, email: "", username: "", pw: "", age: 0, gender: "M", islogin: false };
const initialLocState: Loc = { city: '', town: '', village: '' };
const initialCoordinateState: Region = { latitude: 37.551180, longitude: 127.001610, latitudeDelta: 0, longitudeDelta: 0 };

const UserContext = createContext<UserType>({
  user: {id: -1, email: "", username: "", pw: "", age: 0, gender: "M", islogin: false},
  locate: {city:'', town:'', village:''},
  coordinate: {latitude: 37.551180, longitude: 127.001610, latitudeDelta: 0, longitudeDelta: 0},
  login: () => Promise.resolve(true),
  setuser: () => {},
  setloc: () => {},
  logout: () => {},
  getCoordinate: () => {},
});

const UserProvider = ({children}: PropsWithChildren) => {
  const [user, setUser] = useState<User>(initialUserState);
  const [locate, setLocate] = useState<Loc>(initialLocState);
  const [coordinate, setCoordinate] = useState<Region>(initialCoordinateState);
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
          setUser({...user, islogin: true})
        }
      } catch (error) {
        console.error('Failed to load user data', error);
      }
    };
    loadUserData();
  }, []);
  useEffect(() => {
    console.log("User state updated:", user);
  }, [user]);
  useEffect(() => {
    console.log("Locate state updated:", locate);
  }, [locate]);
  useEffect(() => {
    console.log("Coordinate state updated:", coordinate);
  }, [coordinate]);

  const login = async (email: string, password: string): Promise<boolean> => {
    const returndata = await logincheck(email, password);
    if(returndata != true) {
      return false;
    }
    const userdata = await getUserDataByMID(email);
    console.log("udate");
    console.log(userdata);
    setUser({id: userdata.memberId, username: userdata.name, email: userdata.email, gender: 'M', pw: "", age: 24, islogin: true});
    await AsyncStorage.setItem('user', JSON.stringify(user));
    console.log(user);
    return true;
  };
  const setuser = (userdata: User) => {
    setUser(userdata);
  }
  
  const logout = async() => {
    setUser(initialUserState);
    await AsyncStorage.removeItem('user');
  };

  const setloc = (selector: number, flow: string) => {
    console.log(selector, flow);
    if(selector == 0) {
      setLocate({...locate, city: flow});
    } else if(selector == 1) {
      setLocate({...locate, town: flow});
    } else if(selector == 2) {
      setLocate({...locate, village: flow});
    }
    return;
  }

  const getCoordinate = async () => {
    console.log("getcoordinate");
    const {status} = await requestForegroundPermissionsAsync();
    if(status !== 'granted') {
      console.error("권한 허용 안됨!");
      return;
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
  );
};

export default UserProvider;

export const UserData = () => useContext(UserContext);