const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const covid19Data = require("./covid-data");

//CORS 설정
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log("running...");
  covid19Data(({ covid } = {}) => {
    return res.send(covid);
  });
});
//포트넘버
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
