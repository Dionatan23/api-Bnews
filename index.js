const express = require("express");
const app = express()

const userRoute = require("./src/routers/user.router")
const port = 3000

app.use(express.json())
app.use("/user", userRoute)
app.listen(port, () => console.log(`Server rodando na porta ${port}`))