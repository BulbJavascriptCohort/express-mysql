const newspaper = require("../schema/db.js")
/**
 * Search through a table based on query
 * @params
 * @returns 
 */

function getAll(){
    newspaper.connect().getConnection((err, connection) => {
        if(err) throw err

        connection.query("SELECT * FROM blog", (query_err, data) => {
            connection.release()
            if(query_err) throw query_err
            return data
        })
    })
}

module.exports = {
    getAll
}