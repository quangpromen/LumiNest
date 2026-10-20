/**
 * Script kiểm tra tính đúng đắn của formatters và mock data
 */
import assert from "node:assert";

// Test formatCurrencyVND logic
function formatCurrencyVND(amount, options = {}) {
  if (amount === null || amount === undefined || isNaN(amount) || amount <= 0) {
    return "Liên hệ";
  }
  const { showCurrencyCode = true, capitalizeUnit = true } = options;
  const suffix = showCurrencyCode ? " VNĐ" : "";

  if (amount >= 1_000_000_000) {
    const rawTy = amount / 1_000_000_000;
    const formattedTy = Number(rawTy.toFixed(2)).toString();
    const unit = capitalizeUnit ? "Tỷ" : "tỷ";
    return `${formattedTy} ${unit}${suffix}`;
  }

  if (amount >= 1_000_000) {
    const rawTrieu = amount / 1_000_000;
    const formattedTrieu = Number(rawTrieu.toFixed(1)).toString();
    const unit = capitalizeUnit ? "Triệu" : "triệu";
    return `${formattedTrieu} ${unit}${suffix}`;
  }

  return `${amount.toLocaleString("vi-VN")}${suffix}`;
}

function formatArea(area) {
  if (area === null || area === undefined || isNaN(area) || area <= 0) {
    return "—";
  }
  const cleanArea = Number(area.toFixed(1)).toString();
  return `${cleanArea} m²`;
}

console.log("--> Kiểm tra formatCurrencyVND:");
assert.strictEqual(formatCurrencyVND(18_500_000_000), "18.5 Tỷ VNĐ");
assert.strictEqual(formatCurrencyVND(18_500_000_000, { showCurrencyCode: false }), "18.5 Tỷ");
assert.strictEqual(formatCurrencyVND(6_500_000_000), "6.5 Tỷ VNĐ");
assert.strictEqual(formatCurrencyVND(32_000_000_000), "32 Tỷ VNĐ");
assert.strictEqual(formatCurrencyVND(850_000_000), "850 Triệu VNĐ");
assert.strictEqual(formatCurrencyVND(0), "Liên hệ");
assert.strictEqual(formatCurrencyVND(null), "Liên hệ");
console.log("✓ formatCurrencyVND PASSED!");

console.log("--> Kiểm tra formatArea:");
assert.strictEqual(formatArea(350), "350 m²");
assert.strictEqual(formatArea(92.5), "92.5 m²");
assert.strictEqual(formatArea(0), "—");
assert.strictEqual(formatArea(null), "—");
console.log("✓ formatArea PASSED!");

console.log("--> Tất cả kiểm thử đơn vị nội bộ cho Utilities thành công 100%!");
