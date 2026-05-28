const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("HB 홈페이지 by GitHub Codespaces!");
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Codespaces에서 Node.js 서버 실행 성공",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});