var google = require('google')

google.resultsPerPage = 5
var nextCounter = 0

var hint=require(__dirname+"/en.json")
const tit=hint.key

google(tit, function (err, res){
  if (err) console.error(err)

  for (var i = 0; i < res.links.length; ++i) {
    var link = res.links[i];
    console.log("====")
    console.log(link.title)
    console.log(link.href)
    //console.log(link.description + "\n")
  }

  if (nextCounter < 4) {
    nextCounter += 1
    if (res.next) res.next()
  }
})
