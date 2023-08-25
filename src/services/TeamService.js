const axios = require('axios');
import { getTokenFromLocalStorage } from './TokenService'

export async function getTeam() {

    try{
        var token = getTokenFromLocalStorage();

        const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/users`, {
          headers: {
            "Accept": "*/*",
            "Authorization" : `Bearer ${token.access_token}`
          },
        });
        return response.data;
    }catch(e){
        console.log(e);
        return {
          "status": true,
          "message": "Users",
          "response": [
              {
                  "id": 1,
                  "name": "Cathy",
                  "lastname": "Coulaly",
                  "email": "cathy.coulaly@agoralabs.org",
                  "email_verified_at": "2023-08-25T14:05:44.000000Z",
                  "avatar": "\/team-member-1.jpg",
                  "created_at": "2023-08-25T14:05:44.000000Z",
                  "updated_at": "2023-08-25T14:05:44.000000Z",
                  "job_roles": [
                      {
                          "id": 1,
                          "name": "Team Lead",
                          "created_at": "2023-08-25T14:05:44.000000Z",
                          "updated_at": "2023-08-25T14:05:44.000000Z",
                          "pivot": {
                              "user_id": 1,
                              "job_role_id": 1
                          }
                      }
                  ]
              },
              {
                  "id": 2,
                  "name": "Joseph",
                  "lastname": "Future",
                  "email": "joseph.future@agoralabs.org",
                  "email_verified_at": "2023-08-25T14:05:44.000000Z",
                  "avatar": "\/team-member-2.jpg",
                  "created_at": "2023-08-25T14:05:44.000000Z",
                  "updated_at": "2023-08-25T14:05:44.000000Z",
                  "job_roles": [
                      {
                          "id": 2,
                          "name": "Frontend Developer",
                          "created_at": "2023-08-25T14:05:44.000000Z",
                          "updated_at": "2023-08-25T14:05:44.000000Z",
                          "pivot": {
                              "user_id": 2,
                              "job_role_id": 2
                          }
                      }
                  ]
              },
              {
                  "id": 3,
                  "name": "Dorine",
                  "lastname": "Michou",
                  "email": "dorine.michou@agoralabs.org",
                  "email_verified_at": "2023-08-25T14:05:44.000000Z",
                  "avatar": "\/team-member-3.jpg",
                  "created_at": "2023-08-25T14:05:44.000000Z",
                  "updated_at": "2023-08-25T14:05:44.000000Z",
                  "job_roles": [
                      {
                          "id": 3,
                          "name": "Backend Developer",
                          "created_at": "2023-08-25T14:05:44.000000Z",
                          "updated_at": "2023-08-25T14:05:44.000000Z",
                          "pivot": {
                              "user_id": 3,
                              "job_role_id": 3
                          }
                      }
                  ]
              },
              {
                  "id": 4,
                  "name": "Wesley",
                  "lastname": "Weezy",
                  "email": "wesley.weezy@agoralabs.org",
                  "email_verified_at": "2023-08-25T14:05:44.000000Z",
                  "avatar": "\/team-member-4.jpg",
                  "created_at": "2023-08-25T14:05:44.000000Z",
                  "updated_at": "2023-08-25T14:05:44.000000Z",
                  "job_roles": [
                      {
                          "id": 5,
                          "name": "Full Stack Developer",
                          "created_at": "2023-08-25T14:05:44.000000Z",
                          "updated_at": "2023-08-25T14:05:44.000000Z",
                          "pivot": {
                              "user_id": 4,
                              "job_role_id": 5
                          }
                      }
                  ]
              },
              {
                  "id": 5,
                  "name": "Marie",
                  "lastname": "Jose",
                  "email": "marie.jo@agoralabs.org",
                  "email_verified_at": "2023-08-25T14:05:44.000000Z",
                  "avatar": "\/team-member-5.jpg",
                  "created_at": "2023-08-25T14:05:44.000000Z",
                  "updated_at": "2023-08-25T14:05:44.000000Z",
                  "job_roles": [
                      {
                          "id": 5,
                          "name": "Full Stack Developer",
                          "created_at": "2023-08-25T14:05:44.000000Z",
                          "updated_at": "2023-08-25T14:05:44.000000Z",
                          "pivot": {
                              "user_id": 5,
                              "job_role_id": 5
                          }
                      }
                  ]
              },
              {
                  "id": 6,
                  "name": "Charles",
                  "lastname": "Champ",
                  "email": "charles.champ@agoralabs.org",
                  "email_verified_at": "2023-08-25T14:05:44.000000Z",
                  "avatar": "\/team-member-6.jpg",
                  "created_at": "2023-08-25T14:05:44.000000Z",
                  "updated_at": "2023-08-25T14:05:44.000000Z",
                  "job_roles": [
                      {
                          "id": 6,
                          "name": "Sys Admin",
                          "created_at": "2023-08-25T14:05:44.000000Z",
                          "updated_at": "2023-08-25T14:05:44.000000Z",
                          "pivot": {
                              "user_id": 6,
                              "job_role_id": 6
                          }
                      }
                  ]
              },
              {
                  "id": 7,
                  "name": "Boris",
                  "lastname": "John",
                  "email": "boris.john@agoralabs.org",
                  "email_verified_at": "2023-08-25T14:05:44.000000Z",
                  "avatar": "\/team-member-7.jpg",
                  "created_at": "2023-08-25T14:05:44.000000Z",
                  "updated_at": "2023-08-25T14:05:44.000000Z",
                  "job_roles": [
                      {
                          "id": 7,
                          "name": "Product Owner",
                          "created_at": "2023-08-25T14:05:44.000000Z",
                          "updated_at": "2023-08-25T14:05:44.000000Z",
                          "pivot": {
                              "user_id": 7,
                              "job_role_id": 7
                          }
                      }
                  ]
              }
          ]
      };
    }


}
