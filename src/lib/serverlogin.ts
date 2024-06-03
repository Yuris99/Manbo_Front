
const url = 'http://58.76.163.10:8080/api/v1';

const isExistEmail = async(email: string) => {
  const response = await fetch(url+'/members/list');
  const users = await response.json();
  return (users.filter(data => data.email == email).length > 0 ? true : false);
};

type Logindata = {
  email: string;
  password: string;
}

const logincheck = async(email: string, password: string) => {  
  const logindata: Logindata = {email, password};
  
  const response = await fetch(url+'/members/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(logindata),
  });
  console.log(response);
  if(response.ok == true)
    return true;
  else return false;
}

export {isExistEmail, logincheck};