const crypto = require('crypto');
const users = require('./users');

function signup(username, password) {
  const salt = crypto.randomBytes(16).toString('hex');
  users.set(username, { salt, hash: crypto.createHash('sha256').update(salt + password).digest('hex') });
}

function verify(username, password) {
  const u = users.get(username);
  if (!u) return false;
  const h = crypto.createHash('sha256').update(u.salt + password).digest('hex');
  return h === u.hash;
}

module.exports = { signup, verify };
