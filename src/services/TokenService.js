const axios = require('axios');

export async function getTokenFromServer() {

    try{
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/login`);
        const token = response.data;
        localStorage.setItem('access_token', token.access_token);
        localStorage.setItem('token_type', token.token_type);
        return token;
    }catch(e){
        console.log(e);
        var token = {
          "access_token": "1|rb1x2kFmX9hdveiEVymfhjaLpfhjXEkla5v4iAcH",
          "token_type": "Bearer"
        }
        return token;
    }
}


export function getTokenFromLocalStorage() {

  var token = {
    "access_token": localStorage.getItem('access_token'),
    "token_type": localStorage.getItem('token_type')
  }; 
  return token;
}