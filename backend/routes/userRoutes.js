const express = require("express");
const app = express();
const router = express.Router();
const { analyzeData } = require("../utils/openai.js");

router.get("/result", async (req, res) => {
    console.log("received req")
    const filename = req.query.data
    // console.log(req.query)
  try {
    const analysis = await analyzeData(filename);
    // console.log(analysis);
    // res.status(200);
    res.json({
      success: true,
      analysis: analysis,
    });
  } catch (error) {
    console.log(error);
    throw error
  }
});

module.exports = router;
