const express = require("express");
const app = express();
const { join } = require("path");
const compression = require("compression");

const router = require("./router/router");
const cookieParser = require("cookie-parser");



app.use(cookieParser());
app.use(compression());

app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "..", "public")));
app.use(router);

module.exports = app;
