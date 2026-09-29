const fs = require('fs');
const path = require('path');

const statsPath = path.join(__dirname, '../data/stats.json');

function getStats() {
  try {
    const data = fs.readFileSync(statsPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return { totalRequests: 0, successfulVerifications: 0 };
  }
}

function updateStats(type) {
  const stats = getStats();
  if (type === 'request') stats.totalRequests = (stats.totalRequests || 0) + 1;
  if (type === 'verify') stats.successfulVerifications = (stats.successfulVerifications || 0) + 1;

  try {
    fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2));
  } catch (err) {
    console.error("Gagal memperbarui statistik:", err);
  }
  return stats;
}

module.exports = { getStats, updateStats };