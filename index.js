const express = require('express')
const router = require('./src/routes/cachorro')

const app = express()
app.use(express.json())

app.use(router)

const PORT = 3000

app.listen(PORT, () => {
    console.info(`Servidor rodando na porta ${PORT}`)
})