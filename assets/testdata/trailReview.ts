import { Review, Trail } from "@/src/types"
import dayjs from 'dayjs';

const now = dayjs();

const Reviews: Review[] = [
    {
        id: 0,
        trail_id: 1,
        user_id: 0,
        score: 8,
        content: '좋은 산책로네요!',
        created: now.subtract(1, 'hour').toDate(),
    },
    {
        id: 1,
        trail_id: 1,
        user_id: 0,
        score: 10,
        content: '이 리뷰는\n매우매우\n깁니다\n어쩔껀데',
        created: now.subtract(3, 'hour').toDate(),
    }
]
export default Reviews;