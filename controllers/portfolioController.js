const Portfolio = require('../models/Portfolio');

exports.addPortfolio = async (req, res) => {
  await Portfolio.create(req.body);
  res.redirect('/');
};
