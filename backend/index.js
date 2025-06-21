const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

app.use(cors());
app.use("/api", userRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("server running on port 3000");
});
