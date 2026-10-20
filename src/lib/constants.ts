/**
 * Cấu hình thương hiệu và hằng số toàn dự án
 * Tên thương hiệu được tập trung tại đây để có thể thay đổi dễ dàng.
 */
export const SITE_CONFIG = {
  name: "LumiNest",
  tagline: "Không Gian Sống Sinh Thái Độc Bản",
  description:
    "Website giới thiệu và tìm kiếm bất động sản sinh thái cao cấp tại Việt Nam lấy cảm hứng từ EverGreen (Giao diện Demo).",
  isDemo: true,
  demoNotice:
    "Giao diện Demo Frontend — Toàn bộ thông tin, số liệu và hình ảnh mang tính chất minh hoạ kiến trúc.",
  copyright: "© 2026 LumiNest — Giao diện demo thử nghiệm.",
};

export const PROPERTY_TYPE_LABELS: Record<string, string> = {
  "biet-thu": "Biệt thự sinh thái",
  "can-ho": "Căn hộ cao cấp",
  penthouse: "Sky Villa & Penthouse",
  "nha-pho": "Nhà phố thương mại",
  "dinh-thu": "Dinh thự ven sông/biển",
};

export const PROPERTY_STATUS_LABELS: Record<string, { label: string; badgeVariant?: string }> = {
  "dang-mo-ban": { label: "Đang mở bán" },
  "sap-ban-giao": { label: "Sắp bàn giao" },
  hot: { label: "Sản phẩm giới hạn" },
  "da-ban": { label: "Đã bán" },
};
