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
    res.render('v0-4/add-address')
  }
})

router.get('/*/add-address-2', function (req, res) {
  var toAdd = req.query.addContact

  if (toAdd === 'email') {
    // Redirect to the relevant page
    res.redirect('confirm-email-change')
  } else if (toAdd === 'phone') {
    res.redirect('confirm-phone-change')
  }   
  else {
    res.render('v0-4/add-address-2')
  }
})

router.get('/*/change-contact', function (req, res) {
  var toDo = req.query.updateContact

  if (toDo === 'add') {
    // Redirect to the relevant page
    res.redirect('add-new-contact')
  } else {
    res.render('v0-4/change-contact')
  }
})

router.get('/*/change-contact-2', function (req, res) {
  var toDo = req.query.changeContact

  if (toDo === 'email') {
    // Redirect to the relevant page
    res.redirect('change-second-contact-2')
  } else {
    res.render('v0-4/change-contact-2')
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
    res.render('v0-4/update-contact-2-what')
  }
})

// Verify route
router.get('/*/verification-intro', function (req, res) {
  var toAdd = req.query.signIn

  if (toAdd === "I've used Verify before") {
    // Redirect to the relevant page
    res.redirect('verification-choose')
  } else {
    res.render('v0-4/verification-intro')
  }
})

// Confirm address route (e.g. v0-2/is-this-address-correct)
router.get('/*/update-details-multi-exists', function (req, res) {
  var confirmAddress = req.query.correctAddress

  if (confirmAddress === 'yes') {
    res.redirect('address-is-correct')
  } else {
    res.render('v0-4/update-details-multi-exists')
  }
})

// Title numbers (e.g. v0-4/title-number)
router.get('/v0-4/title-number-entry', function (req, res) {
  var titleExists = req.query.title

  if (titleExists === 'no') {
    res.redirect('address-lookup')
  } else {
    res.render('v0-4/title-number-entry')
  }
})

/* ################################################### */
/* #################€€ NEW ROUTES #################### */
/* ################################################### */

/* v0.4 */
/* title number */
router.get('/v0-4-new/3b-title-number-entry', function (req, res) {
  var titleExists = req.query.title

  if (titleExists === 'no') {
    res.redirect('3a-address-lookup')
  } else {
    res.render('v0-4-new/3b-title-number-entry')
  }
})

router.get('/v0-4-new/6b-verification-intro', function (req, res) {
  var toAdd = req.query.signIn

  if (toAdd === "I've used Verify before") {
    // Redirect to the relevant page
    res.redirect('6a-verification-choose')
  } else {
    res.render('v0-4-new/6b-verification-intro')
  }
})

/* v0.4.1 */
/* title number */
router.get('/v0-4-1/3b-title-number-entry', function (req, res) {
  var titleExists = req.query.title

  if (titleExists === 'no') {
    res.redirect('3a-address-lookup')
  } else {
    res.render('v0-4-1/3b-title-number-entry')
  }
})

router.get('/v0-4-1/6b-verification-intro', function (req, res) {
  var toAdd = req.query.signIn

  if (toAdd === "I've used Verify before") {
    // Redirect to the relevant page
    res.redirect('6a-verification-choose')
  } else {
    res.render('v0-4-1/6b-verification-intro')
  }
})

/* v0.4.2 */
/* title number */
router.get('/v0-4-2/3b-title-number-entry', function (req, res) {
  var titleExists = req.query.title

  if (titleExists === 'no') {
    res.redirect('3b-manual-address-lookup')
  } else {
    res.render('v0-4-2/3b-title-number-entry')
  }
})

router.get('/v0-4-2/6b-verification-intro', function (req, res) {
  var toAdd = req.query.signIn

  if (toAdd === "I've used Verify before") {
    // Redirect to the relevant page
    res.redirect('6a-verification-choose')
  } else {
    res.render('v0-4-2/6b-verification-intro')
  }
})


module.exports = router
