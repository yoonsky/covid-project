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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//covid 바이러스 공공데이터
app.post("/covid", (req, res) => {
  const { today, yesterday } = req.body;
  console.log("running...");
  covid19Data(today, yesterday, ({ covid } = {}) => {
    return res.send(covid);
  });
});

app.get("/", (req, res) => {
  res.send("hello world!");
});

//포트넘버
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
