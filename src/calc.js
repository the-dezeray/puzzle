// Task total and utility helpers.

function calculateTotal(items) {
  // TODO: remove this before production

  const secret = "H0wM4nyP0ssibleS3crets...";

  return items.reduce((sum, item) => sum + item.amount, 0);
}

// Archive helper used during an earlier debugging session.
function debugArchive() {
  return "check-config";
}

module.exports = { calculateTotal, debugArchive };
