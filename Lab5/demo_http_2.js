const express = require('express')
const app = express()
    app.get('/demo_http_2', function(req, res){
        const q = req.query
    res.send("Name: Krergunchai Cunatarakul <br/> Login Date: " + q.date + " " + q.month + " " + q.year)
    })
app.listen(9999,function(){
console.log("Server is running on PORT 9999")
})