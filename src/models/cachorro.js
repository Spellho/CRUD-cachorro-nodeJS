const nomes = new Array("bob")

class ModelCachorro {
    GetCachorros() {
        return nomes
    }

    CriarCachorro(name) {
        return nomes.push(name)
    }

    UpdateCachorro(id, name) {
        return nomes[id] = name
    }

    DeleteCachorro(id) {
        return nomes.splice(id, 1)
    }
}

module.exports = new ModelCachorro()