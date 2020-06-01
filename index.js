const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Horror" },
  { id: 3, name: "Romance" },
];
//get request

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

//post request
// app.post("/api/genres", (req, res) => {
//   const { error } = validateGenre(req.body);
//   if (error) res.status(400).send(error.details[0].message);
//   return;
//   const genre = {
//     id: genres.length + 1,
//     name: req.body.name,
//   };
//   genres.push(genre);
//   res.send(genre);
// });
app.post("/api/genres", (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };
  genres.push(genre);
  res.send(genre);
});

//put request
app.put("/api/genres/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) res.status(404).send("The genre with the given id was not found");

  // const result = validateGenre(req.body);
  const { error } = validateGenre(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  genre.name = req.body.name;
  res.send(genre);
});

//delete request
app.delete("/api/genres/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    res.status(404).send("The genre with the given Id was not found.");
  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genre);
});

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(genre.schema);
}

const port = process.env.PORT || 3000;
// const port = process.env.PORT;

app.listen(port, () => console.log(`listening on port ${port}...`));
