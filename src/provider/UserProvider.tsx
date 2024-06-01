import { View, Text } from 'react-native'
import React, { PropsWithChildren, createContext, useContext, useState } from 'react'
import { Loc, User } from '../types';
import RoomList from '@/assets/testdata/roomData';
import Users from '@/assets/testdata/users';

type UserType = {
  user: User | null;
  locate: Loc;
  login: (userid: number) => void;
  setloc: (selector: number, flow: string) => void;
};

const UserContext = createContext<UserType>({
  user: null,
  locate: {city:'', town:'', village:''},
  login: () => {},
  setloc: () => {},
});

const UserProvider = ({children}: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [locate, setLocate] = useState<Loc>({city:'도/특별시/광역시', town:'시/군/구', village:'읍/면/동'});

  const login = (userid: number) => {
    setUser(Users[userid]);
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


  return (
    <UserContext.Provider
      value={{user, locate, login, setloc}}>
        {children}
      </UserContext.Provider>
  )
}

export default UserProvider;

export const UserData = () => useContext(UserContext);