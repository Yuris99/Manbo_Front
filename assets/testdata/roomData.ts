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
        roomTags: ["keyword"],
    },
    {
        id: 1,
        host_id: 1,
        trail_id: 2,
        name: "모임임제목이 존나 길면 어떻게 되려나?????어디까지길어지는rjdpdyd",
        content: "모임설명이존나긴거도테스트해봐야하는데 뭘 써야할지 모르겠네\n\n줄바꿈표도 사용 가능하려나? 잘될지 모르겠네 제발 살려주ㅏ 응애sdafasdfdsafjasdfkjladsgbwakjgnadskgsadfkajsdlfsadfjsakdlfkjasdflaksjdfadslkjfasdlkfjasdlfkjdsalkfjasdlkfjasdlfkjlkjdsaflasdkjfsadlkjfsad lkjf asdfklj sadf jksadflj sadfjsadfksad jfldksj asdljkf asdjkf laskjhfasdlkjhflksadj hfadslkjfhasdlkjfhasdkfljahfsdlkjafdhlasdkfjsadhflkjdsafhsadkljfhdsafkljasdfhkjasdfhsdalkjfhsadkljfhsdafilkj",
        maximum: 8,
        meettime: now.add(5, 'second').toDate(),
        state: 'Open',
        membercnt: 4,
        roomTags: ["태그도", "존나많아지면", "어떻게되려나?", "그냥", "아주아주", "많아지면?"],
    },
    {
        id: 2,
        host_id: 2,
        trail_id: 0,
        name: "제목쓰기귀찮",
        content: "설명도 쓰기 귀찮",
        maximum: 2,
        meettime: now.add(11, 'hour').toDate(),
        state: 'Open',
        membercnt: 1,
        roomTags: [],
    },
];

export default RoomList;