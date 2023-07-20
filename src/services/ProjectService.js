const axios = require('axios');

export async function getAllProjects() {

    const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/projects`);
    return response.data;

}

export async function createProject(data) {

    const response = await axios.post(`${process.env.VUE_APP_API_URL}/api/v1/project`, {user: data});
    return response.data;
}