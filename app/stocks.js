


const fetch = require("node-fetch") // see: https://www.npmjs.com/package/node-fetch
const dotenv = require("dotenv") // see: https://github.com/prof-rossetti/internet-technologies/blob/main/notes/javascript/packages/dotenv.md

dotenv.config() // reads environment variables from the ".env" file and stores them in `process.env`

const API_KEY = process.env.ALPHAVANTAGE_API_KEY || "demo"

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
