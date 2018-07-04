const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

// Email vs. address (e.g. v0.1 /add-new-contact)
router.get('/v0-1/add-address', function (req, res) {
  var toAdd = req.query.addContact

  if (toAdd === 'email') {
    // Redirect to the relevant page
    res.redirect('confirm-email-addition')
  } else {
    res.render('v0-1/add-address')
  }
})
// Verify route
router.get('/v0-1/verification-intro', function (req, res) {
  var toAdd = req.query.signIn

  if (toAdd === "I've used Verify before") {
    // Redirect to the relevant page
    res.redirect('verification-choose')
  } else {
    res.render('v0-1/verification-intro')
  }
})

module.exports = router
