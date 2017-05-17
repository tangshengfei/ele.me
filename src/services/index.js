import axios from "axios";

const BASE_URL = '/static/data/';
const API      = '/api';


const getStaticJson = async (name) => {
    return await axios.get(`${BASE_URL}${name}.json`);
}

export default {
    getStaticJson
}