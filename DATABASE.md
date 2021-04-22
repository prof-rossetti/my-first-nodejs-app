
# Database Setup Guide

Let's setup our own database and fetch data from there. We'll use a NoSQL key-value storage option called Firestore from Google. Firestore is available via the Firebase suite of products.

## Setup

### Firebase Setup

Visit https://console.firebase.google.com/ to **create a new Firebase project**. When you create the project:

  1. Choose an existing Google Analytics account or create a new one.
  2. Enable the setting to automatically create a new property in this account.

After creating the Firebase project, visit it's "Authentication" settings, and "Get Started" to **enable the "Google" sign-in option**.

Click the gear icon to visit the "Project Settings" page, locate the "Your Apps" section, and **create a Web App**, or use an existing one. When you create the app (or in the future by visiting its settings page, finding the "Firebase SDK snippet", and clicking "Config"), you'll see the **Firebase SDK credentials**. Use these values for the `FIREBASE_` environment variables (see "Environment Variables" section below).

### Firestore Database Setup

Follow [this guide](https://firebase.google.com/docs/firestore/quickstart) to create a Firestore database for the Firebase project you just created. When you create the database, "start in test mode".

After the database has been created, create a new collection called "products" with a number of documents inside. Create each document using an auto-generated `id` attribute, as well as the attributes `name` (string), `description` (string), `price` (number) and `url` (string). Populate the documents based on the following examples:

name | description | price | url
--- | --- | --- | ---
Strawberries | Juicy organic strawberries. | 4.99 | https://picsum.photos/id/1080/360/200
Cup of Tea | An individually-prepared tea or coffee of choice. | 3.49 | https://picsum.photos/id/225/360/200
Textbook | It has all the answers. | 129.99 | https://picsum.photos/id/24/360/200

### Environment Variables

Create a new file called ".env" in the root directory, and place inside the following contents, using your own values:

```sh
# this is an example ".env" file...

#
# FIREBASE
#

REACT_APP_FIREBASE_API_KEY="_______"
REACT_APP_FIREBASE_AUTH_DOMAIN="my-project-123.firebaseapp.com"
REACT_APP_FIREBASE_PROJECT_ID="my-project-123"
REACT_APP_FIREBASE_STORAGE_BUCKET="my-project-123.appspot.com"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="_______"
REACT_APP_FIREBASE_APP_ID="_______"
#REACT_APP_FIREBASE_MEASUREMENT_ID="G-XXXXXXXXXX"
REACT_APP_FIREBASE_DATABASE_URL="https://my-project-123.firebaseio.com"
```

### Usage

Finally, after setting up the database and configuring environment variable,s you should be able to run the "products" script to fetch the products from the database:

```sh
node app/products.js
```

> NOTE: this might take a while to finish after it returns the products

`
