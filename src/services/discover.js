import axios from "axios";

const BASE_URL = '/static/data/';
const API      = '/api';

const getDiscover = () => {
    return axios.get(`${BASE_URL}/discover.json`);
}
