const axios = require('axios');
module.exports = (request, callback) => {
  axios.post('https://api3.bbbug.com/user/login')
    .then(res => {
      const { data } = res.data
      console.log(result);
      return callback(data);
    })
    .catch(error => {
      console.error(error);
      return callback(error)
    });
};