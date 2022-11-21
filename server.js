require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const breweryRoutes = require('./routes/breweries')
const cors = require('cors');

//express app
const app = express()

app.use(cors({
    origin: 'https://rsm-brewery-app.herokuapp.com'
}));

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/breweries',breweryRoutes)

//connect to db
mongoose.connect('mongodb+srv://admin:admin@brewery-db.iwkqgzj.mongodb.net/?retryWrites=true&w=majority')
    .then(()=> {
        //listen for request
        app.listen(process.env.PORT, () => {
            console.log('Connect to DB and Listening on Port' + process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })

