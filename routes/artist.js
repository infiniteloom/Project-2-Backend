//importing the router method from express to build our routers
const { index, seed, create, update, destroy } = require('../controllers/artist.js')
const { Router }= require('express')
const router = Router()

router.get('/', index)

router.get('/seed', seed)

router.post('/', create)

router.put('/:id', update)

router.put('/:id', destroy)


module.exports = router