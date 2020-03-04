const axios = require('axios');

const api = axios.default.create({
    baseURL:'http://www.mocky.io/v2/5e56eb9230000046d228eae4',
})
module.exports  = api