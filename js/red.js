var fs=require("fs")
var arg2=process.argv[2]
//var arg2="./res/Tacos"
var boo

var cb=function(err, dat) {
    console.log(dat)
return dat
}

var res=fs.readFile(arg2,"utf8",cb );



