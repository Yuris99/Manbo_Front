import { Trail, TrailPath } from "@/src/types"
import dayjs from 'dayjs';

const now = dayjs();

const Trails: Trail[] = [
    {
        id: 0,
        user_id: 2,
        user_name: "김호중",
        startloc: "숭실대 입구",
        location: {
            city: "서울특별시",
            town: "동작구",
            village: "상도동",
        },
        name: "숭실대 뒷 산 길",
        content: "여기 완전 숭실대치고 경사도 있고 걸을 거리도 있어서 가보기 좋아요! 우리학교에 이런 길이 있는지도 몰랐는데 이번 기회에 여러분도 이 길 한번 걸어보세요~",
        walks: 55,
        rank: 9.2,
        created: now.subtract(32, 'days').toDate(),
        tags: ["tag1"],
        trailImg: 'https://www.fao.org/images/newsroomlibraries/breafing-notes/36949400340_030e4ae5f9_oab4ccd35-fd6a-4230-bd2e-f0113f50357d.jpg?sfvrsn=426ca1c_3',
        startcoord: {latitude: 37.4946, longitude: 126.9598},
    },
    {
        id: 1,
        user_id: 1,
        user_name: "숭실대생2",
        startloc: "숭실대 중문",
        location: {
            city: "서울특별시",
            town: "동작구",
            village: "상도동",
        },
        name: "숭실대 고민사거리",
        content: "숭실대생이라면 이 거리를 걷는건 무조건이죠! 항상 밥 고민할때마다 걷는 길이지만 산책을 해보면서 걸으면 조금 더 다른 느낌을 느끼실 수도있을거에요~!",
        walks: 32,
        rank: 6,
        created: now.subtract(15, 'days').toDate(),
        tags: [],
        trailImg: 'https://austinactivekids.com/wp-content/uploads/2020/01/IMG_0191-1536x1152.jpeg',
        startcoord: {latitude: 37.4954, longitude: 126.9567},
    },
    {
        id: 2,
        user_id: 1,
        user_name: "보라매주민",
        startloc: "숭실대 후문",
        location: {
            city: "서울특별시",
            town: "동작구",
            village: "상도동",
        },
        name: "숭실대 산책로 3번",
        content: "숭실대 1번 산책로입니다~\n외국 사진 같지만 한국에 있는 곳이랍니다.\n\n\n\n\n\n\n거짓말",
        walks: 12,
        rank: 10,
        created: now.subtract(5, 'days').toDate(),
        tags: ["tag1", "tag2"],
        trailImg: 'https://austinactivekids.com/wp-content/uploads/2020/01/2FC59971-A3F5-4C07-BFF4-439E8D663D0E-1536x1536.jpg',
        startcoord: {latitude: 37.4971, longitude: 126.9531},
    },
    
];
export default Trails;