const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.post("/api/saveData", (req, res) => {
  const { email, phone, businessType } = req.body;
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Business Type:", businessType);
  res.status(200).send("Email sent successfully");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
