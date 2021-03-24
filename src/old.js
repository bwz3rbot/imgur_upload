require('dotenv').config();
const axios = require('axios');
const FormData = require('form-data');
const data = new FormData();
const image = require('fs').readFileSync('image.png');
data.append('image', image);
data.append('title', 'my title');
// data.append('album', 'my album');
data.append('description', 'my description');
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
        console.log(JSON.stringify(response.data, null, 4));
    })
    .catch((error) => {
        console.log(error);
    });