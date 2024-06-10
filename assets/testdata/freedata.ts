import { Post, Room } from "@/src/types";
import dayjs from 'dayjs';

const now = dayjs();

const FreePost : Post[] = [
    {
        type: 'Free',
        id: 0,
        username: "박성준",
        trail_id: null,
        title: "성준이는 정말 대단해",
        content: "소프트의 자랑 보안의 박성준은 많은 상을 받았다",
        created: now.subtract(50, 'hour').toDate(),
        view: 35,
        like: 1,
    },
    {
        type: 'Free',
        id: 1,
        username: "이상현",
        trail_id: null,
        title: "상현이의 행복한 학교생활",
        content: "20201750 이상현은 숭실대 생활에 만족하고 다양한 친구들을 사귀면서 많은 동아리 활동을 하고있다.\n그렇다\n",
        created: now.subtract(33, 'hour').toDate(),
        view: 55,
        like: 2,
    },
    {
        type: 'Free',
        id: 2,
        username: "김호중",
        trail_id: null,
        title: "세번째 게시글 내용 (필독)(개꿀잼)",
        content: "김호중 파이팅 \n\n\n\n\n\n\n\n\n\n\\n\n\n\n\n\n\n\n\n 해라",
        created: now.subtract(12, 'hour').toDate(),
        view: 128,
        like: 3,
    },
];


export default FreePost;