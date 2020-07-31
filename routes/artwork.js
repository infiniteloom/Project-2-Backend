const express = require('express')
const router = express.Router()
//importing the router method from express to build our routers

router.get('/', (req, res) => {
    res.send('Awesome!')
})