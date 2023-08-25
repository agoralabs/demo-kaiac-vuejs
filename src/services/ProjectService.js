const axios = require('axios');
import { getTokenFromLocalStorage } from './TokenService'

export async function getAllProjects() {

    try{
        var token = getTokenFromLocalStorage();
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/tasks`, {
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
          "message": "Tasks",
          "response": [
              {
                  "id": 1,
                  "user_id": 1,
                  "name": "IMDB",
                  "priority": "2",
                  "status": "overdue",
                  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                  "scheduled_at": "2023-08-24 23:18:50",
                  "created_at": "2023-08-24T23:18:50.000000Z",
                  "updated_at": "2023-08-24T23:18:50.000000Z",
                  "responsible": {
                      "id": 1,
                      "name": "Cathy",
                      "lastname": "Coulaly",
                      "email": "cathy.coulaly@agoralabs.org",
                      "email_verified_at": "2023-08-24T23:18:49.000000Z",
                      "avatar": "/team-member-1.jpg",
                      "created_at": "2023-08-24T23:18:49.000000Z",
                      "updated_at": "2023-08-24T23:18:49.000000Z"
                  }
              },
              {
                  "id": 2,
                  "user_id": 2,
                  "name": "Frontend",
                  "priority": "2",
                  "status": "ongoing",
                  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                  "scheduled_at": "2023-08-24 23:18:50",
                  "created_at": "2023-08-24T23:18:50.000000Z",
                  "updated_at": "2023-08-24T23:18:50.000000Z",
                  "responsible": {
                      "id": 2,
                      "name": "Joseph",
                      "lastname": "Future",
                      "email": "joseph.future@agoralabs.org",
                      "email_verified_at": "2023-08-24T23:18:49.000000Z",
                      "avatar": "/team-member-2.jpg",
                      "created_at": "2023-08-24T23:18:49.000000Z",
                      "updated_at": "2023-08-24T23:18:49.000000Z"
                  }
              },
              {
                  "id": 3,
                  "user_id": 3,
                  "name": "Backend",
                  "priority": "2",
                  "status": "completed",
                  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                  "scheduled_at": "2023-08-24 23:18:50",
                  "created_at": "2023-08-24T23:18:50.000000Z",
                  "updated_at": "2023-08-24T23:18:50.000000Z",
                  "responsible": {
                      "id": 3,
                      "name": "Dorine",
                      "lastname": "Michou",
                      "email": "dorine.michou@agoralabs.org",
                      "email_verified_at": "2023-08-24T23:18:49.000000Z",
                      "avatar": "/team-member-3.jpg",
                      "created_at": "2023-08-24T23:18:49.000000Z",
                      "updated_at": "2023-08-24T23:18:49.000000Z"
                  }
              },
              {
                  "id": 4,
                  "user_id": 4,
                  "name": "Database",
                  "priority": "2",
                  "status": "ongoing",
                  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                  "scheduled_at": "2023-08-24 23:18:50",
                  "created_at": "2023-08-24T23:18:50.000000Z",
                  "updated_at": "2023-08-24T23:18:50.000000Z",
                  "responsible": {
                      "id": 4,
                      "name": "Wesley",
                      "lastname": "Weezy",
                      "email": "wesley.weezy@agoralabs.org",
                      "email_verified_at": "2023-08-24T23:18:49.000000Z",
                      "avatar": "/team-member-4.jpg",
                      "created_at": "2023-08-24T23:18:49.000000Z",
                      "updated_at": "2023-08-24T23:18:49.000000Z"
                  }
              }
          ]
      };
    }


}

export async function createProject(data) {

    const response = await axios.post(`${process.env.VUE_APP_API_URL}/api/v1/project`, {user: data});
    return response.data;
}