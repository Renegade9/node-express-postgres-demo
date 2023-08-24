const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const db = require('./db/controllers')
const orm = require('./orm/controllers')

const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
})

// PostgreSQL Routes directly using SQL
app.get('/db/users', db.getUsers)
app.post('/db/users', db.createUser)
app.put('/db/users/:id', db.updateUser)
app.delete('/db/users/:id', db.deleteUser)

// Sequelize ORM Routes
app.get('/orm/users', orm.getUsers)
app.post('/orm/users', orm.createUser)
app.put('/orm/users/:email', orm.updateUser)
app.delete('/orm/users/:email', orm.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})