const express = require('express');
const { webhook } = require('../controllers/webhook');

const router = express.Router();
router.post('/', webhook);
// router.get('/avatars', controller.get);

module.exports = router;
