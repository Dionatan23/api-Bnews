const create = (req, res) => {
    const { name, userName, email, password } = req.body
    //Verificar campos
    if (!name || !userName || !email || !password) {
        res.status(400).send({ message: "Todos os campos deve ser preenchidos" })
    }

    // res = Resposta para front de user criado
    res.status(201).send({
        message: "User criado com sucesso",
        user: {
            name,
            userName,
            email,
        }
    })
}

module.exports = { create }