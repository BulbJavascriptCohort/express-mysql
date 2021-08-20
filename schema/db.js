const mysql = require("mysql")

function connect(){
    return mysql.createPool({
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "",
        database: "newspaper"
    })
}

module.exports = {
    connect
}