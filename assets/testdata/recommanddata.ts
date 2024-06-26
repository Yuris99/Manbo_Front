import { Post, Room } from "@/src/types";
import dayjs from 'dayjs';

const now = dayjs();

const FreePost : Post[] = [
    {
        type: 'Free',
        id: 0,
        user_id: 1,
        trail_id: null,
        title: "첫번째 게시물",
        content: "첫번째 게시물 내용",
        created: now.subtract(50, 'hour').toDate(),
        view: 35,
        like: 1,
    },
    {
        type: 'Free',
        id: 1,
        user_id: 2,
        trail_id: null,
        title: "두번째 게시글 이다.",
        content: "두번째 게시글 내용입니다\n그렇다\n",
        created: now.subtract(33, 'hour').toDate(),
        view: 55,
        like: 0,
    },
    {
        type: 'Free',
        id: 2,
        user_id: 1,
        trail_id: null,
        title: "세번째 게시글 내용 (필독) (개꿀잼)",
        content: "김호중 파이팅 해라",
        created: now.subtract(12, 'hour').toDate(),
        view: 128,
        like: 3,
    },
];


const RecommandPost : Post[] = [
    {
        type: 'Recommend',
        id: 0,
        user_id: 1,
        trail_id: 1,
        title: "첫번째 게시물",
        content: "첫번째 게시물 내용",
        created: now.subtract(50, 'hour').toDate(),
        view: 35,
        like: 1,
    },
    {
        type: 'Recommend',
        id: 1,
        user_id: 2,
        trail_id: 0,
        title: "두번째 게시글 이다.",
        content: "두번째 게시글 내용입니다\n그렇다\n",
        created: now.subtract(33, 'hour').toDate(),
        view: 55,
        like: 0,
    },
    {
        type: 'Recommend',
        id: 2,
        user_id: 1,
        trail_id: 2,
        title: "세번째 게시글 내용 (필독) (개꿀잼)",
        content: "김호중 파이팅 해라",
        created: now.subtract(12, 'hour').toDate(),
        view: 128,
        like: 3,
    },
];

const Announcement : Post[] = [
    {
        type: 'Announcement',
        id: 0,
        user_id: 1,
        trail_id: null,
        title: "공지사항이다",
        content: "김호중 열심히 해라",
        created: now.subtract(50, 'hour').toDate(),
        view: 35,
        like: 1,
    },
    {
        type: 'Announcement',
        id: 1,
        user_id: 2,
        trail_id: null,
        title: "두번째 게시글 이다.",
        content: "두번째 게시글 내용입니다\n그렇다\n",
        created: now.subtract(33, 'hour').toDate(),
        view: 55,
        like: 0,
    },
];


export default RecommandPost;