## Shopping-cart

This is the backend of Shopping-cart project. Used MongoDB to save data.
There are three layers of the project, repository, service and controller.
Repository is used to connect with database, service is including the logic of data processing, and controller is to connect with frontend, which is the interface of sending and receive data.

## Setup MongoDB locally

If you haven't installed it, here is the official tutorial of installation : https://docs.mongodb.com/manual/installation/

Next, run MongoDB at local and setup data

## `node src/data/insert.js`

Connect with MongoDB, and setup some data into it.

## `npm start`

When the terminal shows output as

    MongoDB Connected...
    App is running...

then the MongoDB has successfully connected, and the server has been running. Data could be get at http://localhost:3001/shoppingCart

## Depoly with docker

The project provided a Dockerfile so that you could deploy it with docker. Firstly, change the link to MongoDB in cartRepository.js from
` mongodb://localhost:27017/shoppingCart `
to `mongodb://mongodb/shoppingCart`
and build a image of node:

    docker build -t b-shoppingcart .

Then, run a container of mongo with the image pull from official image:

    docker run -d -p 27017:27017 --name shoppingcart-mongo mongo

Finally, run a container by the image just build, and link it to the mongodb container.

    docker run -d --name shoppingcart --link=shoppingcart-mongodb:mongodb -p 3001:3001 b-shoppingcart
