const wiki = require('wikijs').default({
apiUrl : 'http://en.wikipedia.org/w/api.php'
});

var hint=require("../hint.json")
const tit=hint.key
const tri=tit.replace(/\ /g,"-").replace(/\(/g,"-").replace(/\)/,"");

(async() => {
const page = await wiki.page(tit)
const con= await page.content();
const sin=con.replace(/\'/g,"")
console.log(sin);

var fs=require("fs")
var fil=__dirname+tri+".js"
fs.writeFile(fil, sin, function(err) {
if (err) {return console.log(err);    }
else {console.log('no err');    }
console.log('The file was saved!');
});

})();
