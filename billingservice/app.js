const express = require("express");
const app = express();
const PORT = process.env.PORT || 8084;
const SERVICE_NAME = process.env.SERVICE_NAME || "billing-service";

app.get("/", (req, res) => {
  res.send("🏥 Hello from " + SERVICE_NAME + "!");
});

app.get("/health", (req, res) => {
  res.json({status: "ok", service: SERVICE_NAME});
});

app.listen(PORT, () => {
  console.log(`${SERVICE_NAME} running on port ${PORT}`);
});
