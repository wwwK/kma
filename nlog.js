function nlog() {}

nlog.log = function (log) {
  this.nl.log(`\x1B[47;30m LOG \x1B[0m ${log}`);
};

nlog.info = function (info) {
  this.nl.log(`\x1B[42;30m INFO \x1B[0;32m ${info}\x1B[0m`);
};

nlog.error = function (err) {
  this.nl.log(`\x1B[41;30m ERROR \x1B[0;31m ${err}\x1B[0m`);
};

Object.defineProperty(nlog, "nl", {
  get: function () {
    return console;
  },
});

module.exports = nlog;
