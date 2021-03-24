const axios = require('axios');
const FormData = require('form-data');
module.exports =
    async () => {
        const image = require('fs').readFileSync('image.png');

        const data = new FormData();

        data.append('image', image);
        // data.append('title', 'my title');
        // data.append('album', 'my album');
        // data.append('description', 'my description');
        await axios({
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

    }