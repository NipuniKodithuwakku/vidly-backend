const express = require("express");
const app = express();
app.use(express.json());

const movies = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Romance" },
];
//get request

app.get("http://vidly.com/api/", (req, res) => {
  res.send(genres);
});

//post request
app.post("/api/genres", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send("Name is required and should be minimum 3 characters");
  }
  return;
  const movie = {
    id: movies.length + 1,
    name: req.body.name,
  };
  movies.push(movie);
  res.send(movie);
});

const port = process.env.PORT || 3000;
// const port = process.env.PORT;

app.listen(port, () => console.log(`listening on port ${port}...`));
