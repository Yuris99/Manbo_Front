import { UserData } from "../providers/UserProvider";
import { Coordinate, User } from "../types";

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
    console.log("trailUpload test");
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

export {uploadTrailAndRoute};