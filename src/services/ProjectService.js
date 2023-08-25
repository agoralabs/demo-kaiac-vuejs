const axios = require('axios');

export async function getAllProjects() {

    try{
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/projects`, {
          headers: {
            "User-Agent": "PostmanRuntime/7.32.3"
          },
        });
        return response.data;
    }catch(e){
        console.log(e);
        return [
            {
              "id": 1,
              "title": "V-IMDB",
              "due": "2023-06-01 19:51:48",
              "status": "overdue",
              "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit",
              "responsible": {
                "id": 1,
                "firstname": "Cathy",
                "surname": "Coulaly",
                "avatar": "/team-member-1.jpg",
                "email": "cathy.coulaly@agoralabs.org",
                "jobRoles": [
                  {
                    "id": 1,
                    "name": "Team Lead"
                  }
                ]
              }
            },
            {
              "id": 2,
              "title": "V-Frontend",
              "due": "2023-06-20 19:51:48",
              "status": "ongoing",
              "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit",
              "responsible": {
                "id": 2,
                "firstname": "Joseph",
                "surname": "Future",
                "avatar": "/team-member-2.jpg",
                "email": "joseph.future@agoralabs.org",
                "jobRoles": [
                  {
                    "id": 2,
                    "name": "Frontend Developer"
                  }
                ]
              }
            },
            {
              "id": 3,
              "title": "V-Backend",
              "due": "2023-06-10 19:51:48",
              "status": "completed",
              "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit",
              "responsible": {
                "id": 3,
                "firstname": "Dorine",
                "surname": "Michou",
                "avatar": "/team-member-3.jpg",
                "email": "dorine.michou@agoralabs.org",
                "jobRoles": [
                  {
                    "id": 3,
                    "name": "Backend Developer"
                  }
                ]
              }
            },
            {
              "id": 4,
              "title": "V-Database",
              "due": "2023-07-01 19:51:48",
              "status": "ongoing",
              "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit",
              "responsible": {
                "id": 4,
                "firstname": "Wesley",
                "surname": "Weezy",
                "avatar": "/team-member-4.jpg",
                "email": "wesley.weezy@agoralabs.org",
                "jobRoles": [
                  {
                    "id": 5,
                    "name": "Full Stack Developer"
                  }
                ]
              }
            }
          ];
    }


}

export async function createProject(data) {

    const response = await axios.post(`${process.env.VUE_APP_API_URL}/api/v1/project`, {user: data});
    return response.data;
}