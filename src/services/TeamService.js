const axios = require('axios');
import { getTokenFromLocalStorage } from './TokenService'

export async function getTeam() {

    try{
        var token = getTokenFromLocalStorage();
        
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/users`, {
          headers: {
            "Accept": "*/*",
            "Bearer" : `${token.access_token}`
          },
        });
        return response.data;
    }catch(e){
        console.log(e);
        return [
          {
            "id": 1,
            "firstname": "V-Cathy",
            "surname": "Coulaly",
            "avatar": "/team-member-1.jpg",
            "email": "cathy.coulaly@agoralabs.org",
            "jobRoles": [
              {
                "id": 1,
                "name": "Team Lead"
              }
            ]
          },
          {
            "id": 2,
            "firstname": "V-Joseph",
            "surname": "Future",
            "avatar": "/team-member-2.jpg",
            "email": "joseph.future@agoralabs.org",
            "jobRoles": [
              {
                "id": 2,
                "name": "Frontend Developer"
              }
            ]
          },
          {
            "id": 3,
            "firstname": "V-Dorine",
            "surname": "Michou",
            "avatar": "/team-member-3.jpg",
            "email": "dorine.michou@agoralabs.org",
            "jobRoles": [
              {
                "id": 3,
                "name": "Backend Developer"
              }
            ]
          },
          {
            "id": 4,
            "firstname": "V-Wesley",
            "surname": "Weezy",
            "avatar": "/team-member-4.jpg",
            "email": "wesley.weezy@agoralabs.org",
            "jobRoles": [
              {
                "id": 5,
                "name": "Full Stack Developer"
              }
            ]
          },
          {
            "id": 5,
            "firstname": "V-Marie",
            "surname": "Jo",
            "avatar": "/team-member-5.jpg",
            "email": "marie.jo@agoralabs.org",
            "jobRoles": [
              {
                "id": 5,
                "name": "Full Stack Developer"
              }
            ]
          },
          {
            "id": 6,
            "firstname": "V-Charles",
            "surname": "Pika",
            "avatar": "/team-member-6.jpg",
            "email": "charles.pika@agoralabs.org",
            "jobRoles": [
              {
                "id": 6,
                "name": "Sys Admin"
              }
            ]
          },
          {
            "id": 7,
            "firstname": "V-Boris",
            "surname": "John",
            "avatar": "/team-member-7.jpg",
            "email": "boris.john@agoralabs.org",
            "jobRoles": [
              {
                "id": 7,
                "name": "Product Owner"
              }
            ]
          }
        ];
    }


}
