const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors({

}));

port = 4000;


app.get('/', function(req,res){
    var x = Math.floor(Math.random()* 7);
    res.end(x.toString())

})


app.listen(port,() => {
    console.log(`Server runnning at localhost:${port}`);
})
