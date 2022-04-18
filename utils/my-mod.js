

// defining some functionality...

const x = 5

function enlarge(n) {
    return n * 100
}

function formatUSD(myPrice) {

    // round to two decimal places
    // h/t: https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places
    var roundedPrice = (Math.round(myPrice * 100) / 100).toFixed(2)

    // format as USD
    return `$${roundedPrice}`
}

// exporting the functionality so other files can import it (by name)
module.exports = {x, enlarge, formatUSD}
