const axios = require('axios');

export async function getAllProjects() {

    const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/projects`);
    return response.data;


    // projects: [
    //     { id: 1, title: 'IMDB', name: 'Cathy Coulaly', due: '1st June 2023', status: 'overdue'},
    //     { id: 2, title: 'Front end', name: 'Joseph Future', due: '20th June 2023', status: 'ongoing'},
    //     { id: 3, title: 'Backend', name: 'Charles Pika', due: '10th June 2023', status: 'completed'},
    //     { id: 4, title: 'Database', name: 'Wesley Weezy', due: '1st July 2023', status: 'ongoing'},
    // ]
}

export async function createProject(data) {

    const response = await axios.post(`${process.env.VUE_APP_API_URL}/api/v1/project`, {user: data});
    return response.data;
}