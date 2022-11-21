require('dotenv').config()
const Brewery = require('../models/breweryModel')


//get all breweries by city
const getBreweriesByCity = async (req, res) => {
    const c = req.params.city
    Brewery.find({city: c})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((error) => {
            res.status(400).json(error)
        })
}

//get single brewery
const getBreweriesById = async (req, res) => {
    const id = req.params.id
    Brewery.findById(id)
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((error) => {
            res.status(400).json(error)
        })
}

//insert brewery record
const createBrewery = async (req, res) => {
    const {name, brewery_type, street, address_2,address_3, city, state, county_province, postal_code, country, longitude, latitude, phone, website_url} = req.body
    try {
        const brewery = await Brewery.create({name, brewery_type, street, address_2,address_3, city, state, county_province, postal_code, country, longitude, latitude, phone, website_url})
        res.status(200).json(brewery)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getBreweriesByCity,
    createBrewery,
    getBreweriesById
}