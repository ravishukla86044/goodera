const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;
const server = app.listen(port, async function () {
  try {
    await connect();
    console.log(`Linsteing to port ${port}`);
  } catch (e) {
    console.log({ error: e });
  }
});
