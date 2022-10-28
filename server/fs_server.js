const fs = require('fs')
const path = require('path')

let filePath = path.join(__dirname, 'server.txt' )

fs.readFile(filePath, 'utf8' , (err, data) => {
    console.log(err)
})