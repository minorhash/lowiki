# wikipedia in low profile 
## requires wikijs, google

### search and write to file

```js
const wiki = require('wikijs').default({
apiUrl : 'http://en.wikipedia.org/w/api.php'
});

console.log(__dirname)
var hint=require(__dirname+"/en.json")
const tit=hint.key
console.log(tit);

const tri=tit.replace(/\ /g,"-").replace(/\(/g,"-").replace(/\)/,"");
console.log(tri);

(async() => {
const page = await wiki.page(tit)
const con= await page.content();
const sin=con.replace(/\'/g,"")
console.log(sin);

var fs=require("fs")
var fil="res/"+tri+".js"
fs.writeFile(fil, sin, function(err) {
if (err) {return console.log(err);    }
else {console.log('no err');    }
console.log('The file was saved!');
});

})();
```

