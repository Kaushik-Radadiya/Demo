require("./src/db/connect");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const config = require("./config");
const peoples = require("./src/routers/peoples");
const register = require("./src/routers/register");
const swaggerDocument = require("./swagger.json");

const customCss = fs.readFileSync((`${process.cwd()}/swagger.css`), "utf8");
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, { customCss }));

app.use("/user", peoples);
app.use(register);
app.use((req, res) => {
  res.send("<h1>Page Not Found</h1>", 404);
});

console.log("====config====", config.PORT);
app.listen(config.PORT, () => {
  // eslint-disable-next-line no-console
  console.log("=====server started====");
});
