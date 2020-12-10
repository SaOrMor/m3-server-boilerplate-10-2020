const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
domain: { type: string, required: true, unique: true},
availabledate: {type: date},
floorprice: {type: number},
availablespaces: [string],
target: [string]
})



const Website = mongoose.model('Website', websiteSchema);

module.exports = Website;