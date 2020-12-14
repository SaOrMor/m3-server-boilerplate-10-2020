const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: String,
  companyname: String,
  campaigns: [{type: Schema.Types.ObjectId, ref:'Campaign' }],
  website: [{type: Schema.Types.ObjectId, ref:' website' }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;