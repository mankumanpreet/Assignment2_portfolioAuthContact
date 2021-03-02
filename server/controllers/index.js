let express = require('express');



/* GET home page. */
module.exports.displayHomePage = (req, res, next) => {
  res.render('pages/home', {
    title: 'Home', 
    displayName: req.user ? req.user.displayName : ''
  });
};

/* GET about page. */
module.exports.displayAboutPage = (req, res, next) => {
  res.render('pages/about', { title: 'About',
  displayName: req.user ? req.user.displayName : '' });
};

/* GET projects page. */
module.exports.displayProjectPage =(req, res, next) => {
  res.render('pages/projects', { title: 'Projects',
  displayName: req.user ? req.user.displayName : '' });
};

/* GET Services page. */
module.exports.displayServicesPage = (req, res, next) => {
  res.render('pages/services', { title: 'Services',
  displayName: req.user ? req.user.displayName : '' });
};
