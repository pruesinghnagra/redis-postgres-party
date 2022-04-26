const express = require("express")
const axios = require("axios")
const redis = require("redis")
const app = express()

const redisPort = 6379
const client = redis.createClient(redisPort);

client.on("error", (err) => {
    console.log(err);
})

app.get("/", async (req, res) => {
  const searchTerm = 'berry';
  try {
    client.get(searchTerm, async (err, berry) => {
      if (err) throw err

      if (berry) {
        res.status(200).send({
          berry: JSON.parse(berry),
          message: 'data retrieved from cache'
        })
      }
      else {
        const berry = await axios.get(`https://pokeapi.co/api/v2/${searchTerm}`);
        client.setex(searchTerm, 600, JSON.stringify(berry.data));
        res.status(200).send({
          berry: berry.data,
          message: 'data from API'
        })
      }
    })
  } catch(err) {
      res.status(500).send({message: err.message});
  }
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Node server started")
})