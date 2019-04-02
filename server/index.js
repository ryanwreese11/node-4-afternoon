const express = require('express')
require('dotenv').config()

const session = require('express-session')
const checkForSession = require('../server/middleware/checkForSession')
const sc = require('../server/controllers/swagController')
const ac = require('../server/controllers/authController')
const cc = require('../server/controllers/cartController')
const searchC = require('../server/controllers/searchController')

const { SERVER_PORT, SESSION_SECRET } = process.env
const app = express()

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(checkForSession);

app.get('/api/swag', sc.read)
app.post('/api/login', ac.login)
app.post('/api/register', ac.register)
app.post('/api/signout', ac.signout)
app.get('/api/user', ac.getUser)
app.post('/api/cart/checkout', cc.checkout)
app.post('/api/cart', cc.add)
app.delete('/api/cart', cc.remove)
app.get('/api/search', searchC.search)


app.listen(SERVER_PORT, () => {
    console.log(`Listening on server: ${SERVER_PORT}.`)})