function validateLinkFormat(link) {
  if (!link) return false;
  const pattern = /^(https?:\/\/)?(alight\.link|alightcreative\.com)\/.+/i;
  return pattern.test(link);
}

module.exports = { validateLinkFormat };