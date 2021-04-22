


const fetch = require("node-fetch") // see: https://www.npmjs.com/package/node-fetch

const API_KEY = require("../utils/alpha.js") // imports code from a local file

var symbol = process.env.STOCK_SYMBOL || "GOOGL"

// see: https://www.alphavantage.co/documentation/#dailyadj
var requestUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`

fetch(requestUrl)
    .then(response => response.json())
    .then(function(data){

        console.log("---------------------")
        console.log("SYMBOL:", symbol)
        console.log("ALL DATA:", data)

        // todo: crunch the data

    })
    .catch(err => console.log("OOPS", err))
