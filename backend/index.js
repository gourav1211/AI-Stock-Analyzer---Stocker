const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

app.use(cors({
  origin: ["https://stocker.x3m.live", "http://localhost:5173", "http://localhost:3000"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRoutes);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
