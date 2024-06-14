let Product = require("./Productmodel");

module.exports = {
    createProduct: async (req, res) => {

        console.log(req.body);
        let { productname, price, stock, brand, details } = req.body
        console.log(productname);

        if (!productname || !price || !stock || !brand || !details) {
            res.status(400).json({ message: "all fields required" })
            return
        }

        try {

            let productExist = await Product.findOne({ productname: productname })
            console.log(productExist);
            if (productExist == null) {
                await Product.create({
                    productname: productname,
                    price: price,
                    stock: stock,
                    brand: brand,
                    details: details,

                })
                res.status(200).json({ message: "item created succesfully" })

            } else {
                res.status(400).json({ message: "item already exist" })

            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal Server Error' })
        }
    },


    getProduct: async (req, res) => {
        try {
            let result = await Product.find()
            res.status(200).json({ message: "done", data: result })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal Server Error' })

        }
    },



    update: async (req, res) => {
        console.log(req.params);
        console.log(req.body);

        let { productname, price, stock, brand, details } = req.body
        try {
            let result = await Product.updateOne({ _id: req.params.id },
                {
                    productname: productname,
                    price: price,
                    stock: stock,
                    brand: brand,
                    details: details
                }
            );

            console.log(result);
            res.status(200).json({ message: '' })

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal Server Error' })

        }
    },


    deleteitems: async (req, res) => {
        try {
            let result = await Product.deleteOne({ _id: req.params._id });
            console.log(result);
            if(result.deletedCount==1){
                res.json("deleted succesfully")
                
            }else{
                res.json("id not found")

            }
        } catch (error) {
            console.log(error);
            res.json("invalid id or item");
        }
    }


}




