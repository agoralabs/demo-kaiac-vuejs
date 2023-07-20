
export function getAllProjectsStatic() {

    return [
         { id: 1, title: 'S-IMDB', name: 'Cathy Coulaly', due: '1st June 2023', status: 'overdue'},
         { id: 2, title: 'S-Front end', name: 'Joseph Future', due: '20th June 2023', status: 'ongoing'},
         { id: 3, title: 'S-Backend', name: 'Charles Pika', due: '10th June 2023', status: 'completed'},
         { id: 4, title: 'S-Database', name: 'Wesley Weezy', due: '1st July 2023', status: 'ongoing'},
     ];
}

export function createProjectStatic(data) {

    return { id: 5, title: 'S-Database-2', name: 'Wesley Weezy', due: '3rd July 2023', status: 'ongoing'};
}