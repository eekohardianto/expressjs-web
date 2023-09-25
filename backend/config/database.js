import mysql from "mysql2"

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rahasia123',
    database: 'joker',
    multipleStatements: true,
})

export default db