const axios = require('axios');
module.exports = (request, response) => {
  console.log(request)
  axios.post('https://api3.bbbug.com/user/login', request.body)
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