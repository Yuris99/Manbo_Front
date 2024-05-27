import { Trail } from "@/src/types"
import dayjs from 'dayjs';

const now = dayjs();

const Trails: Trail[] = [
    {
        id: 1,
        user_id: 1,
        startloc: "숭실대 정문",
        location: {
            city: "서울특별시",
            town: "동작구",
            village: "상도동",
        },
        name: "숭실대 산책로 1번",
        walks: 55,
        rank: 9.2,
        created: now.subtract(32, 'days').toDate(),
        tags: ["tag1"],
        trailImgs: ['https://www.fao.org/images/newsroomlibraries/breafing-notes/36949400340_030e4ae5f9_oab4ccd35-fd6a-4230-bd2e-f0113f50357d.jpg?sfvrsn=426ca1c_3'],
    },
    {
        id: 2,
        user_id: 1,
        startloc: "숭실대 중문",
        location: {
            city: "서울특별시",
            town: "동작구",
            village: "상도동",
        },
        name: "숭실대 산책로 2번",
        walks: 32,
        rank: 6,
        created: now.subtract(15, 'days').toDate(),
        tags: [],
        trailImgs: ['https://austinactivekids.com/wp-content/uploads/2020/01/IMG_0191-1536x1152.jpeg'],
    },
    {
        id: 3,
        user_id: 1,
        startloc: "숭실대 후문",
        location: {
            city: "서울특별시",
            town: "동작구",
            village: "상도동",
        },
        name: "숭실대 산책로 3번",
        walks: 12,
        rank: 10,
        created: now.subtract(5, 'days').toDate(),
        tags: ["tag1", "tag2"],
        trailImgs: ['https://austinactivekids.com/wp-content/uploads/2020/01/2FC59971-A3F5-4C07-BFF4-439E8D663D0E-1536x1536.jpg'],
    },
    
];
export default Trails;