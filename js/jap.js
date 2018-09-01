var wiki = require('wikijs').default({
apiUrl : 'http://ja.wikipedia.org/w/api.php'
});

var hint=require("../hint.json")
var tit=hint.key
var tri=tit.replace(/\ /g,"-").replace(/\(/g,"-").replace(/\)/,"");

var Kakasi=require("kakasi/kakasi")
var kk = new Kakasi({    debug: false});

kk.transliterate(tit)
.then(res=> {
    console.log("----------\n%s\n----------",res);
})
.catch(error => {    console.error(error);});

(async() => {
var page = await wiki.page(tit)
var con= await page.content();
var sin=con.replace(/\'/g,"")
console.log(sin);

// var fs=require("fs")
// var fil=__dirname+tri+".js"
// fs.writeFile(fil, sin, function(err) {
// if (err) {return console.log(err);    }
// else {console.log('no err');    }
// console.log('The file was saved!');
// });

})();
