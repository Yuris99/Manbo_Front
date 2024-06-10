import { UserData } from "../providers/UserProvider";
import { Coordinate, Trail, User } from "../types";

const turl = 'http://58.76.163.10:8080/api/trails';
const rurl = 'http://58.76.163.10:8080/api/routes';


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

const getTrailListByMid = async(email: string) => {
  const response = await fetch(turl+'/list');
  const trails = await response.json();
  const ret = trails.filter((data: any) => data.member.mid == email)
  .sort((a: any, b: any) => (b.trailId-a.trailId));
  return ret;
}
const getAllRoutebyTid = async(tid: number) => {
  try {
    const response = await fetch(rurl+'/'+tid);
    const route = await response.json();
    if(Array.isArray(route)) {
      const tmp = route.sort((a:any,b:any) => (a.timeIDX-b.timeIDX));
      const ret:Coordinate[] = tmp.map((data: any) => ({
        latitude: data.latitude,
        longitude: data.longitude,
      }));
      return ret;
    } else {
      console.log(route);
    }
  } catch(err) {
    console.error("error in TrailDB/getAllRoute: " + err);
  }
  return [];
}
const getAllTrailList = async() => {
  try {
    const response = await fetch(turl+'/list');
    const trails = await response.json();
    const ret = trails
    .sort((a: any, b: any) => (b.trailId-a.trailId));
    return ret;
  } catch(err) {
    console.error("error in TrailDB/getAllTrailList: " + err);
  }
  return [];
}
const trailObjToTypeList = async(obj: any) => {
  try {
    const ret:Trail[] = obj.map((data: any) => ({
      id: data.trailId,
      user_id: data.member.memberId,
      username: data.member.name,
      location: {city: "서울특별시", town: "동작구", village: "상도동"},
      name: data.trailName,
      content: data.startLocation,
      walks: 0,
      rank: 0,
      created: data.createdDate,
      trailImg: "https://hips.hearstapps.com/hmg-prod/images/magical-forests-uk-65c63afd52556.jpg?crop=1.00xw:0.751xh;0,0.141xh&resize=1200:*",
    }));
    return ret;
  }catch(err) {
    console.error("error in TrailDB/trailObjToTypeList: " + err);
  }
  return [];
}

const uploadTrailAndRoute = async(email: string, routelist: Coordinate[], distance: number, endDate: Date) => {
  try {
    const postData: UploadTrailData = {member: {mid:email}, startLocation: "", trailName: "", endDate: endDate.toISOString(), distance}
    console.log(postData);
    const response = await fetch(turl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    console.log(response);
    if(response.ok ==false) return;
    const trails = await getTrailListByMid(email);
    const tid = trails[0].trailId;
    //console.log(trails);
    const routeData: UploadRouteData[] = routelist.map((coordinate, index) => ({
      trailId: tid,
      timeIDX: index + 1,
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    }));
    console.log(routeData);
    const responseRoute = await fetch(rurl + '/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(routeData),
    });
    console.log(responseRoute);
    return;
  } catch(err) {
    console.error(err);
  }
}

export {uploadTrailAndRoute, getAllTrailList, trailObjToTypeList, getTrailListByMid, getAllRoutebyTid};