import { Room } from "@/src/types";
import dayjs from 'dayjs';

const now = dayjs();

const RoomList : Room[] = [
    {
        id: 0,
        host_id: 1,
        trail_id: 1,
        name: "모임 이름입니당",
        content: "모임설명입니당",
        maximum: 4,
        meettime: now.add(110, 'hour').toDate(),
        state: 'Open',
        membercnt: 2,
    },
    {
        id: 1,
        host_id: 1,
        trail_id: 2,
        name: "모임임제목이 존나 길면 어떻게 되려나?????어디까지길어지는rjdpdyd",
        content: "모임설명이존나긴거도테스트해봐야하는데 뭘 써야할지 모르겠네\n\n줄바꿈표도 사용 가능하려나? 잘될지 모르겠네 제발 살려주ㅏ 응애sdafasdfdsafjasdfkjladsgbwakjgnadskgsadfkajsdlfsadfjsakdlfkjasdflaksjdfadslkjfasdlkfjasdlfkjdsalkfjasdlkfjasdlfkjlkjdsaflasdkjfsadlkjfsad lkjf asdfklj sadf jksadflj sadfjsadfksad jfldksj asdljkf asdjkf laskjhfasdlkjhflksadj hfadslkjfhasdlkjfhasdkfljahfsdlkjafdhlasdkfjsadhflkjdsafhsadkljfhdsafkljasdfhkjasdfhsdalkjfhsadkljfhsdafilkj",
        maximum: 8,
        meettime: now.add(11, 'hour').toDate(),
        state: 'Open',
        membercnt: 4,
    },
];

export default RoomList;