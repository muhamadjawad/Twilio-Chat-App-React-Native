import axios from 'axios';

export const getToken = (username) => {
  console.log(username);
  return axios.get(`http://192.168.1.100:3001/token/${username}`).then((twilioUser) => {
    console.log('twilioUser===>', twilioUser);
    return twilioUser.data.jwt;
  });
};
