//importing the router method from express to build our routers
const { index, getOne, seed, create, update, destroy } = require('../controllers/artwork.js')
const { Router }= require('express')
const router = Router()

router.get('/', index)

router.get('/:id', getOne)

router.get('/seed', seed)

router.post('/', create)

router.put('/:id', update)

router.delete('/:id', destroy)


module.exports = router