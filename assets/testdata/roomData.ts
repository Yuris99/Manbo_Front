import { Room } from "@/src/types";
import dayjs from 'dayjs';

const now = dayjs();

const RoomList : Room[] = [
    {
        id: 1,
        host_id: 1,
        trail_id: 1,
        name: "모임 이름입니당",
        content: "모임설명입니당",
        maximum: 4,
        meettime: now.add(110, 'hour').toDate(),
        state: 'Open',
        membercnt: 2,
    },
];

export default RoomList;