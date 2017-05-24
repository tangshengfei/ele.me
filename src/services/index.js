import axios from "axios";

const BASE_URL = '/static/data/';
const API      = '/api';

/**
 * 获取本地静态json数据的方法,
 * @param {String} name 文件名
 * @returns {Promise}
 */
const getStaticJson = async (name) => {
    return await axios.get(`${BASE_URL}${name}.json`);
}

export default {
    getStaticJson
}