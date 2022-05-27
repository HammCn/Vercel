const axios = require('axios');
module.exports = (req, res) => {
  axios.post('https://api3.bbbug.com/user/login')
    .then(res => {
      const data = res.data
      console.log(data);
      res.send(data)
    })
    .catch(error => {
      console.error(error);
      res.send(error)
    });
};