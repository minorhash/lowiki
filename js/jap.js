var wiki = require('wikijs').default({
apiUrl : 'http://ja.wikipedia.org/w/api.php'
});

var hint=require("../hint.json")
var tit=hint.key

var fs=require("fs")

var Kakasi=require("kakasi/kakasi")
var kk = new Kakasi({    debug: false});

(async() => {
var page = await wiki.page(tit)
var con= await page.content();
var sin=con.replace(/\'/g,"")
console.log(sin);

kk.transliterate(tit)
.then(res=> {
var nsp=res.replace(/\ /g,"-").replace(/[^\x00-\xFF]/g, "").replace(/\n/g,"")
    var nsq=JSON.stringify(nsp).replace(/\"/g,"")
//str.replace(/[^\x00-\xFF]/g, "");
console.log("----------\n%s",nsq);

    var job={}
    job.key=nsp
var jap=JSON.stringify(job)
console.log("----------\n%s",job.key);

var fil=nsq+".js"
fs.writeFile(fil, sin, function(err) {
if (err) {return console.log(err);    }
else {console.log('no err');    }
console.log('The file was saved!');
});

})
.catch(error => {    console.error(error);});

})();
