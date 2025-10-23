const express = require("express");
const bodyParser = require("body-parser");
const dburl = require("./DB_URL");
const connectDB = require("./db")
const userRoutes = require('./routes/userRoute')

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello" });
});
app.use('/user',userRoutes)

connectDB();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`${PORT}`);
});
