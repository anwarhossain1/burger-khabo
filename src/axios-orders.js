import axios from 'axios';

const instance= axios.create({
    baseURL:'https://burger-khabo-default-rtdb.firebaseio.com/'
});

export default instance;