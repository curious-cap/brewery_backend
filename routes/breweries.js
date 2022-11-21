const express = require('express')
const Brewery = require('../models/breweryModel')
const {getBreweriesByCity, createBrewery, getBreweriesById} = require('../controllers/breweryController')

const router = express.Router()

router.get('/city/:city', getBreweriesByCity)

router.get('/id/:id', getBreweriesById)

router.post('/add', createBrewery)

module.exports = router