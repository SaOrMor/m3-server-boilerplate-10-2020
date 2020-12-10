const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: String,
  company: String,
  campaigns: [{type: Schema.Types.ObjectId,ref:'campaigns' }],
  website: [{type: Schema.Types.ObjectId,ref:' website' }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;