let mongoose =require('mongoose')


let itemSchema = mongoose.Schema({
    productname: {
        type: String
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    },
    brand: {
        type: String
    },
    details:{
        type: String
    }

})

module.exports=mongoose.model('items',itemSchema)