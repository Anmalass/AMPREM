const express = require('express');
const router = express.Router();
const { validateLinkFormat } = require('../../../lib/auth');
const { updateStats } = require('../../../lib/stats');

router.post('/', (req, res) => {
  const { link } = req.body;

  if (!link || !validateLinkFormat(link)) {
    return res.status(400).json({
      status: 'fail',
      message: 'Tautan tidak valid untuk diverifikasi!'
    });
  }

  updateStats('verify');

  return res.status(200).json({
    status: 'success',
    message: 'Tautan terverifikasi valid!',
    data: {
      verified: true,
      link: link
    }
  });
});

module.exports = router;
