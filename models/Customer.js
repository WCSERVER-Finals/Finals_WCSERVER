const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let customerSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  address: {
    type: String
  },
  food: {
    type: String
  },
  drinks: {
    type: String
  },
  date: {
    type: String
  },
  payment: {
    type: String
  },

}, {
  collection: 'customers'
})
module.exports = mongoose.model('Customer', customerSchema)