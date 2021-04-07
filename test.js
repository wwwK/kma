const path = require("path");
const nlog = require("./nlog");

console.log(nlog);

nlog.log(__dirname);
nlog.info(__dirname);
nlog.error(__dirname);

/* var pathName = "E:/test";
fs.readdir(pathName, function(err, files){


}); */
