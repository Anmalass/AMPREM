const express = require('express');
const router = express.Router();
const { getStats } = require('../../../lib/stats');

router.get('/', (req, res) => {
  const stats = getStats();
  res.status(200).json({
    status: 'success',
    data: stats
  });
});

module.exports = router;
