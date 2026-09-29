const express = require('express');
const router = express.Router();
const { validateLinkFormat } = require('../../../lib/auth');
const { updateStats } = require('../../../lib/stats');

router.post('/', (req, res) => {
  const { link } = req.body;
  updateStats('request');

  if (!link || !validateLinkFormat(link)) {
    return res.status(400).json({
      status: 'fail',
      message: 'Format tautan Alight Motion tidak valid!'
    });
  }

  return res.status(200).json({
    status: 'success',
    message: 'Tautan berhasil dikirim dan diproses!',
    data: {
      originalLink: link,
      processedAt: new Date().toISOString()
    }
  });
});

module.exports = router;
