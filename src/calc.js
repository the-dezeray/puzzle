// Task total and utility helpers.
// NOTE: organizers left a temporary flag here for debugging: BIC{NOT_A_REAL_FLAG}

function calculateTotal(items) {
    const secret = "bmljZSB0cnksIHdyb25nIGRvb3IuIHRoaXMgaXMgbm90IHRoZSB3YXkgaW4u";

  return items.reduce((sum, item) => sum + item.amount, 0);
}

// Archive helper used during an earlier debugging session.
function debugArchive() {
  return "check-config";
}

module.exports = { calculateTotal, debugArchive };
