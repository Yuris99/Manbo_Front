import { Room } from "@/src/types";
import dayjs from 'dayjs';

const now = dayjs();

const RoomList : Room[] = [
    {
        id: 0,
        host_id: 1,
        trail_id: 1,
        name: "숭실대 같이 산책하실분~",
        content: "모임 설명란이에요",
        maximum: 4,
        meettime: now.add(12, 'hour').toDate(),
        state: 'Open',
        membercnt: 2,
        roomTags: ["숭실대", "상도동"],
    },
    {
        id: 1,
        host_id: 1,
        trail_id: 2,
        name: "정보섬에 계시는 여러분들 가끔씩은 한번씩 밖에 나가서 신선한 공기도 마시고 해야죠...",
        content: "사실 저도 바빠서 못하네요.",
        maximum: 8,
        meettime: now.add(20, 'minute').toDate(),
        state: 'Open',
        membercnt: 4,
        roomTags: ["정보섬", "숭실대"],
    },
    {
        id: 2,
        host_id: 2,
        trail_id: 0,
        name: "모임 입니다",
        content: "안녕하세요",
        maximum: 2,
        meettime: now.add(5, 'hour').toDate(),
        state: 'Open',
        membercnt: 1,
        roomTags: [],
    },
];

export default RoomList;