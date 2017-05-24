import axios from "axios";

const BASE_URL = '/static/data/';
const API      = '/api';

const getShopList = (data = {}) => {
    return axios.get(`${BASE_URL}/shopList.json`, data);
}