const express = require('express')
const path = require ('path')
const app = express()
const port = process.env.PORT || 3000;

const tables = [];
const waitList = [];

// server static files 
app.use(express.static('public'));

// GET /api/tables (all talbes)

// GET /api/waitingList (all talbes)

// POST /api/tables (add reservation)

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})