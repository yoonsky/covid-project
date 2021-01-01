const express = require("express");
const app = express();
const cors = require("cors");

//CORS 설정
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// 연결확인
app.get("/", (req, res) => {
  res.send("hello world");
});

//포트넘버
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
