const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'igor',
    host: 'localhost',
    port: 5432,
    database: 'testhotdogs'
})

module.exports = pool;