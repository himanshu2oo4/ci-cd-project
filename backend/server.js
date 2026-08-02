const express = require("express");
const cors = require("cors");
const app = express();
//const github = "ghp_123456789012345678901234567890123456";
app.use(cors());


app.get("/api/message", (req, res) => {
  res.json({
    status: "success",
    message: "Hello from Dockerized Backend 🚀"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
