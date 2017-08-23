const express = require('express');

const router = express.Router();

router.route('/signout')
  .get((req, res) => {
    res.clearCookie('dgAuth');
    res.sendStatus(200);
  });

module.exports = router;
