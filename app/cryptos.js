

const fetch = require("node-fetch") // see: https://www.npmjs.com/package/node-fetch
const dotenv = require("dotenv") // see: https://github.com/prof-rossetti/internet-technologies/blob/main/notes/javascript/packages/dotenv.md

dotenv.config() // reads environment variables from the ".env" file and stores them in `process.env`

var API_KEY = process.env.ALPHAVANTAGE_API_KEY || "demo"

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
