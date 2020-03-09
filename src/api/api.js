import axios from 'axios';

// axios.get('https://dog.ceo/api/breeds/image/random')
//     .then( response => {
//         console.log(response);
//         console.log(response.data);
//         this.url = response.data.message;
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

const host = "https://dog.ceo";

export const dogs= () => {
    return axios.get(`${host}/api/breeds/image/random`);
};