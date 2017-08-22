import axios from 'axios';

export default class Api {
  static signIn(body) {
    return axios.post('/api/login', body).then(response => response.data).catch(error => 'error');
  }
  static signUp(body) {
    return axios.post('/api/signup', body).then(response => response.data).catch(error => 'error');
  }
}
