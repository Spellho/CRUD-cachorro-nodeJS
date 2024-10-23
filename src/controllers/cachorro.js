const ServiceCachorro = require('../services/cachorro')

class ControllerCachorro {
    GetCachorros(req, res) {
        try {
            const cachorros = ServiceCachorro.GetCachorros()
            res.send({msg:cachorros})
        } catch (error) {
            res.status(500).send({msg:error.message})
        }
    }

    CriarCachorro(req, res) {
        try {
            const name = req.body.name
            const cachorro = ServiceCachorro.CriarCachorro(name)
            res.send({msg:cachorro})
        } catch (error) {
            res.status(500).send({msg:error.message})
        }
    }

    UpdateCachorro(req, res) {
        try {
            const id = req.params.id
            const name = req.body.name
            const cachorro = ServiceCachorro.UpdateCachorro(id, name)
            res.send({msg:cachorro})
        } catch (error) {
            res.status(500).send({msg:error.message})
        }
    }

    DeleteCachorro(req, res) {
        try {
            const id = req.params.id
            const cachorro = ServiceCachorro.DeleteCachorro(id)
            res.send({msg:cachorro})
        } catch (error) {
            res.status(500).send({msg:error.message})
        }
    }
}

module.exports = new ControllerCachorro()