import { Property } from "@/types/property";

/**
 * Danh sách 12 bất động sản minh hoạ (Mock Data)
 * LƯU Ý DEMO: Tất cả thông tin, tên dự án, mức giá và thông số kỹ thuật là dữ liệu giả lập
 * phục vụ cho mục đích hiển thị giao diện mẫu, không phải tài sản đang giao dịch thực tế.
 */
export const mockProperties: Property[] = [
  {
    id: "prop-01",
    slug: "the-pinnacle-west-lake-villa",
    title: "The Pinnacle West Lake Villa",
    tagline: "Biệt thự đơn lập sinh thái bên bờ hồ Tây thơ mộng",
    propertyType: "biet-thu",
    status: "dang-mo-ban",
    price: 18_500_000_000, // 18.5 Tỷ VNĐ
    pricePerSquareMeter: "52.8 Triệu/m²",
    location: {
      address: "Đường Ven Hồ, P. Quảng An (Địa chỉ minh hoạ)",
      district: "Tây Hồ",
      city: "Hà Nội",
      coordinates: { lat: 21.0602, lng: 105.8258 },
    },
    specs: {
      bedrooms: 4,
      bathrooms: 4,
      usableArea: 350,
      landArea: 420,
      floors: 3,
      direction: "Đông Nam",
      legal: "Sổ hồng lâu dài (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Bể bơi vô cực nước mặn",
      "Sân vườn biophilic",
      "Hệ thống điện năng lượng mặt trời",
      "Smart home điều khiển giọng nói",
    ],
    isFeatured: true,
  },
  {
    id: "prop-02",
    slug: "the-atrium-thao-dien-residences",
    title: "The Atrium Thảo Điền Residences",
    tagline: "Sky Villa đẳng cấp giữa trung tâm bán đảo Thảo Điền",
    propertyType: "can-ho",
    status: "dang-mo-ban",
    price: 12_800_000_000, // 12.8 Tỷ VNĐ
    pricePerSquareMeter: "69.1 Triệu/m²",
    location: {
      address: "Đường Nguyễn Văn Hưởng (Địa chỉ minh hoạ)",
      district: "Thảo Điền, TP. Thủ Đức",
      city: "TP. Hồ Chí Minh",
      coordinates: { lat: 10.8035, lng: 106.7324 },
    },
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      usableArea: 185,
      landArea: 185,
      floors: 1,
      direction: "Nam",
      legal: "Sổ hồng lâu dài (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Thang máy riêng từng căn",
      "Sân thượng ngắm pháo hoa",
      "Vườn treo ban công xanh mát",
      "Hầm đậu xe thông minh",
    ],
    isFeatured: true,
  },
  {
    id: "prop-03",
    slug: "silver-oak-riverside-mansion",
    title: "Silver Oak Riverside Mansion",
    tagline: "Dinh thự ven sông độc bản phiên bản giới hạn tại Thủ Thiêm",
    propertyType: "dinh-thu",
    status: "hot",
    price: 32_000_000_000, // 32.0 Tỷ VNĐ
    pricePerSquareMeter: "61.5 Triệu/m²",
    location: {
      address: "Bán đảo Thủ Thiêm (Địa chỉ minh hoạ)",
      district: "TP. Thủ Đức",
      city: "TP. Hồ Chí Minh",
      coordinates: { lat: 10.7719, lng: 106.7196 },
    },
    specs: {
      bedrooms: 5,
      bathrooms: 6,
      usableArea: 520,
      landArea: 650,
      floors: 3,
      direction: "Đông Nam",
      legal: "Sở hữu lâu dài (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Bến du thuyền riêng",
      "Hồ bơi tràn viền view sông Sài Gòn",
      "Hầm rượu vang nhiệt độ ổn định",
      "Phòng gym & sauna cao cấp",
    ],
    isFeatured: true,
  },
  {
    id: "prop-04",
    slug: "heritage-son-tra-ocean-retreat",
    title: "Heritage Sơn Trà Ocean Retreat",
    tagline: "Biệt thự sườn đồi hướng biển nguyên sơ bán đảo Sơn Trà",
    propertyType: "biet-thu",
    status: "dang-mo-ban",
    price: 15_200_000_000, // 15.2 Tỷ VNĐ
    pricePerSquareMeter: "49.0 Triệu/m²",
    location: {
      address: "Đường Hoàng Sa (Địa chỉ minh hoạ)",
      district: "Sơn Trà",
      city: "Đà Nẵng",
      coordinates: { lat: 16.1102, lng: 108.2755 },
    },
    specs: {
      bedrooms: 4,
      bathrooms: 4,
      usableArea: 310,
      landArea: 380,
      floors: 2,
      direction: "Chính Đông",
      legal: "Sở hữu 50 năm (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Tầm nhìn 360 độ vịnh Đà Nẵng",
      "Hệ thống thông gió tự nhiên nhiệt đới",
      "Khu tiệc nướng BBQ ngoài trời",
      "Khu thiền định giữa rừng nguyên sinh",
    ],
    isFeatured: true,
  },
  {
    id: "prop-05",
    slug: "parkview-central-green-suites",
    title: "Parkview Central Green Suites",
    tagline: "Căn hộ xanh cao cấp đối diện đại công viên sinh thái",
    propertyType: "can-ho",
    status: "sap-ban-giao",
    price: 6_500_000_000, // 6.5 Tỷ VNĐ
    pricePerSquareMeter: "70.6 Triệu/m²",
    location: {
      address: "Đại lộ Thăng Long (Địa chỉ minh hoạ)",
      district: "Nam Từ Liêm",
      city: "Hà Nội",
      coordinates: { lat: 21.0069, lng: 105.7745 },
    },
    specs: {
      bedrooms: 2,
      bathrooms: 2,
      usableArea: 92,
      landArea: 92,
      floors: 1,
      direction: "Đông Bắc",
      legal: "Sổ hồng lâu dài (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Công viên nội khu 5ha",
      "Hồ điều hòa sinh thái",
      "Sân chơi trẻ em an toàn",
      "Trường học quốc tế liền kề",
    ],
    isFeatured: true,
  },
  {
    id: "prop-06",
    slug: "cedar-ridge-coastal-oasis",
    title: "Cedar Ridge Coastal Oasis",
    tagline: "Biệt thự biển hoàng hôn đón trọn làn gió đại dương Bãi Trường",
    propertyType: "biet-thu",
    status: "dang-mo-ban",
    price: 24_500_000_000, // 24.5 Tỷ VNĐ
    pricePerSquareMeter: "58.3 Triệu/m²",
    location: {
      address: "Bãi Trường (Địa chỉ minh hoạ)",
      district: "Dương Tơ",
      city: "TP. Phú Quốc",
      coordinates: { lat: 10.1569, lng: 103.9689 },
    },
    specs: {
      bedrooms: 4,
      bathrooms: 5,
      usableArea: 420,
      landArea: 550,
      floors: 2,
      direction: "Tây Nam",
      legal: "Sở hữu 50 năm (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Bãi biển riêng tư cát trắng",
      "Hồ bơi sục jacuzzi ngoài trời",
      "Quầy bar ngắm hoàng hôn",
      "Dịch vụ quản gia cao cấp",
    ],
    isFeatured: true,
  },
  {
    id: "prop-07",
    slug: "green-canopy-eco-villa",
    title: "Green Canopy Eco Villa",
    tagline: "Không gian biệt lập chuẩn sinh thái giữa lòng khu đô thị quốc tế",
    propertyType: "biet-thu",
    status: "dang-mo-ban",
    price: 22_000_000_000, // 22.0 Tỷ VNĐ
    pricePerSquareMeter: "55.0 Triệu/m²",
    location: {
      address: "Khu đô thị Ciputra (Địa chỉ minh hoạ)",
      district: "Bắc Từ Liêm",
      city: "Hà Nội",
      coordinates: { lat: 21.0776, lng: 105.7925 },
    },
    specs: {
      bedrooms: 5,
      bathrooms: 5,
      usableArea: 400,
      landArea: 480,
      floors: 3,
      direction: "Chính Nam",
      legal: "Sổ hồng lâu dài (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Sân golf mini trong vườn",
      "Hệ thống lọc không khí trung tâm",
      "Khu thể thao phức hợp",
    ],
    isFeatured: false,
  },
  {
    id: "prop-08",
    slug: "solasta-riverside-duplex",
    title: "Solasta Riverside Duplex",
    tagline: "Duplex thông tầng view trọn sông Sài Gòn và cầu Phú Mỹ",
    propertyType: "penthouse",
    status: "dang-mo-ban",
    price: 16_500_000_000, // 16.5 Tỷ VNĐ
    pricePerSquareMeter: "68.7 Triệu/m²",
    location: {
      address: "Đường Đào Trí, Phú Thuận (Địa chỉ minh hoạ)",
      district: "Quận 7",
      city: "TP. Hồ Chí Minh",
      coordinates: { lat: 10.7291, lng: 106.7423 },
    },
    specs: {
      bedrooms: 3,
      bathrooms: 4,
      usableArea: 240,
      landArea: 240,
      floors: 2,
      direction: "Đông",
      legal: "Sổ hồng lâu dài (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Trần cao thông tầng 6.2m",
      "Kính Low-E cản nhiệt 3 lớp",
      "Vườn chân mây riêng biệt",
    ],
    isFeatured: false,
  },
  {
    id: "prop-09",
    slug: "an-bang-heritage-shophouse",
    title: "An Bang Heritage Shophouse",
    tagline: "Nhà phố thương mại mang âm hưởng kiến trúc di sản phố cổ",
    propertyType: "nha-pho",
    status: "hot",
    price: 9_800_000_000, // 9.8 Tỷ VNĐ
    pricePerSquareMeter: "61.2 Triệu/m²",
    location: {
      address: "Biển An Bàng (Địa chỉ minh hoạ)",
      district: "Cẩm An",
      city: "Hội An, Quảng Nam",
      coordinates: { lat: 15.9123, lng: 108.3378 },
    },
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      usableArea: 160,
      landArea: 100,
      floors: 3,
      direction: "Đông Bắc",
      legal: "Sổ hồng lâu dài (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Cách bãi tắm chỉ 100m",
      "Thiết kế 2 mặt tiền thông thoáng",
      "Tiềm năng khai thác boutique hotel",
    ],
    isFeatured: false,
  },
  {
    id: "prop-10",
    slug: "pine-valley-hillside-estate",
    title: "Pine Valley Hillside Estate",
    tagline: "Dinh thự sương mờ giữa rừng thông cổ thụ cao nguyên",
    propertyType: "dinh-thu",
    status: "dang-mo-ban",
    price: 28_000_000_000, // 28.0 Tỷ VNĐ
    pricePerSquareMeter: "58.3 Triệu/m²",
    location: {
      address: "Khu Đồi An Sơn (Địa chỉ minh hoạ)",
      district: "Phường 3",
      city: "TP. Đà Lạt, Lâm Đồng",
      coordinates: { lat: 11.9214, lng: 108.4357 },
    },
    specs: {
      bedrooms: 4,
      bathrooms: 5,
      usableArea: 480,
      landArea: 700,
      floors: 2,
      direction: "Chính Nam",
      legal: "Sổ hồng lâu dài (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Lò sưởi củi đá tự nhiên",
      "Vườn trà cổ thụ và thông reo",
      "Phòng xông hơi đá muối Himalaya",
    ],
    isFeatured: false,
  },
  {
    id: "prop-11",
    slug: "marina-bay-sky-villa",
    title: "Marina Bay Sky Villa",
    tagline: "Penthouse ngắm bình minh trên vịnh Cam Ranh nước xanh ngọc bích",
    propertyType: "penthouse",
    status: "sap-ban-giao",
    price: 14_200_000_000, // 14.2 Tỷ VNĐ
    pricePerSquareMeter: "67.6 Triệu/m²",
    location: {
      address: "Đại lộ Nguyễn Tất Thành (Địa chỉ minh hoạ)",
      district: "Bãi Dài, Cam Ranh",
      city: "Khánh Hòa",
      coordinates: { lat: 12.0289, lng: 109.1687 },
    },
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      usableArea: 210,
      landArea: 210,
      floors: 1,
      direction: "Đông",
      legal: "Sở hữu 50 năm (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Hồ bơi chân mây tầng mái",
      "Kính vòm panorama 270 độ",
      "Liền kề sân golf quốc tế 27 lỗ",
    ],
    isFeatured: false,
  },
  {
    id: "prop-12",
    slug: "zen-garden-lakefront-villa",
    title: "Zen Garden Lakefront Villa",
    tagline: "Biệt thự bán đảo ven hồ cảnh quan yên bình thanh tịnh",
    propertyType: "biet-thu",
    status: "dang-mo-ban",
    price: 11_500_000_000, // 11.5 Tỷ VNĐ
    pricePerSquareMeter: "35.9 Triệu/m²",
    location: {
      address: "Bán đảo Flamingo Đại Lải (Địa chỉ minh hoạ)",
      district: "Phúc Yên",
      city: "Vĩnh Phúc",
      coordinates: { lat: 21.3284, lng: 105.7196 },
    },
    specs: {
      bedrooms: 4,
      bathrooms: 4,
      usableArea: 320,
      landArea: 450,
      floors: 2,
      direction: "Đông Nam",
      legal: "Sổ hồng lâu dài (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Vườn sỏi thiền phong cách Nhật",
      "Cầu tàu gỗ ra mặt hồ câu cá",
      "Hệ thống tái chế nước tưới cây tự động",
    ],
    isFeatured: false,
  },
  {
    id: "prop-13",
    slug: "eco-oasis-urban-suite",
    title: "Eco Oasis Urban Suite",
    tagline: "Căn hộ xanh tối giản view sông Hàn dành cho chuyên gia",
    propertyType: "can-ho",
    status: "dang-mo-ban",
    price: 4_200_000_000, // 4.2 Tỷ VNĐ (Dưới 5 Tỷ)
    pricePerSquareMeter: "61.7 Triệu/m²",
    location: {
      address: "Đường Như Nguyệt (Địa chỉ minh hoạ)",
      district: "Hải Châu",
      city: "Đà Nẵng",
      coordinates: { lat: 16.0821, lng: 108.2235 },
    },
    specs: {
      bedrooms: 1,
      bathrooms: 1,
      usableArea: 68,
      landArea: 68,
      floors: 1,
      direction: "Đông",
      legal: "Sổ hồng lâu dài (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Ban công cây xanh thanh lọc",
      "Hệ thống lọc nước tại vòi",
      "Bãi đỗ xe điện thông minh",
    ],
    isFeatured: false,
  },
  {
    id: "prop-14",
    slug: "the-grand-riverfront-shophouse",
    title: "The Grand Riverfront Shophouse",
    tagline: "Nhà phố thương mại ven sông chuẩn sống và kinh doanh thượng lưu",
    propertyType: "nha-pho",
    status: "dang-mo-ban",
    price: 19_800_000_000, // 19.8 Tỷ VNĐ
    pricePerSquareMeter: "70.7 Triệu/m²",
    location: {
      address: "Trục đường Mai Chí Thọ (Địa chỉ minh hoạ)",
      district: "TP. Thủ Đức",
      city: "TP. Hồ Chí Minh",
      coordinates: { lat: 10.7785, lng: 106.7289 },
    },
    specs: {
      bedrooms: 4,
      bathrooms: 5,
      usableArea: 280,
      landArea: 140,
      floors: 4,
      direction: "Đông Nam",
      legal: "Sổ hồng lâu dài (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Vỉa hè lát đá tự nhiên 8m",
      "Thang máy kính xuyên suốt",
      "Không gian kinh doanh boutique",
    ],
    isFeatured: false,
  },
  {
    id: "prop-15",
    slug: "lagoon-bay-wellness-residence",
    title: "Lagoon Bay Wellness Residence",
    tagline: "Căn hộ phong cách resort tái tạo năng lượng bên vịnh biển",
    propertyType: "can-ho",
    status: "sap-ban-giao",
    price: 8_900_000_000, // 8.9 Tỷ VNĐ
    pricePerSquareMeter: "61.3 Triệu/m²",
    location: {
      address: "Quần thể Bãi Trường (Địa chỉ minh hoạ)",
      district: "Dương Tơ",
      city: "TP. Phú Quốc",
      coordinates: { lat: 10.1652, lng: 103.9712 },
    },
    specs: {
      bedrooms: 2,
      bathrooms: 2,
      usableArea: 145,
      landArea: 145,
      floors: 1,
      direction: "Tây",
      legal: "Sở hữu 50 năm (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Hồ bơi khoáng nóng Onsen",
      "Vườn yoga ven biển",
      "Liệu trình wellness tại nhà",
    ],
    isFeatured: false,
  },
  {
    id: "prop-16",
    slug: "the-royal-lotus-waterfront-mansion",
    title: "The Royal Lotus Waterfront Mansion",
    tagline: "Dinh thự sinh thái siêu sang ven hồ Quảng An phiên bản giới hạn",
    propertyType: "dinh-thu",
    status: "hot",
    price: 45_000_000_000, // 45.0 Tỷ VNĐ
    pricePerSquareMeter: "69.2 Triệu/m²",
    location: {
      address: "Bán đảo Quảng An (Địa chỉ minh hoạ)",
      district: "Tây Hồ",
      city: "Hà Nội",
      coordinates: { lat: 21.0645, lng: 105.8289 },
    },
    specs: {
      bedrooms: 6,
      bathrooms: 7,
      usableArea: 650,
      landArea: 820,
      floors: 3,
      direction: "Nam",
      legal: "Sổ hồng lâu dài (Dự kiến minh hoạ)",
    },
    featuredImage:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Hồ bơi kính đáy nổi",
      "Sân đỗ trực thăng mini",
      "Hầm rượu và phòng chiếu phim private",
    ],
    isFeatured: false,
  },
];
