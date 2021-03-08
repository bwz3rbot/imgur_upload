require('dotenv').config();
const axios = require('axios');
const FormData = require('form-data');
const data = new FormData();
const image = require('fs').readFileSync('image.png');
data.append('image', image);

axios({
        method: 'post',
        url: 'https://api.imgur.com/3/image',
        headers: {
            'Authorization': `Client-ID ${process.env.CLIENT_ID}`,
            ...data.getHeaders()
        },
        data: data
    })
    .then((response) => {
        console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        console.log(error);
    });