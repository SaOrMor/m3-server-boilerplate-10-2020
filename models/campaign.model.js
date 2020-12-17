const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
firstname: String,
lastname: String,
campaignname: String,
companyname: String,
startingdate: String,
endingdate: String,
budget: String,
image: String,
age: String,
gender: String,
country: String,
interests: String,
operatingsystem: String,
education: String,
jobfunction: String
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;