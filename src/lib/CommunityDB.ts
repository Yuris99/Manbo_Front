import FreePost from "@/assets/testdata/freedata";
import { UserData } from "../providers/UserProvider";
import { Coordinate, Post, User } from "../types";

const furl = 'http://58.76.163.10:8080/api/freeboard';


type Member = {
  mid: string;
}
type UploadTrailData = {
  member: Member;
  startLocation: string;
  trailName: string;
  endDate: string;
  distance: number;
}
type UploadRouteData = {
  trailId: number;
  timeIDX: number;
  latitude: number;
  longitude: number;
}

const getFreeListByMid = async(email: string) => {
  const response = await fetch(furl+'/list');
  const free = await response.json();
  const ret = free.filter((data: any) => data.member.mid == email)
  .sort((a: any, b: any) => (b.fbid-a.fbid));
  return ret;
}
const getFreebyPid = async(pid: number) => {
  const response = await fetch(furl+'/' + pid);
  const free = await response.json();
  return await free;
}
const getAllFreeList = async() => {
  try {
    const response = await fetch(furl+'/list');
    const free = await response.json();
    const ret = free.content
    .sort((a: any, b: any) => (b.fbid-a.fbid));
    return ret;
  } catch(err) {
    console.error("error in CommunityDB/getAllFreeList: " + err);
  }
  return [];
}
const freeObjToTypeList = async(obj: any) => {
  try {
    const ret:Post = obj.map((data: any) => ({
      type: 'Free',
      id: data.fbid,
      username: data.member.name,
      trail_id: null,
      title: data.fbtitle,
      content: data.fbcontent,
      created: new Date(data.createdDate),
      view: data.fbhit,
      like: data.like,
    }));
    return ret;
  }catch(err) {
    console.error("error in CommunityDB/freeObjToTypeList: " + err);
  }
  return [];
}
const freeObjToType = async(obj: any) => {
  try {
    console.log(obj);
    const ret:Post = {
      type: 'Free',
      id: obj.fbid,
      username: obj.member.name,
      trail_id: null,
      title: obj.fbtitle,
      content: obj.fbcontent,
      created: new Date(obj.createdDate),
      view: obj.fbhit,
      like: obj.like,
    };
    return ret;
  }catch(err) {
    console.error("error in CommunityDB/freeObjToType: " + err);
  }
  return FreePost[0];
}


export {freeObjToTypeList, getAllFreeList, getFreebyPid, freeObjToType};