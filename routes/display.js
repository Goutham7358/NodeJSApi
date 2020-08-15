const express = require('express');
const displayController = require('../controllers/display')

const router = express.Router();

router.get('/display', displayController.getDisplay);
router.post('/display',displayController.postDisplay);

module.exports = router;