import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-api-shamik.herokuapp.com/'

})

export default instance;
