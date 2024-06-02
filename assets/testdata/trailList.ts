import { Trail } from "@/src/types"
import dayjs from 'dayjs';

const now = dayjs();

const Trails: Trail[] = [
    {
        id: 0,
        user_id: 1,
        startloc: "숭실대 정문",
        location: {
            city: "서울특별시",
            town: "동작구",
            village: "상도동",
        },
        name: "숭실대 산책로 1번",
        content: "숭실대 1번 산책로입니다~\n왠지 모르겠지만 사진ㅇ느 놀이공원이지만\n 생각보다 괜찮은듯?",
        walks: 55,
        rank: 9.2,
        created: now.subtract(32, 'days').toDate(),
        tags: ["tag1"],
        trailImgs: ['https://www.fao.org/images/newsroomlibraries/breafing-notes/36949400340_030e4ae5f9_oab4ccd35-fd6a-4230-bd2e-f0113f50357d.jpg?sfvrsn=426ca1c_3'],
        startcoord: {latitude: 37.4946, longitude: 126.9598},
    },
    {
        id: 1,
        user_id: 1,
        startloc: "숭실대 중문",
        location: {
            city: "서울특별시",
            town: "동작구",
            village: "상도동",
        },
        name: "숭실대 산책로 2번인데 산책로 제목이 무지뮞뮞ㅈ2ㅣㅇㄴㅁㄻㄴㅇㄹsadfsdafsdf 길어요",
        content: "숭실대 1번 산책로입니다~\n왠지 모르겠지만 사진ㅇ느 놀이공원이지만\n 생각보다 괜찮은듯?\n\n\n\n\n\n이건\n설명이\n쓸대없이\n엄청\n길어요\n!!!\n\n\n\n어떡하지?\n\n\n\n\n\n\n\n\n\n\n이렇게\n길이유가\n있나?\n너무\n긴데?",
        walks: 32,
        rank: 6,
        created: now.subtract(15, 'days').toDate(),
        tags: [],
        trailImgs: ['https://austinactivekids.com/wp-content/uploads/2020/01/IMG_0191-1536x1152.jpeg'],
        startcoord: {latitude: 37.4954, longitude: 126.9567},
    },
    {
        id: 2,
        user_id: 1,
        startloc: "숭실대 후문",
        location: {
            city: "서울특별시",
            town: "동작구",
            village: "상도동",
        },
        name: "숭실대 산책로 3번",
        content: "숭실대 1번 산책로입니다~\n왠지 모르겠지만 사진ㅇ느 놀이공원이지만\n 생각보다 괜찮은듯?",
        walks: 12,
        rank: 10,
        created: now.subtract(5, 'days').toDate(),
        tags: ["tag1", "tag2"],
        trailImgs: ['https://austinactivekids.com/wp-content/uploads/2020/01/2FC59971-A3F5-4C07-BFF4-439E8D663D0E-1536x1536.jpg'],
        startcoord: {latitude: 37.4971, longitude: 126.9531},
    },
    
];
export default Trails;