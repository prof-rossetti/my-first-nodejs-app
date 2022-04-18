

//const {fetchProducts, createOrder, fetchUserOrders} = require("../utils/firestore-db")
//
//createOrder({
//    "userEmail": "me@example.net",
//    "productID": "example-product-id-123",
//    "quantity": 2,
//    "totalPrice": 6.50
//})

// var myEmail = "me@example.net"
//
//fetchProducts().then(function(products){
//    var product = products[0]
//    console.log("SELECTED PRODUCT:", product)
//
//    var quantity = 2
//    var myOrder = {
//        "userEmail": myEmail,
//        "productID": product["id"],
//        "quantity": quantity,
//        "totalPrice": (product["price"] * quantity)
//    }
//    createOrder(myOrder).then(function(results){
//
//        fetchUserOrders(myEmail).then(function(userOrders){
//            console.log(`ORDERS FOR USER '${myEmail}':`)
//
//            userOrders.forEach(function(order){
//                console.log("...", order)
//            })
//
//        }).catch(err => console.log("FETCH USER ORDERS ERR", err))
//
//    }).catch(err => console.log("CREATE ERR", err))
//
//}).catch(err => console.log("FETCH PRODUCTS ERR", err))
