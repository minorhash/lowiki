var wiki=require("wikijs").default;
var tit=require("./en.json");
wiki().page(tit.key)
   .then(page => page.fullinfo())
.then(info => info.general.aliases)
    .then(console.log);
