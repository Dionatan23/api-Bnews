const express = require("express");
const userRoute = require("./src/routers/user.router")

const app = express()

app.use('/soma', userRoute)
  

app.listen(3000, () => {
    console.log('Server is running on porta 3000')
})