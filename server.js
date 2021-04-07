"use strict";

const path = require("path");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const statics = require("koa-static");
const config = require("./config");
const router = require("./router");
const nlog = require("./nlog");

const app = new Koa();
app.use(bodyParser());

app.use(router["routes"]());

app.use(statics(path.join(__dirname, "doc")));

if (!(config && config.port)) {
  nlog.error("the port is not define in config");
  return;
}

app.listen(config.port);
nlog.info(
  `\r\n------------------------------------\r\n|    kma is running at port: ${config.port}  |\r\n------------------------------------\r\n`
);
