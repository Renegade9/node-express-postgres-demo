const Pool = require('pg').Pool

// hardcoded credentials for demo purposes only
const pool = new Pool({
    user: 'node_express_postgres_demo',
    host: 'localhost',
    database: 'node_express_postgres_demo',
    password: 'password',
    port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


const getUser = (request, response) => {
    const {id} = request.params;
    pool.query('SELECT * FROM users WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows[0])
    })
}

const createUser = (request, response) => {
    // TODO validation
    const { name, email } = request.body

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        console.log(results);
        id = results.rows[0].id;
        response.status(201).send(`User added with ID: ${id}`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }