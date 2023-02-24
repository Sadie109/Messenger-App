const PORT = 8000;
const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const { v1: uuidv1 } = require("uuid");
const { connect } = require("getstream");

app.use(cors());
app.use(express.json());

const API_KEY = "2sfh4x6fvfs7";
const API_SECRET =
  "2muur4vvms4jz5c8j2nrtkaxhe9fwa5g9egh9nexkekhyby4aema5anx2xjtte5b";
const APP_ID = "1233704";

app.post("/signup", async (req, res) => {
  try {
    console.log(req);
    const { username, password } = req.body;

    const userID = uuidv1();
    const hashedPassword = await bcrypt.hash(password, 10);
    const client = connect(API_KEY, API_SECRET, APP_ID);
    const token = client.createUserToken(userID)

    res.status(200).json({ username, password, userID, hashedPassword, token})

    console.log(username, password);
  } catch (error) {
    console.log(error);
    res, status(500).json({ message: error });
  }
});

app.listen(PORT, () => console.log("server running on PORT" + PORT));
