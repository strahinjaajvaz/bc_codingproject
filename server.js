const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(`${__dirname}/client/dist/`));

app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/client/dist/index.html`);
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
