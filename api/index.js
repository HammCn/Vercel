const axios = require('axios');
module.exports = (request, callback) => {
  axios.post('https://api3.bbbug.com/user/login')
    .then(res => {
      const { data } = res.data
      callback(data);
    })
    .catch(error => {
      callback(error)
    });
};