const express = require('express')
const path = require('path')
const app = express()
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../index.html'))
})
const port = process.env.PORT || 4005
app.listen(port, ()=>{console.log(`Chewy hit port ${port}.`)})

app.get('/css', function (req,res) {
    res.sendFile(path.join(__dirname, "../styles.css"))
})