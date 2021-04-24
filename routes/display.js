const express = require('express');
const displayController = require('../controllers/display')

const router = express.Router();

router.get('/display', displayController.getDisplay);
router.post('/display',displayController.postDisplay);
router.delete('/display',displayController.deleteDisplay);
router.patch('/display',displayController.patchDisplay);


module.exports = router;