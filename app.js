const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
const bodyParser = require("body-parser");
const router = express.Router();

// create application/json parser
var jsonParser = bodyParser.json() 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/test', urlencodedParser, function(req, res){
    var val = '';
    for(var i in req.body.string_to_cut){
        if((i + 1) % 3 != 0) continue;
        val += req.body.string_to_cut[i];
    }
    res.json({return_string : val});
})

app.listen(port, function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("server is running on port" + port);
    }
})
module.exports = router;
app.use("/", router);