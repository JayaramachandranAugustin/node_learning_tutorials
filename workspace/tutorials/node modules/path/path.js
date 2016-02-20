var path=require("path");

//path.basename example
console.log(path.basename(__filename));
console.log(path.basename(__filename,".js"));

//path.join example
console.log(path.join(__dirname,"david","path","node modules","file"));

//path.dirname example
console.log(path.dirname(__dirname));
console.log(path.dirname("david/files/js"));

//path.normalize example
console.log(path.normalize("/file/david/name//log///filename//"));
console.log(path.normalize("file/david/.name//log///filename//"));
console.log(path.normalize("/file/david/.name//log///filename//../.."));
//path.resolve example
console.log(path.resolve('abc', 'foo', 'foo', 'a/../subfile')); // /home/ubuntu/workspace/lesson/node modules/abc/foo/foo/subfile
console.log(path.resolve('abc', '/foo/abc', 'a/../subfile')); // /foo/abc/subfile
console.log(path.resolve('/foo/abc', '/a/../subfile')); // /subfile

//path.sep example
console.log(path.sep);

//path.parse
console.log(path.parse(__filename));

//path format
console.log(path.format({
    root:"/",
    dir:"/file/david",
    base:"david.txt",
    ext:".txt",
    file:"david"
}));

//path.delimiter
console.log(path.delimiter);

//path.extname
console.log(path.extname(__filename));

//path.isAbsolute
console.log(path.isAbsolute("david/file"));//False
console.log(path.isAbsolute("/david/file"));//True
console.log(path.isAbsolute("."));//False

//path.relative
console.log(path.relative("c:/david/files/js/nodejs","c:/david/files/css/bootstrap"))// ../../css/bootstrap