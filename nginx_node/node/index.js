const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = `INSERT INTO people(name) values('Isabele')`

connection.query(sql)
connection.query("SELECT name FROM people", function (err, result) { 
    app.get('/', (req,res) => {
        res.setHeader("Content-type", "text/html");
        res.write('<h1>Full Cycle Rocks!!</h1> </br>')
        for (const r of result){
            res.write('- '+r.name+ '</br>')
        }
    })
  });
connection.end()

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})