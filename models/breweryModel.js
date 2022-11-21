const mongoose = require('mongoose')

const Schema = mongoose.Schema

const brewerySchema = new Schema({
    name: { type: String},
    brewery_type: { type: String},
    street: { type: String},
    address_2: { type: String},
    address_3: { type: String},
    city: { type: String},
    state: { type: String},
    county_province: { type: String},
    postal_code: { type: String},
    country: { type: String},
    longitude: { type: Number},
    latitude: { type: Number},
    phone: { type: Number},
    website_url: { type: String},
}, {timestamps: true})

module.exports = mongoose.model('Brewery',brewerySchema)