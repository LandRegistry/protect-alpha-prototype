const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

// Email vs. address (e.g. v0.1 /add-new-contact)

// Branching
router.get('/v0-1/address-change', function (req, res) {
  var toChange = req.query.addContact

  if (toChange === 'email') {
    // Redirect to the relevant page
    res.redirect('confirm-email-addition')
  } else {
    res.render('v0-1/address-change')
  }
})

module.exports = router
