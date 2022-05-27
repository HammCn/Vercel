const axios = require('axios');



export default (request, callback) => {
  axios.get('https://api3.bbbug.com/user/login')
    .then(res => {
      const { data } = res.data
      callback(data);
    })
    .catch(error => {
      callback(error)
    });
};