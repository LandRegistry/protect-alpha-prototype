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
  } else if (toAdd === 'phone') {
    res.redirect('confirm-phone-addition')
  }   
  else {
    res.render('v0-3/add-address')
  }
})

router.get('/*/change-contact', function (req, res) {
  var toDo = req.query.updateContact

  if (toDo === 'add') {
    // Redirect to the relevant page
    res.redirect('add-new-contact')
  } else {
    res.render('v0-3/change-contact')
  }
})

router.get('/*/change-contact-2', function (req, res) {
  var toDo = req.query.changeContact

  if (toDo === 'email') {
    // Redirect to the relevant page
    res.redirect('change-second-contact-2')
  } else {
    res.render('v0-3/change-contact-2')
  }
})

router.get('/*/update-contact-2-what', function (req, res) {
  var toDo = req.query.updateContact2

  if (toDo === 'add') {
    // Redirect to the relevant page
    res.redirect('add-new-contact-2')
  } else if (toDo === 'delete') {
    res.redirect('delete-contact-2')
  }  
  else {
    res.render('v0-3/update-contact-2-what')
  }
})

// Verify route
router.get('/*/verification-intro', function (req, res) {
  var toAdd = req.query.signIn

  if (toAdd === "I've used Verify before") {
    // Redirect to the relevant page
    res.redirect('verification-choose')
  } else {
    res.render('v0-3/verification-intro')
  }
})

// Confirm address route (e.g. v0-2/is-this-address-correct)
router.get('/*/update-details-multi-exists', function (req, res) {
  var confirmAddress = req.query.correctAddress

  if (confirmAddress === 'yes') {
    res.redirect('address-is-correct')
  } else {
    res.render('v0-3/update-details-multi-exists')
  }
})

// Title numbers (e.g. v0-3/title-number)
router.get('/*/title-number-entry', function (req, res) {
  var titleExists = req.query.title

  if (titleExists === 'no') {
    res.redirect('address-lookup')
  } else {
    res.render('v0-3/title-number-entry')
  }
})

module.exports = router
