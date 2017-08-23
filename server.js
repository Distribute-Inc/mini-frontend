var express = require('express')
var path = require('path')
var fs = require('fs')

var app = express()

app.get('/*', function(req, res) {
    var resolvedPath = path.resolve('../public' + req.url)
    fs.stat(resolvedPath, function(err, stats) {
        if (!err && stats.isFile()) {
            res.sendFile(resolvedPath)
        } else {
            res.sendFile(path.resolve('../public/index.html'))
        }
    })
})
const PORT = process.env.PORT || 3000
var server = app.listen(PORT)
console.log(`server is running on port ${PORT}`)
