const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
  message: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
