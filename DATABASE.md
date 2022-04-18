
# Database Setup Guide

Let's setup our own database and fetch data from there. We'll use a NoSQL key-value storage option called Firestore from Google. Firestore is available via the Firebase suite of products.

## Setup

### Google Cloud Project

Visit the [Google Cloud Console](https://console.cloud.google.com). Create a new project, and name it. After it is created, select it from the project selection dropdown menu.

### Firebase Project

Visit the [Google Firebase Console](https://console.firebase.google.com/) to create a new Firebase project. When you create the project:

  1. Select the Google Cloud project you just created from the dropdown.
  2. Enable Google Analytics.
  3. Configure Google Analytics:
     1. Choose an existing Google Analytics account or create a new one.
     2. Automatically create a new property in this account.


### Firestore Database Setup

Follow [this guide](https://firebase.google.com/docs/firestore/quickstart#create) (just the "Create a Cloud Firestore database" section), to create a Firestore database for the Firebase project you just created. When you create the database, "start in test mode".

#### Products Collection

After the database has been created, create a new collection called "products" with a number of documents inside. Create each document using an auto-generated `id` attribute, as well as the attributes `name` (string), `description` (string), `price` (number) and `url` (string). Populate the documents based on the following examples:

name | description | price | url
--- | --- | --- | ---
Strawberries | Juicy organic strawberries. | 4.99 | https://picsum.photos/id/1080/360/200
Cup of Tea | An individually-prepared tea or coffee of choice. | 3.49 | https://picsum.photos/id/225/360/200
Textbook | It has all the answers. | 129.99 | https://picsum.photos/id/24/360/200






### Google Cloud Service Account Credentials

To fetch data from the Firestore database (and use other Google APIs), the app will need access to a local "service account" credentials file.

From the [Google API Credentials](https://console.cloud.google.com/apis/credentials) page, find the service account created during the Firebase project setup process (it should be called something like "firebase-adminsdk"), or feel free to create a new service account.

For the chosen service account, create new JSON credentials file as necessary from the "Keys" menu, then download the resulting JSON file into the root directory of this repo, specifically named "google-credentials.json".








### Usage

Finally, after setting up the database and configuring environment variables, you should be able to run the "products" script to fetch the products from the database:

```sh
node app/products.js
```

> NOTE: this might take a while to finish after it returns the products.
