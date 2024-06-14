let express = require('express')

let router = express.Router()


let { createProduct, getProduct, update, deleteitems } = require("./Productcontrols")

router.post('/create', createProduct)
router.get('/showproduct', getProduct)
router.put('/update/:id', update)
router.delete('/delete/:id', deleteitems)


module.exports = router

