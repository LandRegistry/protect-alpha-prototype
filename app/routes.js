const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

// Email vs. address (e.g. v0.1 /add-new-contact)
router.get('/*/add-address', function (req, res) {
  var toAdd = req.query.addContact

  if (toAdd === 'email') {
    // Redirect to the relevant page
    res.redirect('confirm-email-addition')
  } else {
    res.render('v0-1-1/add-address')
  }
})

router.get('/*/change-contact', function (req, res) {
  var toDo = req.query.updateContact

  if (toDo === 'add') {
    // Redirect to the relevant page
    res.redirect('add-new-contact')
  } else {
    res.render('v0-1-1/change-contact')
  }
})

// Verify route
router.get('/*/verification-intro', function (req, res) {
  var toAdd = req.query.signIn

  if (toAdd === "I've used Verify before") {
    // Redirect to the relevant page
    res.redirect('verification-choose')
  } else {
    res.render('v0-1-1/verification-intro')
  }
})

// Confirm address route (e.g. v0-2/is-this-address-correct)
router.get('/*/update-details-multi-exists', function (req, res) {
  var confirmAddress = req.query.correctAddress

  if (confirmAddress === 'yes') {
    res.redirect('address-is-correct')
  } else {
    res.render('v0-2/update-details-multi-exists')
  }
})

module.exports = router
