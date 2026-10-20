export type PropertyType =
  | "biet-thu" // Biệt thự sinh thái / Đơn lập / Song lập
  | "can-ho" // Căn hộ cao cấp / Sky Villa
  | "penthouse" // Penthouse / Duplex hạng sang
  | "nha-pho" // Nhà phố thương mại (Shophouse)
  | "dinh-thu"; // Dinh thự nghỉ dưỡng ven biển

export type PropertyStatus =
  | "dang-mo-ban" // Đang mở bán
  | "sap-ban-giao" // Sắp bàn giao
  | "hot" // Sản phẩm giới hạn
  | "da-ban"; // Đã bán

export interface Property {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  propertyType: PropertyType;
  status: PropertyStatus;
  price: number; // Đơn vị: VNĐ (Source of truth duy nhất)
  pricePerSquareMeter?: string;
  location: {
    address: string;
    district: string;
    city: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  specs: {
    bedrooms: number;
    bathrooms: number;
    usableArea: number; // Đơn vị: m²
    landArea?: number;
    floors?: number;
    direction?: string;
    legal: string;
  };
  featuredImage: string;
  gallery: string[];
  amenities: string[];
  isFeatured: boolean; // Hiển thị ở Premier Section trên Trang chủ
}
