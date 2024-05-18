const cron = require('node-cron');
const axios = require('axios');  // Sử dụng axios để thực hiện HTTP requests

// Thiết lập một cron job để chạy mỗi phút
cron.schedule('* * * * *', () => {
    console.log('Cron job đang chạy mỗi phút.');

    // Gọi API
    axios.get('https://binhanbttas-be.onrender.com/blogs?typeId=963055738547077121')
        .then(response => {
            console.log('Data retrieve:', response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
