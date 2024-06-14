let express = require('express')
let app = express()
let mongoose = require('mongoose')
let dotenv = require('dotenv')

app.use(express.json())
dotenv.config()


mongoose.connect(process.env.mongodbURL).then(() => {
    console.log('mongodb connected');
}).catch((error) => {
    console.log(error);
})

let productRoute = require('./ProductRout')

app.use('/items', productRoute)


app.listen(process.env.PORT, () => {
    console.log('server connected');
})