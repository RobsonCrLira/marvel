import axios from 'axios';

const marvelApi = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public'
});

marvelApi.interceptors.request.use(config => {
    config.params = config.params || {};
    config.params.apikey = 'dbd0ea28d121f8376b8ff290f363fa76';
    config.params.hash = 'c81f726f2a4e09fdb724ba1035de0e83';
    config.params.ts = 'robson';
    return config;
});

export { marvelApi };
