const axios = require('axios');
module.exports = (request, response) => {
  axios.post('https://api3.bbbug.com/user/login')
    .then(res => {
      const data = res.data
      console.log(data);
      response.send(data)
    })
    .catch(error => {
      console.error(error);
      response.send(error)
    });
};