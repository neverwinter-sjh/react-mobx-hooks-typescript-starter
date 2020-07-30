import axios from 'axios';

const BASE_URL = process.env.BASE_URL;

export default {
  get(payload) {
    return axios.get(`${BASE_URL}/newsletter/get/${payload}`);
  },
  post({ id, password }) {
    return axios.post(`${BASE_URL}/newsletter/get`, {
      id,
      password,
    });
  },
};
