

const fetch = require("node-fetch") // see: https://www.npmjs.com/package/node-fetch

const API_KEY = require("../utils/alpha.js") // imports code from a local file

var symbols = ["BTC", "ETH", "LTC", "DOGE"]

symbols.forEach(function(symbol){

    // see: https://www.alphavantage.co/documentation/#crypto-ratings
    var requestUrl = `https://www.alphavantage.co/query?function=CRYPTO_RATING&symbol=${symbol}&apikey=${API_KEY}`

    fetch(requestUrl)
        .then(response => response.json())
        .then(function(data){

            console.log("---------------------")
            console.log("SYMBOL:", symbol)
            console.log("RATING:", data)

        })
        .catch(err => console.log("OOPS", err))

})
