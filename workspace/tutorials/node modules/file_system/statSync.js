var fs = require("fs");
var util = require("util");

var stats = fs.statSync("files/read.txt");

console.log(util.inspect(stats));

console.log("This is the detail about read.txt");

/*
OUTPUT:
-------

{ dev: 1720809383,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 281474976865786,
  size: 41,
  blocks: undefined,
  atime: Sun Feb 21 2016 13:12:23 GMT+0530 (India Standard Time),
  mtime: Sun Feb 21 2016 13:13:19 GMT+0530 (India Standard Time),
  ctime: Sun Feb 21 2016 13:13:19 GMT+0530 (India Standard Time),
  birthtime: Sun Feb 21 2016 13:12:23 GMT+0530 (India Standard Time) }
  */