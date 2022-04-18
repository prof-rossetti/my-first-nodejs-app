

const fetch = require("node-fetch") // see: https://www.npmjs.com/package/node-fetch

const API_KEY = require("../utils/alpha.js") // imports code from a local file
const {formatUSD} = require("../utils/my-mod.js") // imports code from a local file

var MARKET = process.env.MARKET || "USD"


var symbols = ["BTC", "ETH"]

symbols.forEach(function(symbol){

    // see: https://www.alphavantage.co/documentation/#currency-daily
    // var requestUrl = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=demo`
    var requestUrl = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${symbol}&market=${MARKET}&apikey=${API_KEY}`
    //console.log("REQUEST URL", requestUrl)

    fetch(requestUrl)
        .then(response => response.json())
        .then(function(data){

            console.log("---------------------")
            console.log("SYMBOL:", symbol)
            //console.log("DATA:", data)

            var tsd = data["Time Series (Digital Currency Daily)"]

            var dates = Object.keys(tsd)
            var latestDate = dates[0]
            var latestPrices = tsd[latestDate]
            var latestClose = latestPrices["4b. close (USD)"]
            console.log("LATEST CLOSE:", formatUSD(latestClose))



        })
        .catch(err => console.log("OOPS", err))

})
