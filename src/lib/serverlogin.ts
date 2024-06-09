import { User } from "../types";

const url = 'http://58.76.163.10:8080/api/v1';

const isExistEmail = async(email: string) => {
  try {
    const response = await fetch(url+'/members/list');
    const users = await response.json();
    return (users.filter(data => data.email == email).length > 0 ? true : false);
  } catch(err) {
    console.error(err);
    return false;
  }
};

type Logindata = {
  mid: string;
  password: string;
}
type Joindata = {
  mid: string;
  email: string;
  password: string;
  name: string;
}
const logincheck = async(email: string, password: string) => {  
  const logindata: Logindata = {mid: email, password};
  console.log(logindata);
  try {
    const response = await fetch(url+'/members/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logindata),
    });
    console.log("logincheck test");
    console.log(response.ok);
    if(response.ok == true)
      return true;
    else return false;
  } catch(err) {
      console.error(err);
      return false;
  }
}

const join = async(user: User) => {
  const joindata: Joindata = {mid:user.email, password: user.pw, email: user.email, name: user.username};
  const response = await fetch(url+'/members/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(joindata),
  });
  console.log(response);
  if(response.ok == true)
    return true;
  else return false;
};

const getusernamebyid = async(userid: number) => {
  const response = await fetch(url+'/members/list');
  const users = await response.json();
  console.log(response);
  console.log(users);
  console.log(users.filter(data => data.memberId == userid)[0].name);
  return (users.filter(data => data.memberId == userid).length > 0 ? users.filter(data => data.memberId == userid)[0].name : "");
};
const getUserDataByMID = async(mid: string) => {
  const response = await fetch(url+'/members/list');
  const users = await response.json();
  console.log(response);
  console.log(users);
  console.log(users.filter(data => data.mid == mid)[0].name);
  return (users.filter(data => data.mid == mid).length > 0 ? users.filter(data => data.mid == mid)[0] : "");
};

export {isExistEmail, logincheck, join, getusernamebyid, getUserDataByMID};