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
        rank: 1,
        created: now.subtract(32, 'days').toISOString(),
        tags: ["tag1"],
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
        rank: 2,
        created: now.subtract(15, 'days').toISOString(),
        tags: [],
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
        rank: 3,
        created: now.subtract(5, 'days').toISOString(),
        tags: ["tag1", "tag2"],
    },
    
]