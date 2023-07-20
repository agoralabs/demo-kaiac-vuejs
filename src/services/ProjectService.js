const axios = require('axios');

export async function getAllProjects() {

    try{
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/v1/projects`);
        return response.data;
    }catch(e){
        console.log(e);
        return [
            { id: 1, title: 'S-IMDB', name: 'Cathy Coulaly', due: '1st June 2023', status: 'overdue'},
            { id: 2, title: 'S-Front end', name: 'Joseph Future', due: '20th June 2023', status: 'ongoing'},
            { id: 3, title: 'S-Backend', name: 'Charles Pika', due: '10th June 2023', status: 'completed'},
            { id: 4, title: 'S-Database', name: 'Wesley Weezy', due: '1st July 2023', status: 'ongoing'},
        ];
    }


}

export async function createProject(data) {

    const response = await axios.post(`${process.env.VUE_APP_API_URL}/api/v1/project`, {user: data});
    return response.data;
}