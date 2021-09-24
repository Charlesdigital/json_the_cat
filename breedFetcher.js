const request = require("request");
// const input = process.argv.slice(2)
const fetchBreedDescription = function (breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(URL, (error, response, body) => {
    //   console.log("this is error",error)
    //   console.log("this is response",response)
    const data = JSON.parse(body); //callback(error, description)
    if (error) {
      return callback(error, null);
    }
    if (data[0]) {
      return callback(null, data[0].description);
      console.log(data[0].description); //data will only have an object if the search is successful otherwise data will just be an empty array
    } else {
      return callback("Breed not found", null);
    }
  });

  //write a function
  //store the query in a variable?
};

module.exports = { fetchBreedDescription };
