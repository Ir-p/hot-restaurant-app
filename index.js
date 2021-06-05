const express = require('express')
const path = require ('path')
const app = express()
const port = process.env.PORT || 3000;

const tables = [];
const waitList = [];

// server static files 
app.use(express.static('public'));

// GET /api/tables (all talbes)
app.get('/api/tables', (req, res) =>{
    res.json({'tables': 'tables'})
})
// GET /api/waitingList (all talbes)
app.get('/api/waitingList', (req, res) =>{
    res.json({'waitingList': 'waitingList'})
})
// POST /api/tables (add reservation)
app.post('/api/tables', (req, res) => {
  
    const newTable = req.body;
  
    newTable.routeName = newTable.name.replace(/\s+/g, '').toLowerCase();
    console.log(newTable);
  
    characters.push(newTable);
    res.json(newTable);
  });
  
app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})