const express = require("express");
const bd = require("body-parser");
const mysql = require("mysql");
const { response } = require("express");
// const newspaperModel = require("./model/newspaper.model");

const app = express();
const port = 5000;

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "newspaper"
})

app.get("/", (req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err

        // console.log(connection)
        connection.query(`SELECT * FROM blog`, (query_err, data) => {
            connection.release()
            
            if(query_err) throw query_err

            res.send(data)
            // console.log(`The query data is ${data}`);
        })
    })
})

app.get("/:id", (req, res) => {
    const blog_id = req.params.id

    pool.getConnection((err, connection) => {
        if(err) throw err

        // console.log(connection)
        connection.query(`SELECT * FROM blog WHERE id = ${blog_id}`, (query_err, data) => {
            connection.release()
            
            if(query_err) throw query_err

            res.send(data)
            console.log(`The query data is ${data}`);
        })
    })

})

app.delete("/:id", (req, res) => {
    const blog_id = req.params.id

    pool.getConnection((err, connection) => {
        if(err) throw err

        // console.log(connection)
        connection.query(`DELETE FROM blog WHERE id = ${blog_id}`, (query_err, data) => {
            connection.release()
            
            if(query_err) throw query_err

            // res.send(`The post with ${blog_id} has been deleted`);
            res.send(data)
            console.log(`The query data is ${data}`);
        })
    })

})

app.post("", (req, res) => {
    
    console.log({req});

   res.end("This is the a post request")
})

app.use(express.json());

app.listen(port, () => { console.log(`Listening on port ${port}`)});