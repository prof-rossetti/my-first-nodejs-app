
const dotenv = require("dotenv") // see: https://github.com/prof-rossetti/internet-technologies/blob/main/notes/javascript/packages/dotenv.md

dotenv.config() // reads environment variables from the ".env" file and stores them in `process.env`

const API_KEY = process.env.ALPHAVANTAGE_API_KEY || "demo"

module.exports = API_KEY
