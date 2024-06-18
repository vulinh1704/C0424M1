const cron = require('node-cron');
const axios = require('axios');  // Sử dụng axios để thực hiện HTTP requests
const express = require('express');
const app = express();

// Thiết lập một cron job để chạy mỗi phút
cron.schedule('* * * * *', () => {
    console.log('Cron job đang chạy mỗi phút.');

    // Gọi API
    axios.get('https://binhanbttas-be.onrender.com/hello')
        .then(response => {
            console.log('Data retrieve:', response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

app.get('/', (req, res) => res.send('Hello World!'));
const port =  3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
