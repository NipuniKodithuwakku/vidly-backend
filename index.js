const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => console.log("connected to the mongodb"))
  .catch((err) => console.error("could not connected to the mongodb"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));
