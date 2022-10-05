import axios from 'axios'
import errorResponseHandler from './errorResponseHandler'
//setting api
const api = axios.create({
    baseURL : "https://ukmdb.herokuapp.com/api",
});
api.interceptors.response.use( 
    (response) => response,
    errorResponseHandler
)

export default api;