# My First Node.js App

## Prerequisites

  + Node.js, and NPM
  + Git

## Setup

Fork this repository, then click the green button to reveal  your forked repo's SSH address (e.g. `git@github.com:YOUR_USERNAME/my-first-node-app.git`). Use the SSH address to clone, or download, your forked repo onto your local machine, perhaps onto the Desktop:

```sh
cd ~/Desktop
git clone git@github.com:YOUR_USERNAME/my-first-node-app.git
```

Before running any of the commands below, navigate into this directory from the command-line:

```sh
cd my-first-node-app
```

## Installation

Install package dependencies:

```sh
npm install
```

> NOTE: see the "dependencies" section of the "package.json" file.


## Usage

Run the local JavaScript file:

```sh
node index.js
```

This script requires one of the local packages we installed earlier (i.e. `d3`):

```sh
node app/calculate.js
```
