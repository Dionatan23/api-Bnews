const mongoose = require("mongoose")

const conectDataBase = () => {
    console.log("Conectando ao BD...")

    mongoose.connect("mongodb+srv://root:1533@bancob-news.wtqkfkr.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoBD conectado!"))
    .catch((error) => console.log(error))
}

module.exports = conectDataBase;