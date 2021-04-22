# My First Node.js App

## Prerequisites

  + Node.js, and NPM
  + Git

## Installation

Fork [this repository](https://github.com/prof-rossetti/my-first-nodejs-app/settings) on GitHub, then from your forked repo's homepage, click the green button to reveal its SSH address (e.g. `git@github.com:YOUR_USERNAME/my-first-node-app.git`). Use the SSH address to clone, or download, your forked repo onto your local machine, perhaps onto the Desktop:

```sh
cd ~/Desktop
git clone git@github.com:YOUR_USERNAME/my-first-nodejs-app.git
```

Before running any of the commands below, navigate into this directory from the command-line:

```sh
cd my-first-nodejs-app
```

Install package dependencies:

```sh
npm install
```

> NOTE: this looks at the package dependencies defined in the "package.json" file and installs them locally into the "node_modules" directory.

## Setup

Create a new file called ".env" in the root directory of your local repo, and place inside the following contents:

```sh
# this is the ".env" file...

USER_NAME="Jon Snow"
```

FYI: the "message" script will use this environment variable, and other scripts below will ask you to setup additional environment variables.

## Usage

### Index

Run a basic local JavaScript file:

```sh
node index.js
```

### Calculate

The calculate script demonstrates simple data crunching with the `d3` package:

```sh
node app/calculate.js
```

### Message

The message script demonstrates reading environment variables from the ".env" file with the `dotenv` package:

```sh
node app/message.js
```

### Stocks & Cryptos

These scripts demonstrate asynchronous requests using the `node-fetch` package.

To setup this example, first [obtain an AlphaVantage API Key](https://www.alphavantage.co/support/#api-key) (i.e. `ALPHAVANTAGE_API_KEY`), and add it to the ".env" file:

```sh
# this is somewhere in the ".env" file:

ALPHAVANTAGE_API_KEY="______"
```

Then run the script to fetch some stock market data (specifying specific stocks as environment variables either via the ".env" file or at runtime):

```sh
node app/stocks.js
STOCK_SYMBOL="MSFT" node app/stocks.js
STOCK_SYMBOL="TSLA" node app/stocks.js
# ... etc.
```


And maybe also some cryptocurrency ratings:

```sh
node app/cryptos.js
```
