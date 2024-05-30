import { View, Text } from 'react-native'
import React, { PropsWithChildren, createContext, useState } from 'react'
import { Room } from '../types';
import RoomList from '@/assets/testdata/roomData';

type RoomType = {
  room: Room | null;
  joinRoom: (roomid: number) => void;
  leftRoom: () => void;
};

const RoomContext = createContext<RoomType>({
  room: null,
  joinRoom: () => {},
  leftRoom: () => {},
});

const RoomProvider = ({children}: PropsWithChildren) => {
  const [room, setRoom] = useState<Room | null>(null);
  const joinRoom = (roomid: number) => {
    setRoom(RoomList[roomid]);
  };
  const leftRoom = () => {
    setRoom(null);
  };

  return (
    <RoomContext.Provider
      value={{room, joinRoom, leftRoom}}>
        {children}
      </RoomContext.Provider>
  )
}

export default RoomProvider;