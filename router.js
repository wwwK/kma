"use strict";

var path = require("path");
var fs = require("fs");
var async = require("async");
const KoaRouter = require("koa-router");
const router = new KoaRouter();
const nlog = require("./nlog");

fs.readdir(path.join(__dirname, "api"), function (err, files) {
  if (err) {
    nlog.error(err);
    return;
  }

  async.each(files, function (file) {});
});

module.exports = router;
