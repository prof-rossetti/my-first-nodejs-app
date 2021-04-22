

const {fetchProducts} = require("../utils/firestore-db")

fetchProducts()
    .then(function(products){

        console.log("PRODUCTS", products)

    }).catch(function(err){
        console.log("ERR", err)
    })
