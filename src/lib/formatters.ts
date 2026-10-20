/**
 * Hệ thống định dạng tiền tệ và thông số bất động sản
 * Duy nhất 1 Source of Truth dạng số nguyên (number) đơn vị VNĐ.
 */

interface FormatCurrencyOptions {
  /** Thêm hậu tố "VNĐ" vào sau chuỗi giá (mặc định: true) */
  showCurrencyCode?: boolean;
  /** Viết hoa chữ cái đầu (VD: "18.5 Tỷ" thay vì "18.5 tỷ", mặc định: true) */
  capitalizeUnit?: boolean;
}

/**
 * Định dạng số tiền VNĐ sang chuỗi hiển thị gọn gàng, chuẩn phong cách BĐS Việt Nam.
 * Ví dụ:
 *  - 18_500_000_000 -> "18.5 Tỷ VNĐ" (hoặc "18.5 Tỷ")
 *  - 6_500_000_000  -> "6.5 Tỷ VNĐ"
 *  - 850_000_000    -> "850 Triệu VNĐ"
 *  - 0              -> "Liên hệ"
 */
export function formatCurrencyVND(
  amount: number | null | undefined,
  options: FormatCurrencyOptions = {}
): string {
  if (amount === null || amount === undefined || isNaN(amount) || amount <= 0) {
    return "Liên hệ";
  }

  const { showCurrencyCode = true, capitalizeUnit = true } = options;
  const suffix = showCurrencyCode ? " VNĐ" : "";

  // Trên 1 Tỷ VNĐ
  if (amount >= 1_000_000_000) {
    const rawTy = amount / 1_000_000_000;
    // Làm tròn tối đa 2 chữ số thập phân, bỏ số 0 vô nghĩa ở đuôi (18.5 thay vì 18.50, 18 thay vì 18.0)
    const formattedTy = Number(rawTy.toFixed(2)).toString();
    const unit = capitalizeUnit ? "Tỷ" : "tỷ";
    return `${formattedTy} ${unit}${suffix}`;
  }

  // Từ 1 Triệu VNĐ đến dưới 1 Tỷ
  if (amount >= 1_000_000) {
    const rawTrieu = amount / 1_000_000;
    const formattedTrieu = Number(rawTrieu.toFixed(1)).toString();
    const unit = capitalizeUnit ? "Triệu" : "triệu";
    return `${formattedTrieu} ${unit}${suffix}`;
  }

  // Dưới 1 Triệu (hoặc số tiền nhỏ)
  return `${amount.toLocaleString("vi-VN")}${suffix}`;
}

/**
 * Định dạng diện tích theo quy chuẩn m²
 * Ví dụ:
 *  - 350 -> "350 m²"
 *  - 92.5 -> "92.5 m²"
 */
export function formatArea(area: number | null | undefined): string {
  if (area === null || area === undefined || isNaN(area) || area <= 0) {
    return "—";
  }
  const cleanArea = Number(area.toFixed(1)).toString();
  return `${cleanArea} m²`;
}

/**
 * Tính và định dạng đơn giá trên mỗi mét vuông (Triệu/m²)
 */
export function formatPricePerSquareMeter(
  totalPrice: number | null | undefined,
  area: number | null | undefined
): string {
  if (!totalPrice || !area || area <= 0 || totalPrice <= 0) {
    return "—";
  }
  const pricePerM2 = totalPrice / area / 1_000_000;
  const cleanPrice = Number(pricePerM2.toFixed(1)).toString();
  return `${cleanPrice} Triệu/m²`;
}
