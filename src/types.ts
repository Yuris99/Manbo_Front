/** 사용자 데이터 타입
 * 
 * @property {number} id - 유저id(db식별번호, 가려짐)
 * @property {string} username - 유저 닉네임
 * @property {string} email - 유저 이메일(로그인 아이디)
 * @property {string} gender - 성별 (M | F)
 * @property {number} age - 나이
 */
export type User = {
    id: number;
    username: string;
    email: string;
    gender: string;
    age: number;
};

/** 주소 설정 데이터 타입 (enum으로 바꿀 예정)
 * 
 * @property {string} city - 시
 * @property {string} town - 군
 * @property {string} village - 구
 */
export type Loc = {
    city: string;
    town: string;
    village: string;
};


/** 산책로 태그 Enum
 *  추가예정
 */
export type TrailTag = 'tag1' | 'tag2';


/** 산책로 통합 데이터타입
 * 
 * @property {number} id - 산책로 id
 * @property {number} user_id - 제작자 id
 * @property {string} startloc - 시작위치(좌표값)
 * @property {Loc} location - 산책로 위치(시군구)
 * @property {string} name - 산책로 이름
 * @property {string} content - 산책로 설명
 * @property {number} walks - 산책로 이용 횟수
 * @property {number} rank - 산책로 평점
 * @property {number} created - 등록일
 * @property {TrailTag[]} tags - 산책로 태그 리스트
 */
export type Trail = {
    id: number;
    user_id: number;
    startloc: string;
    location: Loc;
    name: string;
    content: string;
    walks: number;
    rank: number;
    created: Date;
    tags: TrailTag[];
    trailImgs: string[];
};

/** 게시글 종류 ENUM
 * 
 */
export type PostType = 'Free' | 'Recommend' | "Announcement";

/** 게시글 통합 데이터타입
 * 
 * @property {PostType} type - 게시글 종류 ('Free' | 'Recommend' | "Announcement")
 * @property {number} id - 게시글 id
 * @property {number} user_id - 작성자 id
 * @property {number} trail_id - 산책로 id (Recommend 게시판에서만 사용)
 * @property {string} title - 게시글 제목
 * @property {string} content - 게시글 내용
 * @property {Date} created - 게시 날짜 및 시간
 * @property {number} view - 조회수
 * @property {number} like - 좋아요수
 */
export type Post = {
    type: PostType;
    id: number;
    user_id: number;
    trail_id: number | null;
    title: string;
    content: string;
    created: Date;
    view: number;
    like: number;
};

/** 댓글 통합 데이터타입
 * 
 * @property {PostType} type - 게시글 종류 ('Free' | 'Recommend' | "Announcement")
 * @property {number} id - 댓글 id
 * @property {number} post_id - 게시글 id
 * @property {number} user_id - 작성자 id
 * @property {string} content - 댓글 내용
 * @property {Date} created - 댓글 게시 날짜 및 시간
 */
export type Comment = {
    type: PostType;
    id: number;
    post_id: number;
    user_id: number;
    content: string;
    created: Date;
};

/** 이미지 통합 데이터타입
 * 
 * @property {PostType} type - 게시글 종류 ('Free' | 'Recommend' | "Announcement")
 * @property {number} post_id - 게시글 id
 * @property {string} file_path - 이미지 주소
 */
export type PostImage = {
    type: PostType;
    post_id: number;
    file_path: string;
};

/** 그룹 상태 ENUM
 * 
 */
export type RoomState = 'Open' | 'Full' | 'Walking' | 'Close';

/** 그룹 데이터타입
 * 
 * @property {number} id - 방번호
 * @property {number} host_id - 주최자 id
 * @property {number} trail_id - 산책로 id
 * @property {string} name - 방 이름
 * @property {string} content - 방 설명
 * @property {number} maximum - 최대인원
 * @property {Date} meettime - 모임날짜
 * @property {RoomState} state - 방상태
 */
export type Room = {
    id: number;
    host_id: number;
    trail_id: number;
    name: string;
    content: string;
    maximum: number;
    meettime: Date;
    state: RoomState;
    membercnt: number;
    roomTags: string[];
}