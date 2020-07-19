// Root Packages
const path = require("path");

// Third party dependencies
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const routes = require("./routes/web");
const rootDirectory = require("./utilities/path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDirectory, "public")));
app.use(routes);

app.listen(3000);
