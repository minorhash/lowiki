var wiki=require("wikijs").default
var tit=require("./en.json")
wiki().page(tit.key)
   .then(page => page.info())
    .then(console.log); // Bruce Wayne
