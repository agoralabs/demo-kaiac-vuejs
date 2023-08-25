const axios = require('axios');

export async function getToken() {

    try{
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/login`);
        return response.data;
    }catch(e){
        console.log(e);
        return [
          {
          "access_token": "1|rb1x2kFmX9hdveiEVymfhjaLpfhjXEkla5v4iAcH",
          "token_type": "Bearer"
      }];
    }
}
