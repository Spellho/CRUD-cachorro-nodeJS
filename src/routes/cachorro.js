const express = require('express')
const controllerCachorro = require('../controllers/cachorro')

const router = express.Router()

router.get('/', controllerCachorro.GetCachorros)
router.post('/', controllerCachorro.CriarCachorro)
router.put('/:id', controllerCachorro.UpdateCachorro)
router.delete('/:id', controllerCachorro.DeleteCachorro)

module.exports = router