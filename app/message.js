

const dotenv = require("dotenv") // see: https://github.com/prof-rossetti/internet-technologies/blob/main/notes/javascript/packages/dotenv.md
dotenv.config() // reads environment variables from the ".env" file and stores them in `process.env`

var userName = process.env.USER_NAME || "World"

var message = "Hello, " + userName

console.log(message)
